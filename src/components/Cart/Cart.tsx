import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';
import { useAuthStore } from '../../store/authStore';

export const Cart: React.FC = () => {
  const { items, updateQuantity, removeItem, getTotalPrice, clearCart } = useCartStore();
  const { user } = useAuthStore();
  const navigate = useNavigate();

  if (!user || user.role !== 'customer') {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h2>
        <p className="text-gray-600">Only customers can access the cart.</p>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-8">Start shopping to add items to your cart</p>
        <button
          onClick={() => navigate('/products')}
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          Browse Products
        </button>
      </div>
    );
  }

  const handleCheckout = () => {
    // Navigate to checkout page (to be implemented)
    navigate('/checkout');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6">
          {items.map(item => (
            <div key={item.id} className="flex items-center py-6 border-b border-gray-200 last:border-b-0">
              <img
                src={item.image_url || `https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=100`}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-lg"
              />
              
              <div className="flex-1 ml-4">
                <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                <p className="text-gray-600">{item.price} ETB/{item.unit}</p>
                <p className="text-sm text-gray-500">{item.location}</p>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={() => updateQuantity(item.id, item.cartQuantity - 1)}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <Minus className="h-4 w-4" />
                </button>
                
                <span className="text-lg font-medium w-12 text-center">
                  {item.cartQuantity}
                </span>
                
                <button
                  onClick={() => updateQuantity(item.id, item.cartQuantity + 1)}
                  disabled={item.cartQuantity >= item.quantity}
                  className="p-1 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>

              <div className="text-right ml-6">
                <div className="text-lg font-bold text-gray-900">
                  {(item.price * item.cartQuantity).toFixed(2)} ETB
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-600 hover:text-red-700 mt-1"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="text-2xl font-bold text-gray-900">
              Total: {getTotalPrice().toFixed(2)} ETB
            </div>
            <button
              onClick={clearCart}
              className="text-red-600 hover:text-red-700 font-medium"
            >
              Clear Cart
            </button>
          </div>

          <button
            onClick={handleCheckout}
            className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};