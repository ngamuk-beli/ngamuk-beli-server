const express = require("express");
const router = express.Router();
const product_gallery = require("../controllers/product-gallery");
const upload = require("../middlewares/multer");

router.get("/", product_gallery.get_product_gallery);
router.post("/", upload.single("image_url"), product_gallery.create_product_gallery);
router.put("/update", upload.single("image_url"), product_gallery.update_product_gallery);
router.delete("/delete", product_gallery.delete_product_gallery);

module.exports = router;
