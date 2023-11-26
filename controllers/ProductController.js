const Product = require("../models/Product");

module.exports = {
  createProduct: async (req, res) => {
    console.log("here oo");
    const product = new Product(req.body);

    try {
      await product.save();
      res.status(200).json("Product created succesfully");
    } catch (error) {
      res.status(500).json("Failed to create product");
    }
  },

  getProducts: async (req, res) => {
    try {
      const products = await Product.find().sort({ createdAt: -1 });
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json("Error Retriving Products");
    }
  },

  getProduct: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json("Error Retriving Product");
    }
  },

  searchProduct: async (req, res) => {
    try {
      const result = await Product.aggregate([
        {
          $search: {
            index: "gadget",
            text: {
              query: "req.params.key",
              path: {
                wildcard: "*",
              },
            },
          },
        },
      ]);
      res.status(200).json(result)
    } catch (error) {
      ("failed to get products");
    }
  },
};
