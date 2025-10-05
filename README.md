# Experiment 15 – E-commerce Catalog with Nested Variants and MVC

A beginner-friendly **Node.js + Express + MongoDB** experiment implementing a persistent e-commerce catalog with **nested variants** (color, size, stock) using a clean **MVC architecture**.

---

## 🎯 Objective

- Practice **CRUD operations** on a MongoDB collection.
- Work with **nested subdocuments** (variants inside products).
- Implement **RESTful API** using Express and Mongoose.
- Maintain **MVC structure** for separation of concerns.

---

## 📁 Folder Structure

Experiment-15/
├── controllers/
│ └── productController.js # Handles product CRUD & variant operations
├── models/
│ └── Product.js # Mongoose schema for products & variants
├── routes/
│ └── productRoutes.js # Express route definitions
├── server.js # Main entry file (server + DB connection)
├── package.json # Dependencies and scripts
└── README.md # Documentation file

pgsql
Copy code

---

## 🧩 Data Model

### Product Schema
```json
{
  "_id": "ObjectId",
  "name": "String",
  "price": "Number",
  "category": "String",
  "variants": [
    {
      "_id": "ObjectId",
      "color": "String",
      "size": "String",
      "stock": "Number"
    }
  ],
  "createdAt": "Date",
  "updatedAt": "Date"
}
Example Variant
json
Copy code
{ "color": "Red", "size": "M", "stock": 10 }
🚀 API Endpoints
Base URL: http://localhost:3000/products

Method	Endpoint	Description
POST	/seed	Insert sample products
GET	/	Get all products
GET	/:id	Get product by ID
GET	/category/:category	Filter products by category
GET	/by-color/:color	Filter products by variant color
POST	/	Create a new product (with or without variants)
PUT	/:id	Update a product and its variants
DELETE	/:id	Delete a product
POST	/:id/variants	Add a new variant to a product
PUT	/:id/variants/:variantId/stock	Update variant stock by variant ID

🧪 Sample API Requests
1️⃣ Seed Sample Products
bash
Copy code
curl -X POST http://localhost:3000/products/seed
2️⃣ Create a Product
http
Copy code
POST /products
Content-Type: application/json

{
  "name": "Gaming Laptop",
  "price": 1499,
  "category": "Electronics",
  "variants": [
    { "color": "Black", "size": "15-inch", "stock": 4 },
    { "color": "Silver", "size": "17-inch", "stock": 2 }
  ]
}
3️⃣ Add a Variant to an Existing Product
http
Copy code
POST /products/<productId>/variants
Content-Type: application/json

{
  "color": "Red",
  "size": "15-inch",
  "stock": 5
}
4️⃣ Update Variant Stock
http
Copy code
PUT /products/<productId>/variants/<variantId>/stock
Content-Type: application/json

{ "stock": 12 }
5️⃣ Filter Products by Color
http
Copy code
GET /products/by-color/Blue
⚙️ Setup Instructions
1️⃣ Install Dependencies
bash
Copy code
npm install
2️⃣ Ensure MongoDB is Running
Make sure MongoDB is active on your local machine (mongodb://localhost:27017).

3️⃣ Run the Server
bash
Copy code
node server.js
# or
npm start
Once started, open your browser or Postman:
👉 http://localhost:3000/products

📦 Example package.json
json
Copy code
{
  "name": "ecommerce-catalog",
  "version": "1.0.0",
  "description": "E-commerce catalog with nested variants using Node.js, Express, and MongoDB (MVC structure)",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.19.2",
    "mongoose": "^8.5.0",
    "cors": "^2.8.5",
    "body-parser": "^1.20.2"
  }
}
🎓 Learning Outcomes
Implement persistent CRUD operations using Mongoose.

Design and query nested documents for product variants.

Update and filter subdocument fields effectively.

Follow a clean MVC pattern for scalability and clarity.

🔮 Future Enhancements
Add authentication (JWT-based login).

Implement pagination, sorting, and search filters.

Add product images using Multer.

Create a React frontend to connect with this backend API.

🧠 "A well-structured database is the foundation of every scalable application."

yaml
Copy code

---

Would you like me to also include a **sample folder structure with all file contents** (`server.js`, `Product.js`, `productController.js`, etc.) so you can just copy the project and run it?






