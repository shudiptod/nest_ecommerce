-- Categories Table
INSERT INTO categories (name, slug, parent_id, path) VALUES
('Electronics', 'electronics', NULL, 'Electronics'),
('Clothing', 'clothing', NULL, 'Clothing'),
('Mobiles', 'mobiles', 1, 'Electronics > Mobiles'),
('Laptops', 'laptops', 1, 'Electronics > Laptops'),
('T-shirts', 't-shirts', 2, 'Clothing > T-shirts'),
('Jeans', 'jeans', 2, 'Clothing > Jeans');

-- Products Table
INSERT INTO products (name, slug, description, price, quantity, images) VALUES
('iPhone 14', 'iphone-14', 'Latest iPhone model with A15 Bionic chip', 999.99, 50, '["iphone14-front.jpg", "iphone14-back.jpg"]'),
('Dell XPS 15', 'dell-xps-15', 'High-performance laptop with Intel i7 processor', 1499.99, 20, '["dell-xps-15-front.jpg", "dell-xps-15-back.jpg"]'),
('Samsung Galaxy S23', 'samsung-galaxy-s23', 'Flagship phone with AMOLED display', 799.99, 100, '["samsung-s23-front.jpg", "samsung-s23-back.jpg"]'),
('Nike T-shirt', 'nike-t-shirt', 'Comfortable Nike branded t-shirt', 29.99, 200, '["nike-t-shirt-front.jpg", "nike-t-shirt-back.jpg"]'),
('Levi’s Jeans', 'levis-jeans', 'Stylish and durable Levi’s jeans', 59.99, 150, '["levis-jeans-front.jpg", "levis-jeans-back.jpg"]');

-- Product-Category Relationships
INSERT INTO product_categories (product_id, category_id) VALUES
(1, 3), -- iPhone 14 → Mobiles
(2, 4), -- Dell XPS 15 → Laptops
(3, 3), -- Samsung Galaxy S23 → Mobiles
(4, 5), -- Nike T-shirt → T-shirts
(5, 6); -- Levi’s Jeans → Jeans

-- Admin Table: Creating a Super Admin
INSERT INTO admins (username, email, password, role) VALUES
('superadmin', 'superadmin@example.com', 'hashed_password_here', 'super_admin');
