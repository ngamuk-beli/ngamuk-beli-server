const express = require("express");
const router = express.Router();
const cart_controller = require("../controllers/cart.controller");

router.post("/new", cart_controller.create_cart);
router.put("/update", cart_controller.update_cart);
router.delete("/delete", cart_controller.delete_cart);
router.get("/all", cart_controller.get_cart);

module.exports = router;
