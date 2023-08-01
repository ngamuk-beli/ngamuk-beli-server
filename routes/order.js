const express = require("express");
const router = express.Router();
const order_controller = require("../controllers/order.controller");

router.get("/", order_controller.get_order);
router.post("/add", order_controller.create_order);
router.put("/update", order_controller.update_order);
router.delete("/delete", order_controller.delete_order);

module.exports = router;
