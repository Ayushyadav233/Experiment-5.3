Here’s your **complete and polished `README.md` file** for the
📦 **E-commerce Catalog with Nested Variants (Node.js + MongoDB + MVC)** project — ready to use in your folder.

---

```markdown
# Experiment 15 – E-commerce Catalog with Nested Variants and MVC

A beginner-friendly **Node.js + Express + MongoDB** experiment implementing a persistent e-commerce catalog with **nested variants** (color, size, stock) using a clean **MVC architecture**.

---

## 🎯 Objective

- Practice **CRUD operations** on a MongoDB collection using Mongoose.
- Work with **nested subdocuments** (variants inside products).
- Build a **RESTful API** using Express and Node.js.
- Maintain an **MVC structure** for clarity and scalability.

---

## 📁 Folder Structure



Experiment-15/
├── controllers/
│   └── productController.js    # Handles product CRUD and variant logic
├── models/
│   └── Product.js              # Mongoose schema for products & variants
├── routes/
│   └── productRoutes.js        # Express routes for product API
├── server.js                   # Main entry point (Express + MongoDB setup)
├── package.json                # Project dependencies and scripts
└── README.md                   # Documentation


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
````

### Example Variant

```json
{ "color": "Red", "size": "M", "stock": 10 }
```

---

## 🚀 API Endpoints

**Base URL:** `http://localhost:3000/products`

| Method     | Endpoint                         | Description                                     |
| ---------- | -------------------------------- | ----------------------------------------------- |
| **POST**   | `/seed`                          | Insert sample products                          |
| **GET**    | `/`                              | Get all products                                |
| **GET**    | `/:id`                           | Get product by ID                               |
| **GET**    | `/category/:category`            | Filter products by category                     |
| **GET**    | `/by-color/:color`               | Filter products by variant color                |
| **POST**   | `/`                              | Create a new product (with or without variants) |
| **PUT**    | `/:id`                           | Update an existing product                      |
| **DELETE** | `/:id`                           | Delete a product                                |
| **POST**   | `/:id/variants`                  | Add a new variant to a product                  |
| **PUT**    | `/:id/variants/:variantId/stock` | Update variant stock by ID                      |

---

## 🧪 Sample API Requests

### 1️⃣ Seed Sample Products

```bash
curl -X POST http://localhost:3000/products/seed
```

### 2️⃣ Create a Product

```http
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
```

### 3️⃣ Add a Variant

```http
POST /products/<productId>/variants
Content-Type: application/json

{
  "color": "Red",
  "size": "15-inch",
  "stock": 5
}
```

### 4️⃣ Update Variant Stock

```http
PUT /products/<productId>/variants/<variantId>/stock
Content-Type: application/json

{ "stock": 12 }
```

### 5️⃣ Filter by Color

```http
GET /products/by-color/Blue
```

---

## ⚙️ Setup Instructions

### 1️⃣ Install Dependencies

```bash
npm install
```

### 2️⃣ Start MongoDB

Make sure MongoDB is running locally at:

```
mongodb://localhost:27017
```

### 3️⃣ Run the Server

```bash
node server.js
# or
npm start
```

Then open:
👉 [http://localhost:3000/products](http://localhost:3000/products)

---

## 📦 Example `package.json`

```json
{
  "name": "ecommerce-catalog",
  "version": "1.0.0",
  "description": "E-commerce catalog with nested variants using Node.js, Express, and MongoDB (MVC structure)",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "body-parser": "^1.20.2",
    "cors": "^2.8.5",
    "express": "^4.19.2",
    "mongoose": "^8.5.0"
  }
}
```

---

## 🎓 Learning Outcomes

* Build a **persistent CRUD API** using Mongoose.
* Work with **nested subdocuments** in MongoDB.
* Query and update **embedded array data**.
* Maintain **MVC architecture** for cleaner project structure.

---

## 🔮 Future Enhancements

* Add **user authentication** (JWT).
* Implement **pagination and sorting**.
* Add **product image uploads**.
* Integrate with a **React/Vue frontend**.

---

> 🧠 *"A well-structured database is the foundation of every scalable application."*


