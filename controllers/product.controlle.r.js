const { Product } = require("../models")

class Product {
    static async create_product(req, res, nex) {
        try {
            const { name, description, slug, price, sku, quantity, keyword, weight, brand_id, sub_brand, } = req.body
        } catch (err) {
            next(err)
        }
    }
}