const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/product.controller")

router.post("/new", ProductController.create_product)
router.put("/update", ProductController.update_product)
router.delete("/delete", ProductController.delete_product)

module.exports = router;