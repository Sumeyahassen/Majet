import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { ShieldCheck, ArrowLeft } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { useAuthStore } from '../../store/authStore';

interface OTPFormData {
  otp: string;
  name: string;
  role: 'farmer' | 'customer';
}

export const OTPVerification: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0);
  const { tempPhone, setUser } = useAuthStore();
  const navigate = useNavigate();
  
  const { register, handleSubmit, formState: { errors } } = useForm<OTPFormData>({
    defaultValues: { role: 'customer' }
  });

  useEffect(() => {
    if (!tempPhone) {
      navigate('/auth/login');
    }
  }, [tempPhone, navigate]);

  useEffect(() => {
    if (resendCooldown > 0) {
      const timer = setTimeout(() => setResendCooldown(resendCooldown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendCooldown]);

  const onSubmit = async (data: OTPFormData) => {
    setLoading(true);
    try {
      // In a real app, verify OTP with Twilio
      // For demo purposes, accept any 6-digit code
      if (data.otp.length !== 6) {
        toast.error('Please enter a valid 6-digit code');
        return;
      }

      // Check if user exists
      const { data: existingUser } = await supabase
        .from('users')
        .select('*')
        .eq('phone', tempPhone)
        .single();

      let user;
      if (existingUser) {
        // User exists, sign them in
        user = existingUser;
        toast.success('Welcome back!');
      } else {
        // Create new user
        const { data: newUser, error } = await supabase
          .from('users')
          .insert({
            phone: tempPhone,
            name: data.name,
            role: data.role,
            verified: true
          })
          .select('*')
          .single();

        if (error) throw error;
        user = newUser;
        toast.success('Account created successfully!');
      }

      setUser(user);
      
      // Redirect based on role
      if (user.role === 'farmer') {
        navigate('/farmer/dashboard');
      } else if (user.role === 'admin') {
        navigate('/admin/dashboard');
      } else {
        navigate('/products');
      }
    } catch (error) {
      console.error('OTP verification error:', error);
      toast.error('Verification failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const resendOTP = async () => {
    setResendCooldown(60);
    // Simulate resending OTP
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast.success('New OTP sent!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <button
            onClick={() => navigate('/auth/login')}
            className="mb-4 inline-flex items-center text-green-600 hover:text-green-700"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back
          </button>
          
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <ShieldCheck className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Verify Your Phone</h1>
          <p className="text-gray-600">
            We sent a code to <span className="font-semibold">{tempPhone}</span>
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Verification Code
            </label>
            <input
              {...register('otp', {
                required: 'Verification code is required',
                pattern: {
                  value: /^\d{6}$/,
                  message: 'Please enter a valid 6-digit code'
                }
              })}
              type="text"
              maxLength={6}
              placeholder="000000"
              className="block w-full text-center text-2xl font-mono tracking-widest rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
            {errors.otp && (
              <p className="mt-1 text-sm text-red-600">{errors.otp.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Name
            </label>
            <input
              {...register('name', { required: 'Name is required' })}
              type="text"
              placeholder="Enter your full name"
              className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              I am a
            </label>
            <div className="grid grid-cols-2 gap-3">
              <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  {...register('role')}
                  type="radio"
                  value="customer"
                  className="text-green-600 focus:ring-green-500"
                />
                <span className="ml-2 text-sm font-medium">Customer</span>
              </label>
              <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  {...register('role')}
                  type="radio"
                  value="farmer"
                  className="text-green-600 focus:ring-green-500"
                />
                <span className="ml-2 text-sm font-medium">Farmer</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mx-auto"></div>
            ) : (
              'Verify & Continue'
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={resendOTP}
            disabled={resendCooldown > 0}
            className="text-sm text-green-600 hover:text-green-700 disabled:text-gray-400 disabled:cursor-not-allowed"
          >
            {resendCooldown > 0 ? `Resend in ${resendCooldown}s` : 'Resend Code'}
          </button>
        </div>
      </div>
    </div>
  );
};