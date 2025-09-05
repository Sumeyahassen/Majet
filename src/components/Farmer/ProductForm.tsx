import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { supabase, Product } from '../../lib/supabase';
import { useAuthStore } from '../../store/authStore';

interface ProductFormData {
  name: string;
  description: string;
  category: string;
  price: number;
  quantity: number;
  unit: string;
  location: string;
}

interface ProductFormProps {
  product?: Product;
  onSuccess: () => void;
  onCancel: () => void;
}

export const ProductForm: React.FC<ProductFormProps> = ({ product, onSuccess, onCancel }) => {
  const [loading, setLoading] = useState(false);
  const { user } = useAuthStore();
  
  const { register, handleSubmit, formState: { errors } } = useForm<ProductFormData>({
    defaultValues: product ? {
      name: product.name,
      description: product.description,
      category: product.category,
      price: product.price,
      quantity: product.quantity,
      unit: product.unit,
      location: product.location,
    } : {
      unit: 'kg'
    }
  });

  const categories = [
    'Vegetables',
    'Fruits',
    'Grains',
    'Legumes',
    'Spices',
    'Dairy',
    'Meat'
  ];

  const units = ['kg', 'pieces', 'bundles', 'liters', 'grams'];

  const onSubmit = async (data: ProductFormData) => {
    setLoading(true);
    try {
      if (product) {
        // Update existing product
        const { error } = await supabase
          .from('products')
          .update({
            ...data,
            updated_at: new Date().toISOString()
          })
          .eq('id', product.id);

        if (error) throw error;
        toast.success('Product updated successfully!');
      } else {
        // Create new product
        const { error } = await supabase
          .from('products')
          .insert({
            ...data,
            farmer_id: user?.id,
            image_url: `https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=400`
          });

        if (error) throw error;
        toast.success('Product added successfully!');
      }

      onSuccess();
    } catch (error) {
      console.error('Error saving product:', error);
      toast.error('Failed to save product. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Product Name
          </label>
          <input
            {...register('name', { required: 'Product name is required' })}
            type="text"
            className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            placeholder="e.g., Fresh Tomatoes"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>
          <select
            {...register('category', { required: 'Category is required' })}
            className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          >
            <option value="">Select a category</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          {errors.category && (
            <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Price (ETB)
          </label>
          <input
            {...register('price', { 
              required: 'Price is required',
              min: { value: 0.01, message: 'Price must be greater than 0' }
            })}
            type="number"
            step="0.01"
            className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            placeholder="0.00"
          />
          {errors.price && (
            <p className="mt-1 text-sm text-red-600">{errors.price.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Quantity
          </label>
          <input
            {...register('quantity', { 
              required: 'Quantity is required',
              min: { value: 0, message: 'Quantity must be 0 or greater' }
            })}
            type="number"
            className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            placeholder="0"
          />
          {errors.quantity && (
            <p className="mt-1 text-sm text-red-600">{errors.quantity.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Unit
          </label>
          <select
            {...register('unit', { required: 'Unit is required' })}
            className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          >
            {units.map(unit => (
              <option key={unit} value={unit}>{unit}</option>
            ))}
          </select>
          {errors.unit && (
            <p className="mt-1 text-sm text-red-600">{errors.unit.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Location
          </label>
          <input
            {...register('location', { required: 'Location is required' })}
            type="text"
            className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            placeholder="e.g., Addis Ababa, Ethiopia"
          />
          {errors.location && (
            <p className="mt-1 text-sm text-red-600">{errors.location.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Description
        </label>
        <textarea
          {...register('description', { required: 'Description is required' })}
          rows={4}
          className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          placeholder="Describe your product..."
        />
        {errors.description && (
          <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
        )}
      </div>

      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? 'Saving...' : product ? 'Update Product' : 'Add Product'}
        </button>
      </div>
    </form>
  );
};