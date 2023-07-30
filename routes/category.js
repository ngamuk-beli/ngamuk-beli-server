const express = require("express")
const router = express.Router()
const CategoryController = require("../controllers/category.controller")

router.post("/new", CategoryController.create_category)
router.put("/edit", CategoryController.update_category)
router.delete("/delete", CategoryController.delete_category)
router.get("/all", CategoryController.get_all_categories)
router.get("/", CategoryController.get_category)

module.exports = router