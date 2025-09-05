# Agelgel - Ethiopian Agricultural Marketplace

A modern full-stack web application connecting Ethiopian farmers with customers through a seamless digital marketplace.

## Features

### For Customers
- 📱 SMS-based authentication with OTP verification
- 🛒 Browse fresh products from local farmers
- 🛍️ Shopping cart functionality
- 📍 Location-based product discovery
- 📦 Order management and tracking

### For Farmers
- 🌾 Product management dashboard
- 📊 Inventory tracking and analytics
- 💰 Direct sales to customers
- 📈 Performance insights
- 🏪 Farm profile management

### For Administrators
- 👥 User management
- 📋 Order oversight
- 📊 Platform analytics
- 🔧 System administration

## Technology Stack

- **Frontend**: React 18 (Create React App), TypeScript, Tailwind CSS
- **Backend**: Supabase (PostgreSQL, Auth, Real-time)
- **State Management**: Zustand
- **Authentication**: SMS OTP via Twilio
- **Deployment**: Bolt Hosting

## Getting Started

### Prerequisites

- Node.js 18+ 
- Supabase account
- Twilio account (for SMS authentication)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd agelgel
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Fill in your Supabase and Twilio credentials in the `.env` file.

4. Set up Supabase:
   - Create a new Supabase project
   - Run the migration files in `supabase/migrations/`
   - Configure Row Level Security policies

5. Start the development server:
```bash
npm start
```

## Database Schema

The application uses the following main tables:

- **users**: User accounts (farmers, customers, admins)
- **products**: Product listings from farmers
- **orders**: Customer orders
- **order_items**: Individual items within orders

## Authentication Flow

1. User enters phone number
2. SMS OTP sent via Twilio
3. User verifies OTP
4. Account created or user signed in
5. Role-based dashboard access

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please contact the development team.