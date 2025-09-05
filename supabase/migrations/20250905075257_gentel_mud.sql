/*
  # Agelgel Agricultural Marketplace Database Schema

  1. New Tables
    - `users`
      - `id` (uuid, primary key)
      - `phone` (text, unique) - Ethiopian phone number
      - `name` (text) - User's full name
      - `role` (text) - farmer, customer, or admin
      - `location` (text, optional) - User's location
      - `verified` (boolean) - Phone verification status
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `products`
      - `id` (uuid, primary key)
      - `farmer_id` (uuid, foreign key to users)
      - `name` (text) - Product name
      - `description` (text) - Product description
      - `category` (text) - Product category
      - `price` (decimal) - Price per unit in ETB
      - `quantity` (integer) - Available quantity
      - `unit` (text) - Unit of measurement
      - `location` (text) - Farm location
      - `image_url` (text, optional) - Product image
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `orders`
      - `id` (uuid, primary key)
      - `customer_id` (uuid, foreign key to users)
      - `farmer_id` (uuid, foreign key to users)
      - `total_amount` (decimal) - Total order amount
      - `status` (text) - pending, confirmed, delivered, cancelled
      - `delivery_address` (text) - Customer delivery address
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `order_items`
      - `id` (uuid, primary key)
      - `order_id` (uuid, foreign key to orders)
      - `product_id` (uuid, foreign key to products)
      - `quantity` (integer) - Ordered quantity
      - `price` (decimal) - Price at time of order
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users based on roles
    - Users can only access their own data
    - Farmers can manage their products
    - Customers can view products and manage their orders
    - Admin can access all data

  3. Indexes
    - Add indexes for frequently queried columns
    - Phone number unique index
    - Product search indexes
*/

-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  phone text UNIQUE NOT NULL,
  name text NOT NULL,
  role text NOT NULL CHECK (role IN ('farmer', 'customer', 'admin')) DEFAULT 'customer',
  location text,
  verified boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  farmer_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name text NOT NULL,
  description text NOT NULL,
  category text NOT NULL,
  price decimal(10,2) NOT NULL CHECK (price > 0),
  quantity integer NOT NULL DEFAULT 0 CHECK (quantity >= 0),
  unit text NOT NULL DEFAULT 'kg',
  location text NOT NULL,
  image_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  farmer_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  total_amount decimal(10,2) NOT NULL CHECK (total_amount > 0),
  status text NOT NULL CHECK (status IN ('pending', 'confirmed', 'delivered', 'cancelled')) DEFAULT 'pending',
  delivery_address text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create order_items table
CREATE TABLE IF NOT EXISTS order_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  product_id uuid NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  quantity integer NOT NULL CHECK (quantity > 0),
  price decimal(10,2) NOT NULL CHECK (price > 0),
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

-- Create policies for users table
CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid()::text = id::text OR EXISTS (
    SELECT 1 FROM users WHERE id::text = auth.uid()::text AND role = 'admin'
  ));

CREATE POLICY "Users can update own data"
  ON users
  FOR UPDATE
  TO authenticated
  USING (auth.uid()::text = id::text)
  WITH CHECK (auth.uid()::text = id::text);

CREATE POLICY "Anyone can insert users"
  ON users
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Create policies for products table
CREATE POLICY "Anyone can read products"
  ON products
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Farmers can insert their products"
  ON products
  FOR INSERT
  TO authenticated
  WITH CHECK (
    farmer_id::text = auth.uid()::text AND
    EXISTS (SELECT 1 FROM users WHERE id::text = auth.uid()::text AND role = 'farmer')
  );

CREATE POLICY "Farmers can update their products"
  ON products
  FOR UPDATE
  TO authenticated
  USING (
    farmer_id::text = auth.uid()::text AND
    EXISTS (SELECT 1 FROM users WHERE id::text = auth.uid()::text AND role = 'farmer')
  )
  WITH CHECK (
    farmer_id::text = auth.uid()::text AND
    EXISTS (SELECT 1 FROM users WHERE id::text = auth.uid()::text AND role = 'farmer')
  );

CREATE POLICY "Farmers can delete their products"
  ON products
  FOR DELETE
  TO authenticated
  USING (
    farmer_id::text = auth.uid()::text AND
    EXISTS (SELECT 1 FROM users WHERE id::text = auth.uid()::text AND role = 'farmer')
  );

-- Create policies for orders table
CREATE POLICY "Users can read their orders"
  ON orders
  FOR SELECT
  TO authenticated
  USING (
    customer_id::text = auth.uid()::text OR 
    farmer_id::text = auth.uid()::text OR
    EXISTS (SELECT 1 FROM users WHERE id::text = auth.uid()::text AND role = 'admin')
  );

CREATE POLICY "Customers can create orders"
  ON orders
  FOR INSERT
  TO authenticated
  WITH CHECK (
    customer_id::text = auth.uid()::text AND
    EXISTS (SELECT 1 FROM users WHERE id::text = auth.uid()::text AND role = 'customer')
  );

