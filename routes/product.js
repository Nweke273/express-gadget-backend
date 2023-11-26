const router = require("express").Router();
const ProductController = require("../controllers/ProductController");

router.get("/", ProductController.getProducts);
router.get("/search/:key", ProductController.searchProduct);
router.get("/:id", ProductController.getProduct);
router.post("/", ProductController.createProduct);

module.exports = router;
