const { Discount, Product } = require("../models")

class DiscountController {
    static async create_discount(req,res,next) {
        try {
            const { percentage, lower_price, product_id } = req.body
            
            const findProduct = await Product.findOne({
                where: { id: product_id }
            })

            if (!findProduct) {
                throw {name: "ProductNotFound"}
            }
            
            const newDiscount = await Discount.create({
                percentage,
                lower_price,
                product_id: findProduct.id
            })
            
            res.status(200).json({newDiscount, findProduct})
        } catch (err) {
            next(err)
        }
    }

    static async update_discount(req,res,next) {
        try {
            const { id, percentage, lower_price } = req.body

            const findDiscount = await Discount.findOne({
                where: { id }
            })

            if(!findDiscount){
                throw { name: "NotFound"}
            }

            const newDiscount = await Discount.update({
                percentage,
                lower_price
            },
            {where: { id }})
            
            res.status(200).json({message: "Discount updated!"})
        } catch (err) {
        next(err)            
        }
    }

    static async delete_discount (req,res,next) {
        try {
            const { id } = req.body

            const findDiscount = await Discount.findOne({
                where: { id }
            })

            if(!findDiscount){
                throw {name: "NotFound"}
            }

            const deleteDiscount = await Discount.destroy({
                where: { id }
            })

            res.status(200).json({message: "Discount Deleted!"})
        } catch (err) {
            next(err)
        }
    }

    static async get_discounts (req,res,next) {
        try {

            const getDiscounts = await Discount.findAll()

            res.status(200).json(getDiscounts)

        } catch (err) {
            next(err)
        }
    }

    static async get_discount (req,res,next) {
        try {
            const { id } = req.body
            
            const findDiscount = await Discount.findOne({
                where: { id }
            })

            if(!findDiscount){
                throw {name: "NotFound"}
            }

            res.status(200).json(findDiscount)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = DiscountController