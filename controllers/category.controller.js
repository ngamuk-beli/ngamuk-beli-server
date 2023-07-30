const { Category } = require("../models/")

class CategoryController {
    static async create_category(req,res,next) {
        try {
            const { name } = req.body
            const new_category = await Category.create({
                name
            })

            res.status(200).json({message:"New Category added!", new_category})
        } catch (err) {
            next(err)            
        }
    }
    static async update_category(req,res,next) {
        try {
            const { id, name } = req.body

            const editCategory = await Category.update({
                name
            },
            { where: { id }})

            res.status(200).json({message:"Category Updated!", editCategory})
        } catch (err) {
            next(err)            
        }
    }
    static async delete_category(req,res,next) {
        try {
            const { id } = req.body

            const findCategory = await Category.destroy({where: {id}})
            res.status(200).json({message:"Category deleted"})
        } catch (err) {
            next(err)
        }
    }
    static async get_all_categories(req,res,next) {
        try {
            const getCategories = await Category.findAll()

            res.status(200).json(getCategories)
        } catch (err) {
            next(err)
        }
    }
    static async get_category(req,res,next) {
        try {
            const {id} = req.body
            const getCategory = await Category.findOne({where: {id}})

            res.status(200).json(getCategory)
            
        } catch (err) {
            next(err)
        }
    }
}

module.exports = CategoryController