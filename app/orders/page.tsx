"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { OrderType } from "@/lib/actions";
import { Orders } from "@/lib/generated/prisma";
import { useOrders } from "@/lib/OrderStore";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { redirect, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { json } from "stream/consumers";

type Props = {};

export default function page({}: Props) {
  const { OrderStore, OrderStoreDispatch } = useOrders();
  const [isLoading, setIsLoading] = useState(false);
  const [emptyOrders, setEmptyOrders] = useState(false);
  const searchParams = useSearchParams();
  const target = searchParams.get("target");

  // Fetch orders first
  useEffect(() => {
    async function getOrders() {
      try {
        setIsLoading(true);
        const res = await fetch("/api/orders/get", { credentials: "include" });
        const { orders } = (await res.json()) as { orders: OrderType[] };
        if (orders.length === 0) {
          setEmptyOrders(true);
          setIsLoading(false);
          return;
        }
        orders.forEach((order) => {
          OrderStoreDispatch({ type: "ADD", order });
        });
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    }
    getOrders();
  }, [OrderStoreDispatch]);

  // Handle redirect after hooks
  useEffect(() => {
    if (!target && OrderStore.length > 0 && !isLoading) {
      redirect(`/orders?target=${OrderStore[0].OrderID}`);
    }
  }, [target, OrderStore, isLoading]);

  if (emptyOrders) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">No Orders</h2>
          <p className="text-muted-foreground">
            You don't have any orders yet.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full h-full min-h-0 px-10 py-8 gap-4">
      <div className="w-72 flex flex-col min-h-0 bg-accent rounded-lg p-3 overflow-hidden">
        <h2 className="text-base font-semibold mb-2">Orders</h2>
        <div className="text-xs text-muted-foreground mb-2">
          TODO: add filters
        </div>
        {isLoading && (
          <div className="flex w-fit mx-auto text-sm gap-x-2.5 items-center align-middle py-4">
            loading orders <Loader2 size={12} className="animate-spin" />
          </div>
        )}
        <div className="flex-1 flex flex-col min-h-0 overflow-y-auto">
          {OrderStore.map((order, index) => {
            const total = order.Items.reduce((sum, item) => {
              sum += item.quantity * item.accountItem.Price;
              return sum;
            }, 0);
            const qty = order.Items.reduce((sum, item) => {
              sum += item.quantity;
              return sum;
            }, 0);

            const date = new Date(order.CreatedAt);

            const formatted = date.toLocaleString("en-GB", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            });
            return (
              <Link
                className={`px-2 py-1 my-0.5 rounded border border-border transition-all text-xs ${
                  order.OrderID === target
                    ? order.Status === "PENDING"
                      ? "bg-amber-600 text-white"
                      : order.Status === "DECLINED"
                      ? "bg-red-600 text-white"
                      : "bg-green-600 text-white"
                    : order.Status === "PENDING"
                    ? "bg-amber-500 text-white hover:brightness-105 active:brightness-95"
                    : order.Status === "DECLINED"
                    ? "bg-red-500 text-white hover:brightness-105 active:brightness-95"
                    : "bg-green-500 text-white hover:brightness-105 active:brightness-95"
                }`}
                href={`/orders?target=${order.OrderID}`}
                key={index}
              >
                <div className="flex justify-between text-[11px] mb-0.5">
                  <span className="font-medium truncate">
                    @{order.Sender.Username}
                  </span>
                  <span className="text-[9px] opacity-90 ml-1 shrink-0">
                    {formatted}
                  </span>
                </div>
                <div className="text-[11px]">
                  {qty} {qty > 1 ? "Items" : "Item"} - {total.toFixed(2)} DZD
                </div>
                <div className="text-[9px] mt-0.5 opacity-90">
                  {order.Status}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex-1 relative min-h-0">
        {target ? (
          <OrderDetails />
        ) : (
          <div className="flex items-center justify-center h-full text-muted-foreground">
            Select an order to view details
          </div>
        )}
      </div>
    </div>
  );
}

function OrderDetails() {
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const target = searchParams.get("target")!;
  const { OrderStore, OrderStoreDispatch } = useOrders();
  const order = OrderStore.find((order) => order.OrderID === target);

  const [acceptIsLoading, setAcceptLoading] = useState(false);
  const [declineIsLoading, setDeclineLoading] = useState(false);

  useEffect(() => {
    async function fetchOrder() {
      try {
        setIsLoading(true);
        const res = await fetch("/api/orders/get?target=" + target, {
          credentials: "include",
        });
        const { order } = (await res.json()) as { order?: OrderType };
        if (!order) {
          return;
        }
        OrderStoreDispatch({ type: "ADD", order });
      } catch (error) {
        console.error("Failed to fetch order:", error);
      } finally {
        setIsLoading(false);
      }
    }
    if (!order) {
      fetchOrder();
    }
  }, [target, order, OrderStoreDispatch]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <Loader2 className="animate-spin" size={32} />
      </div>
    );
  }

  if (order) {
    const total = order.Items.reduce((sum, item) => {
      sum += item.quantity * item.accountItem.Price;
      return sum;
    }, 0);

    return (
      <div className="h-full flex flex-col bg-accent rounded-lg overflow-hidden">
        <div className="p-4 border-b border-border shrink-0">
          <h2 className="text-xl font-semibold mb-2">Order Details</h2>
          <div className="flex justify-between text-sm">
            <span>Order ID: {order.OrderID}</span>
            <span
              className={`font-medium ${
                order.Status === "PENDING"
                  ? "text-amber-500"
                  : order.Status === "DECLINED"
                  ? "text-red-500"
                  : "text-green-500"
              }`}
            >
              {order.Status === "ACCEPTED"
                ? `${order.Status} - waiting delivery`
                : order.Status}
            </span>
          </div>
          <div className="text-sm text-muted-foreground mt-1">
            From: @{order.Sender.Username}
          </div>
          <div className="text-lg font-semibold mt-2">
            Total: {total.toFixed(2)} DZD
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-4 min-h-0">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {order.Items.map((item) => {
              return <ItemCard {...item} key={item.accountItem.ItemID} />;
            })}
          </div>
        </div>
        <div className="p-4 border-t border-border flex gap-3 justify-end shrink-0">
          <OrderControls {...order} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground">
        Order not found
      </div>
    );
  }
}

