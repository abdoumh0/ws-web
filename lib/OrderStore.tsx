"use client";
import React, { useState, createContext, useContext, useReducer } from "react";
import { OrderType } from "./actions";
import { uniqBy } from "lodash";

type Props = {
  children: React.ReactNode;
};

type OrderStoreActions = "ADD" | "REMOVE" | "UPDATE" | "NUKE";

type OrderContextType = {
  OrderStore: OrderType[];
  OrderStoreDispatch: React.Dispatch<{
    type: OrderStoreActions;
    orderID?: string;
    order: OrderType;
  }>;
};

const OrderContext = createContext<OrderContextType | undefined>(undefined);

function orderStoreReducer(
  state: OrderType[],
  action: {
    type: OrderStoreActions;
    orderID?: string;
    order: OrderType;
  }
) {
  switch (action.type) {
    case "ADD":
      return uniqBy([...state, { ...action.order }], "OrderID");

    case "REMOVE":
      return state.filter((order) => order.OrderID !== action.orderID);

    case "UPDATE":
      return state.map((order) =>
        order.OrderID === action.orderID ? action.order : order
      );

    case "NUKE":
      return [];

    default:
      return state;
  }
}

export default function OrderProvider({ children }: Props) {
  const [OrderStore, OrderStoreDispatch] = useReducer(orderStoreReducer, []);

  return (
    <OrderContext.Provider
      value={{
        OrderStore,
        OrderStoreDispatch,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (!context)
    throw new Error("useOrders must be used within an OrderProvider");
  return context;
};