CREATE POLICY "Users can update their orders"
  ON orders
  FOR UPDATE
  TO authenticated
  USING (
    customer_id::text = auth.uid()::text OR 
    farmer_id::text = auth.uid()::text OR
    EXISTS (SELECT 1 FROM users WHERE id::text = auth.uid()::text AND role = 'admin')
  );

-- Create policies for order_items table
CREATE POLICY "Users can read their order items"
  ON order_items
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM orders 
      WHERE id = order_id AND (
        customer_id::text = auth.uid()::text OR 
        farmer_id::text = auth.uid()::text OR
        EXISTS (SELECT 1 FROM users WHERE users.id::text = auth.uid()::text AND role = 'admin')
      )
    )
  );

CREATE POLICY "Customers can create order items"
  ON order_items
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM orders 
      WHERE id = order_id AND customer_id::text = auth.uid()::text
    )
  );

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_users_phone ON users(phone);
CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);
CREATE INDEX IF NOT EXISTS idx_products_farmer_id ON products(farmer_id);
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_name ON products USING gin(to_tsvector('english', name));
CREATE INDEX IF NOT EXISTS idx_orders_customer_id ON orders(customer_id);
CREATE INDEX IF NOT EXISTS idx_orders_farmer_id ON orders(farmer_id);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
CREATE INDEX IF NOT EXISTS idx_order_items_order_id ON order_items(order_id);
CREATE INDEX IF NOT EXISTS idx_order_items_product_id ON order_items(product_id);

-- Create function to automatically update updated_at timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_users_updated_at 
  BEFORE UPDATE ON users 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_products_updated_at 
  BEFORE UPDATE ON products 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_orders_updated_at 
  BEFORE UPDATE ON orders 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();

-- Insert sample admin user
INSERT INTO users (id, phone, name, role, verified) VALUES
  ('00000000-0000-0000-0000-000000000001', '+251911000001', 'Admin User', 'admin', true)
ON CONFLICT (phone) DO NOTHING;

-- Insert sample farmer users
INSERT INTO users (id, phone, name, role, location, verified) VALUES
  ('00000000-0000-0000-0000-000000000002', '+251911000002', 'Farmer Tadesse', 'farmer', 'Addis Ababa, Ethiopia', true),
  ('00000000-0000-0000-0000-000000000003', '+251911000003', 'Farmer Almaz', 'farmer', 'Bahir Dar, Ethiopia', true),
  ('00000000-0000-0000-0000-000000000004', '+251911000004', 'Farmer Solomon', 'farmer', 'Hawassa, Ethiopia', true)
ON CONFLICT (phone) DO NOTHING;

-- Insert sample customer users
INSERT INTO users (id, phone, name, role, location, verified) VALUES
  ('00000000-0000-0000-0000-000000000005', '+251911000005', 'Customer Hanan', 'customer', 'Addis Ababa, Ethiopia', true),
  ('00000000-0000-0000-0000-000000000006', '+251911000006', 'Customer Dawit', 'customer', 'Dire Dawa, Ethiopia', true)
ON CONFLICT (phone) DO NOTHING;

-- Insert sample products
INSERT INTO products (farmer_id, name, description, category, price, quantity, unit, location, image_url) VALUES
  ('00000000-0000-0000-0000-000000000002', 'Fresh Tomatoes', 'Locally grown organic tomatoes, perfect for cooking and salads', 'Vegetables', 45.00, 100, 'kg', 'Addis Ababa, Ethiopia', 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=400'),
  ('00000000-0000-0000-0000-000000000002', 'Sweet Onions', 'Fresh red onions with excellent flavor', 'Vegetables', 35.00, 80, 'kg', 'Addis Ababa, Ethiopia', 'https://images.pexels.com/photos/533342/pexels-photo-533342.jpeg?auto=compress&cs=tinysrgb&w=400'),
  ('00000000-0000-0000-0000-000000000003', 'Ethiopian Coffee', 'Premium Ethiopian coffee beans from Bahir Dar region', 'Grains', 450.00, 50, 'kg', 'Bahir Dar, Ethiopia', 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=400'),
  ('00000000-0000-0000-0000-000000000003', 'Fresh Bananas', 'Sweet and ripe bananas perfect for eating', 'Fruits', 25.00, 120, 'kg', 'Bahir Dar, Ethiopia', 'https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=400'),
  ('00000000-0000-0000-0000-000000000004', 'Berbere Spice', 'Traditional Ethiopian spice blend, freshly ground', 'Spices', 150.00, 30, 'kg', 'Hawassa, Ethiopia', 'https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=400'),
  ('00000000-0000-0000-0000-000000000004', 'Teff Grain', 'High-quality teff grain, perfect for injera making', 'Grains', 85.00, 200, 'kg', 'Hawassa, Ethiopia', 'https://images.pexels.com/photos/1537166/pexels-photo-1537166.jpeg?auto=compress&cs=tinysrgb&w=400')
ON CONFLICT DO NOTHING;