function ItemCard({ quantity, accountItem }: OrderType["Items"][number]) {
  const { ImageLink, ItemID, Price, PurchasePrice, Items } = accountItem;
  const { Name, Type, Brand, Code, CategoryID } = Items;

  return (
    <div className="rounded-lg bg-background border border-border overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-square relative">
        <img
          src={ImageLink}
          alt={Name}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="p-2">
        <div className="flex justify-between items-start mb-1">
          <span className="font-medium text-xs line-clamp-2">{Name}</span>
          <span className="text-xs font-semibold bg-primary text-primary-foreground px-1.5 py-0.5 rounded ml-1 shrink-0">
            x{quantity}
          </span>
        </div>
        {Brand && (
          <div className="text-[10px] text-muted-foreground mb-1 truncate">
            {Brand}
          </div>
        )}
        <div className="flex justify-between text-[10px] text-muted-foreground">
          <span>{Price.toFixed(2)} DZD</span>
          <span className="font-semibold text-foreground">
            {(Price * quantity).toFixed(2)} DZD
          </span>
        </div>
      </div>
    </div>
  );
}

function OrderControls(order: OrderType) {
  const { OrderStoreDispatch } = useOrders();
  const [acceptIsLoading, setAcceptLoading] = useState(false);

  return order.Status === "PENDING" ? (
    <>
      <DeclineModal {...order} />
      <Button
        onClick={async () => {
          try {
            setAcceptLoading(true);
            const res = await fetch(`http://localhost:3000/api/orders/update`, {
              method: "POST",
              credentials: "include",
              body: JSON.stringify({
                orderId: order?.OrderID,
                status: "ACCEPTED",
              }),
            });
            const data = (await res.json()) as {
              order: Orders | null;
            };
            if (!data.order) {
              setAcceptLoading(false);
              return;
            }
            OrderStoreDispatch({
              type: "UPDATE",
              orderID: order.OrderID,
              order: { ...order, Status: "ACCEPTED" },
            });
            setAcceptLoading(false);
          } catch (error) {
            setAcceptLoading(false);
            console.log(error);
          }
        }}
        className="w-24 py-2 flex justify-center bg-green-500 text-white rounded-md hover:bg-green-600 active:bg-green-700 transition-colors font-medium"
      >
        {acceptIsLoading ? <Loader2 className="animate-spin" /> : "Accept"}
      </Button>
    </>
  ) : order.Status === "ACCEPTED" ? (
    <Button>Check Location</Button>
  ) : null;
}

function DeclineModal(order: OrderType) {
  const [declineIsLoading, setDeclineLoading] = useState(false);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 active:bg-red-700 transition-colors font-medium">
          Decline
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Decline order?</DialogTitle>
          <DialogDescription>
            <span>Sender: @{order.Sender.Username}</span>
            <span>Order ID: {order.OrderID}</span>
            <span className="flex gap-x-3.5">
              <span>
                {order.Items.reduce((acc, item) => {
                  acc += item.quantity;
                  return acc;
                }, 0)}{" "}
                items
              </span>
              --
              <span>
                Total:{" "}
                {order.Items.reduce((acc, item) => {
                  acc += item.quantity * item.accountItem.Price;
                  return acc;
                }, 0)}{" "}
                DZD
              </span>
            </span>
          </DialogDescription>
          <Textarea className="resize-none" placeholder="Notes"></Textarea>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button>Cancel</Button>
          </DialogClose>
          <Button
            className="w-20"
            variant={"destructive"}
            onClick={() => setDeclineLoading((prev) => !prev)}
          >
            {declineIsLoading ? (
              <Loader2 className="animate-spin" />
            ) : (
              "Decline"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
