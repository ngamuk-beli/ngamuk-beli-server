const { Sub_brand, Brand } = require("../models")

class SubBrand {
    static async create_sub_brand (req,res,next) {
        try {
            const { title, brand_id } = req.body

            const findBrand = await Brand.findOne({
                where: { id: brand_id}
            })

            if(!findBrand){
                throw { name: "NotFound"}
            }

            const newSubBrand = await Sub_brand.create({
                title,
                brand_id: findBrand.id
            })

            res.status(200).json({newSubBrand, findBrand})
        } catch (err) {
            next(err)
            
        }
    }

    static async edit_sub_brand(req,res,next) {
        try {
            const { id, title, brand_id } = req.body
            
            const findBrand = await Brand.findOne({
                where: { id: brand_id }
            })

            if(!findBrand){
                throw { name: "NotFound"}
            }

            const updateSubBrand = await Sub_brand.update({
                title,
                brand_id: findBrand.id,
            },
            {where: {id}})

            res.status(200).json({message: "Sub Brand Updated!"})

        } catch (err) {
            next(err)
        }
    }
    
    static async delete_sub_brand(req,res,next) {
        try {
            const { id } = req.body

            const findSubBrand = await Sub_brand.destroy({
                where: { id }
            })

            res.status(200).json({message: "Sub brand Deleted!"})
        } catch (err) {
            next(err)
        }
    }

    static async sub_brands_get(req, res, next) {
        try {
            const subBrands = await Sub_brand.findAll()

            res.status(200).json(subBrands)
        } catch (err) {
            next(err)
        }
    }

    static async sub_brand_get(req,res,next) {
        try {
            const { id } = req.body
            const getSubBrand = await Sub_brand.findOne({
                where: { id }
            })

            if(!getSubBrand){
                throw {name: "NotFound"}
            }

            res.status(200).json(getSubBrand)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = SubBrand