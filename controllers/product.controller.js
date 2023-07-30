const { Product } = require("../models")

class ProductController {
    static async create_product(req, res, next) {
        try {
            const { name, description, slug, price, sku, quantity, keyword, weight, brand_id, sub_brand, } = req.body

            const newProduct = await Product.create({
                name,
                description,
                slug,
                price,
                sku,
                quantity,
                keyword,
                weight,
                brand_id,
                sub_brand
            })

            res.status(200).json(newProduct)

        } catch (err) {
            next(err)
        }
    }
    static async update_product(req, res, next) {
        try {
            const { id, name, description, slug, price, sku, quantity, keyword, weight, brand_id, sub_brand, } = req.body

            if(!id){
                throw { name: "ProductNotFound"}
            }

            const updatedProduct = await Product.update({
                id,
                name,
                description,
                slug,
                price,
                sku,
                quantity,
                keyword,
                weight,
                brand_id,
                sub_brand
            },
            {where: {id}})
            
            res.status(200).json({message: "Product Updated!"})
        } catch (err) {
            next(err)

        }
    }
    static async delete_product(req,res,next) {
        try {
            const id = req.body

            const productFound = await Product.destroy({where: id})

            res.status(200).json({message: "Product deleted!"})
            
        } catch (err) {
            next(err)
            
        }
    }
    static async get_all_product(req,res,next) {
        try {
            const products = await Product.findAll()

            res.status(200).json(products)
        } catch (err) {
            next(err)
        }
    }
    static async get_product(req,res,next) {
        try {
            const {id} = req.body
            const product = await Product.findOne({where: { id }})

            res.status(200).json(product)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = ProductController