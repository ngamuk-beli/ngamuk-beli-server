const express = require("express")
const router = express.Router()
const subBrandController = require("../controllers/sub-brand.controller")

router.post("/new", subBrandController.create_sub_brand)
router.put("/edit", subBrandController.edit_sub_brand)
router.delete("/delete", subBrandController.delete_sub_brand)
router.get("/all", subBrandController.sub_brands_get)
router.get("/", subBrandController.sub_brand_get)

module.exports = router