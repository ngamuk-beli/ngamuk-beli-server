const express = require("express")
const router = express.Router()
const BrandController = require("../controllers/brand.controller")

router.post("/new", BrandController.new_brand)
router.put("/update", BrandController.update_brand)
router.delete("/delete", BrandController.delete_brand)
router.get("/all", BrandController.get_brands)
router.get("/", BrandController.get_brand)

module.exports = router