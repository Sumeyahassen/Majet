import React from 'react';
import { MapPin, Plus } from 'lucide-react';
import { Product } from '../../lib/supabase';
import { useCartStore } from '../../store/cartStore';
import { useAuthStore } from '../../store/authStore';
import { toast } from 'react-hot-toast';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCartStore();
  const { user } = useAuthStore();

  const handleAddToCart = () => {
    if (!user) {
      toast.error('Please sign in to add items to cart');
      return;
    }
    
    if (user.role !== 'customer') {
      toast.error('Only customers can add items to cart');
      return;
    }

    addItem(product, 1);
    toast.success('Added to cart!');
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-w-16 aspect-h-12">
        <img
          src={product.image_url || `https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=400`}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{product.location}</span>
        </div>
        
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-2xl font-bold text-green-600">
              {product.price} ETB
            </span>
            <span className="text-sm text-gray-500 ml-1">/{product.unit}</span>
          </div>
          <span className="text-sm text-gray-600">
            {product.quantity} {product.unit} available
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            {product.category}
          </span>
          
          {user?.role === 'customer' && (
            <button
              onClick={handleAddToCart}
              disabled={product.quantity === 0}
              className="inline-flex items-center px-3 py-1.5 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Plus className="h-4 w-4 mr-1" />
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};