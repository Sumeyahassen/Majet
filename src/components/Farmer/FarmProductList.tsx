import React, { useState } from 'react';
import { Edit3, Trash2, AlertTriangle } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { supabase, Product } from '../../lib/supabase';
import { ProductForm } from './ProductForm';

interface FarmerProductListProps {
  products: Product[];
  onUpdate: () => void;
}

export const FarmerProductList: React.FC<FarmerProductListProps> = ({ products, onUpdate }) => {
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const handleDelete = async (productId: string) => {
    if (!confirm('Are you sure you want to delete this product?')) {
      return;
    }

    try {
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', productId);

      if (error) throw error;
      toast.success('Product deleted successfully!');
      onUpdate();
    } catch (error) {
      console.error('Error deleting product:', error);
      toast.error('Failed to delete product. Please try again.');
    }
  };

  if (products.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-md p-8 text-center">
        <div className="text-gray-400 mb-4">
          <AlertTriangle className="h-12 w-12 mx-auto" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No products yet</h3>
        <p className="text-gray-600">Add your first product to start selling</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-900">My Products</h2>
      </div>

      {editingProduct && (
        <div className="border-b border-gray-200 p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Edit Product</h3>
          <ProductForm
            product={editingProduct}
            onSuccess={() => {
              setEditingProduct(null);
              onUpdate();
            }}
            onCancel={() => setEditingProduct(null)}
          />
        </div>
      )}

      <div className="divide-y divide-gray-200">
        {products.map(product => (
          <div key={product.id} className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src={product.image_url || `https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=100`}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                  <p className="text-gray-600">{product.category}</p>
                  <p className="text-sm text-gray-500">{product.location}</p>
                </div>
              </div>

              <div className="text-right">
                <div className="text-lg font-bold text-green-600">
                  {product.price} ETB/{product.unit}
                </div>
                <div className="text-sm text-gray-600">
                  {product.quantity} {product.unit} available
                </div>
                {product.quantity < 10 && (
                  <div className="text-xs text-orange-600 font-medium">Low stock</div>
                )}
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={() => setEditingProduct(product)}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <Edit3 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};