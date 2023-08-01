const { Banner } = require("../models")

class BannerController {
    static async create_banner (req,res,next) {
        try {
            const { title, image_url } = req.body

            const newBanner = await Banner.create({
                title,
                image_url
            })

            res.status(200).json(newBanner)
        } catch (err) {
            next(err)
        }
    }

    static async edit_banner (req,res,next) {
        try {
            const { id, title, image_url } = req.body

            
            const updateBanner = await Banner.update({
                title,
                image_url
            },
            {where: { id }})
            
            if(!updateBanner){
                throw {name: "NotFound"}
            }
            
            res.status(200).json({message: "Banner updated"})
        } catch (err) {
            next(err)
        }
    }

    static async delete_banner (req,res,next) {
        try {
            const { id } = req.body

            const findBanner = await Banner.destroy({
                where: { id }
            })

            if(!findBanner){
                throw {name: "NotFound"}
            }

            res.status(200).json({message: "Banner Deleted"})
        } catch (err) {
            next(err)
            
        }
    }

    static async get_banners (req,res,next) {
        try {
            const getBanners = await Banner.findAll()

            res.status(200).json(getBanners)
        } catch (err) {
            next(err)
        }
    }

    static async get_banner (req,res,next) {
        try {
            const { id } = req.body
            
            const getBanner = await Banner.findOne({
                where: { id }
            })

            res.status(200).json(getBanner)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = BannerController