const express = require("express")
const router = express.Router()
const DiscountController = require("../controllers/discount.controller")

router.post("/add", DiscountController.create_discount)
router.put("/update", DiscountController.update_discount)
router.delete("/delete", DiscountController.delete_discount)
router.get("/all", DiscountController.get_discounts)
router.get("/", DiscountController.get_discount)

module.exports = router