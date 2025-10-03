"use client"
import React, { useState } from 'react';
import { MessageCircle, ShoppingCart, Package, Mail, MapPin, DollarSign, Image as ImageIcon, User } from 'lucide-react';
import {type Accounts} from '@/lib/generated/prisma'
import { ChatType, useMessage } from '@/lib/MessageContext';
import { useSession } from '@/lib/SessionContext';
import { NewChat } from '@/app/api/chats/create/route';
import {v4 as uuidv4 } from 'uuid'


const mockUserItems = [
  {
    ItemID: 1001,
    Name: 'Wireless Mouse',
    Code: 78901,
    Brand: 'Logitech',
    Type: 'Electronics',
    Price: 2999,
    Qty: 15,
    ImageLink: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400'
  },
  {
    ItemID: 1002,
    Name: 'Mechanical Keyboard',
    Code: 78902,
    Brand: 'Corsair',
    Type: 'Electronics',
    Price: 8999,
    Qty: 8,
    ImageLink: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400'
  }
];

function mockChat(id: string, name: string) :ChatType {
  return {
    ChatID: id,
    ChatBox: 'OPEN',
    Members:[],
    Messages: [],
    Name: name,
    Type: 'GROUP'
  }
}

export default function Profile({FirstName, LastName, Username, Email, WorkArea}: Omit<Accounts, "Password">) {

  const [showMessageModal, setShowMessageModal] = useState(false);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const {ChatStore, ChatStoreDispatch} = useMessage()
  const {session} = useSession()


  const formatPrice = (price: number) => {
    return `$${(price / 100).toFixed(2)}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="flex items-start space-x-6">
              <div className="h-24 w-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg flex-shrink-0">
                {FirstName[0]}{LastName[0]}
              </div>
              <div>
                <h1 className="text-3xl font-bold text-slate-900">
                  {FirstName} {LastName}
                </h1>
                <p className="text-slate-600 mt-1 text-lg">@{Username}</p>
                <div className="flex flex-wrap gap-4 mt-3">
                  <div className="flex items-center text-sm text-slate-600">
                    <Mail className="w-4 h-4 mr-2" />
                    {Email}
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    to be added
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Package className="w-4 h-4 mr-2" />
                    {mockUserItems.length} Items
                  </div>
                </div>
              </div>
            </div>
            {session && <div className="flex gap-3">
              <button
                onClick={async () => {
                    const chat = ChatStore.find(c => {
                      const type = c.Type
                      const members = c.Members.map(m => m.Username)
                      return type == 'DM' && members.length == 2 && members.includes(session.Username!) && members.includes(Username!)
                    })
                    if (chat) {
                      ChatStoreDispatch({type:"SET_CHATBOX", chat:{...chat, ChatBox: 'OPEN'}})
                      return
                    } else {
                      let mockid = uuidv4()
                      const mockchat = mockChat(mockid, Username ?? '')
                      ChatStoreDispatch({type:'ADD', chat:{...mockchat, ChatBox:'OPEN'}})
                      try { 
                        let res = await fetch(`/api/chats/get_dm?target=${Username}`)
                        const dm = await res.json() as {ok: boolean, DM:NewChat}
                        if (dm.ok && dm.DM) {
                          ChatStoreDispatch({type:'UPDATE', chatID:mockid, chat:{...dm.DM, ChatBox:'OPEN'}})
                          return
                        }
                        res = await fetch('/api/chats/create', {
                          method: 'POST',
                          body: JSON.stringify({
                            members: [Username, session.Username],
                            type: 'DM'
                          })
                        })
                        const {ok, newChat} = await res.json() as {ok: boolean, newChat: NewChat}
                        if (ok && newChat) {
                          ChatStoreDispatch({type:'UPDATE', chatID:mockid, chat:{...newChat, ChatBox:'OPEN'}})
                          return
                        }
                      } catch (error) {
                        
                      }
                    }
                }}
                className="bg-white border-2 border-slate-300 hover:border-blue-500 hover:bg-blue-50 text-slate-700 px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Message</span>
              </button>
              <button
                onClick={() => setShowOrderModal(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transition-colors shadow-md"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Create Order</span>
              </button>
            </div>}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Available Items</h2>
          <p className="text-slate-600">Browse items from this seller's inventory</p>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockUserItems.map((item) => (
            <div
              key={item.ItemID}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-200 hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 bg-slate-200">
                <img
                  src={item.ImageLink}
                  alt={item.Name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.nextSibling instanceof HTMLElement) {   
                        e.currentTarget.nextSibling.style.display = 'flex';
                    }
                  }}
                />
                <div className="hidden absolute inset-0 items-center justify-center bg-slate-300">
                  <ImageIcon className="w-16 h-16 text-slate-400" />
                </div>
                {item.Qty < 10 && (
                  <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                    Low Stock
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.Name}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Brand</span>
                    <span className="font-semibold text-slate-900">{item.Brand}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Type</span>
                    <span className="font-semibold text-slate-900">{item.Type}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Code</span>
                    <span className="font-mono text-slate-900">{item.Code}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">In Stock</span>
                    <span className="font-semibold text-green-600">{item.Qty} units</span>
                  </div>
                </div>
                <div className="border-t border-slate-200 pt-4 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600 text-sm">Price</span>
                    <span className="text-2xl font-bold text-blue-600">{formatPrice(item.Price)}</span>
                  </div>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors">
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Message Modal */}
      {showMessageModal && (
        <div className="fixed inset-0 bg-black/20 flex items-center justify-center p-4 z-50"
        onClick={() => setShowMessageModal(false)}
        >
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full p-6" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-slate-900">Send Message</h3>
              <button
                onClick={() => setShowMessageModal(false)}
                className="text-slate-400 hover:text-slate-600 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="mb-4">
              <p className="text-slate-600 mb-1">To:</p>
              <p className="font-semibold text-slate-900">{FirstName} {LastName} (@{Username})</p>
            </div>
            <div className="mb-6">
              <label className="block text-slate-700 font-medium mb-2">Message</label>
              <textarea
                placeholder="Type your message here..."
                className="w-full border border-slate-300 rounded-lg p-4 h-40 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
              />
            </div>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowMessageModal(false)}
                className="px-6 py-3 text-slate-600 hover:bg-slate-100 rounded-lg font-medium transition-colors"
              >
                Cancel
              </button>
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                Send Message
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Order Modal */}
      {showOrderModal && (
        <div className="fixed inset-0 bg-black/20 flex items-center justify-center p-4 z-50" onClick={() => {
            setShowOrderModal(false)
        }}>
          <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b border-slate-200 p-6 z-10">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-slate-900">Create Order</h3>
                <button
                  onClick={() => setShowOrderModal(false)}
                  className="text-slate-400 hover:text-slate-600 text-2xl"
                >
                  ×
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <p className="text-slate-600 mb-1">Order from:</p>
                <p className="font-semibold text-slate-900 text-lg">{FirstName} {LastName}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-slate-900 mb-3">Select Items</h4>
                <div className="space-y-3">
                  {mockUserItems.map((item) => (
                    <div key={item.ItemID} className="flex items-center space-x-4 p-4 border border-slate-200 rounded-lg hover:bg-slate-50">
                      <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
                      <img
                        src={item.ImageLink}
                        alt={item.Name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h5 className="font-semibold text-slate-900">{item.Name}</h5>
                        <p className="text-sm text-slate-600">{item.Brand} - {item.Type}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-blue-600">{formatPrice(item.Price)}</p>
                        <p className="text-sm text-slate-600">{item.Qty} available</p>
                      </div>
                      <input
                        type="number"
                        placeholder="Qty"
                        min="1"
                        className="w-20 border border-slate-300 rounded-lg p-2 text-center"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-slate-700 font-medium mb-2">Order Notes (Optional)</label>
                <textarea
                  placeholder="Add any special instructions or notes..."
                  className="w-full border border-slate-300 rounded-lg p-4 h-24 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
                />
              </div>

              <div className="bg-slate-50 rounded-lg p-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-600">Subtotal</span>
                  <span className="font-semibold text-slate-900">$0.00</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-600">Tax</span>
                  <span className="font-semibold text-slate-900">$0.00</span>
                </div>
                <div className="border-t border-slate-300 pt-2 mt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-slate-900">Total</span>
                    <span className="text-2xl font-bold text-blue-600">$0.00</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setShowOrderModal(false)}
                  className="px-6 py-3 text-slate-600 hover:bg-slate-100 rounded-lg font-medium transition-colors"
                >
                  Cancel
                </button>
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center space-x-2">
                  <ShoppingCart className="w-5 h-5" />
                  <span>Place Order</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}