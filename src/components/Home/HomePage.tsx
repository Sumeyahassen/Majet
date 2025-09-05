import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, Users, ShoppingCart, TrendingUp, ArrowRight, Check } from 'lucide-react';

export const HomePage: React.FC = () => {
  const features = [
    {
      icon: <Sprout className="h-8 w-8 text-green-600" />,
      title: 'Fresh from Farm',
      description: 'Direct connection between farmers and customers for the freshest produce'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Community Driven',
      description: 'Supporting local Ethiopian farmers and building stronger communities'
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-purple-600" />,
      title: 'Easy Shopping',
      description: 'Simple, intuitive platform for browsing and ordering fresh products'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-orange-600" />,
      title: 'Fair Prices',
      description: 'Transparent pricing that benefits both farmers and consumers'
    }
  ];

  const benefits = [
    'Direct access to fresh, local produce',
    'Support Ethiopian farmers and communities',
    'Transparent pricing and quality assurance',
    'Mobile-optimized for easy ordering',
    'Secure SMS-based authentication',
    'Real-time inventory and order tracking'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Connecting Ethiopian
              <span className="text-green-600 block">Farmers & Customers</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Agelgel brings fresh, locally grown produce directly from Ethiopian farms to your table. 
              Supporting local agriculture while providing you with the freshest ingredients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-colors inline-flex items-center justify-center"
              >
                Browse Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/auth/login"
                className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition-colors"
              >
                Join as Farmer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Agelgel?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're revolutionizing how Ethiopian agriculture connects with consumers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-50 rounded-2xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Empowering Ethiopian Agriculture
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our platform bridges the gap between farmers and consumers, creating a sustainable 
                ecosystem that benefits everyone in the agricultural value chain.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Ethiopian farmers"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-green-600">10,000+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of customers and farmers already using Agelgel
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/auth/login"
              className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
            >
              Sign Up Now
            </Link>
            <Link
              to="/products"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-colors"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};