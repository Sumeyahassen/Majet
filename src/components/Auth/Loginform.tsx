import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Smartphone, ArrowRight } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

interface LoginFormData {
  phone: string;
}

export const LoginForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { setTempPhone } = useAuthStore();
  const navigate = useNavigate();
  
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    setLoading(true);
    try {
      // Format phone number for Ethiopia (+251)
      const formattedPhone = data.phone.startsWith('+251') 
        ? data.phone 
        : `+251${data.phone.replace(/^0/, '')}`;
      
      // Simulate SMS sending (replace with actual Twilio integration)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setTempPhone(formattedPhone);
      toast.success('OTP sent to your phone!');
      navigate('/auth/verify-otp');
    } catch (error) {
      toast.error('Failed to send OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <Smartphone className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome to Agelgel</h1>
          <p className="text-gray-600">Enter your phone number to get started</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <span className="text-gray-500 text-sm">+251</span>
              </div>
              <input
                {...register('phone', {
                  required: 'Phone number is required',
                  pattern: {
                    value: /^[9]\d{8}$/,
                    message: 'Please enter a valid Ethiopian phone number'
                  }
                })}
                type="tel"
                placeholder="912345678"
                className="pl-16 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
            )}
            <p className="mt-2 text-xs text-gray-500">
              We'll send you a verification code via SMS
            </p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            ) : (
              <>
                Send OTP
                <ArrowRight className="ml-2 h-5 w-5" />
              </>
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};