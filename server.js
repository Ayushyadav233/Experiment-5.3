const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1:27017/ecommerceDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("❌ Connection error:", err));

const variantSchema = new mongoose.Schema({
  color: String,
  size: String,
  stock: Number,
});

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  variants: [variantSchema],
});

const Product = mongoose.model("Product", productSchema);

app.get("/insert-sample", async (req, res) => {
  await Product.deleteMany({});
  await Product.insertMany([
    {
      name: "T-Shirt",
      price: 499,
      category: "Clothing",
      variants: [
        { color: "Red", size: "M", stock: 20 },
        { color: "Blue", size: "L", stock: 15 },
        { color: "Black", size: "S", stock: 10 },
      ],
    },
    {
      name: "Running Shoes",
      price: 2999,
      category: "Footwear",
      variants: [
        { color: "White", size: "8", stock: 12 },
        { color: "Black", size: "9", stock: 5 },
        { color: "Grey", size: "7", stock: 8 },
      ],
    },
    {
      name: "Wireless Headphones",
      price: 1999,
      category: "Electronics",
      variants: [
        { color: "Black", size: "Standard", stock: 25 },
        { color: "White", size: "Standard", stock: 18 },
      ],
    },
  ]);

  res.send("✅ Sample data inserted successfully!");
});

app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/products/category/:category", async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.category });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/products/variants/colors", async (req, res) => {
  try {
    const products = await Product.find({}, { name: 1, "variants.color": 1, _id: 0 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/products/variant/color/:color", async (req, res) => {
  try {
    const color = req.params.color;
    const products = await Product.find({ "variants.color": color });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/products", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json({ message: "✅ Product added!", product: newProduct });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.patch("/products/update-stock/:color", async (req, res) => {
  try {
    const color = req.params.color;
    const increment = req.body.increment || 1;
    const result = await Product.updateMany(
      { "variants.color": color },
      { $inc: { "variants.$.stock": increment } }
    );
    res.json({
      message: `✅ Increased stock for color '${color}' by ${increment}`,
      result,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
