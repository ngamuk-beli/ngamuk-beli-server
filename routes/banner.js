const express = require("express")
const router = express.Router()
const BannerController = require("../controllers/banner.controller")

router.post("/new", BannerController.create_banner)
router.put("/edit", BannerController.edit_banner)
router.delete("/delete", BannerController.delete_banner)
router.get("/all", BannerController.get_banners)
router.get("/", BannerController.get_banner)

module.exports = router