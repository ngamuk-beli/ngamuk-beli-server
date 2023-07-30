const { Brand } = require("../models");

class BrandController {
  static async new_brand(req, res, next) {
    try {
      const { title } = req.body;
      const brand = await Brand.create({
        title,
      });
      res.status(201).json({ data: `Brand ${brand.title} succesfully created` });
    } catch (err) {
      next(err);
    }
  }
  
  static async update_brand(req, res, next) {
    try {
      const { id, title } = req.body

      const newBrand = await Brand.update({
        title
      },
      { where: { id }})

      const foundBrand = await Brand.findOne({
        where: { id }
      })

      res.status(200).json({message: "Brand updated into", foundBrand})
      
    } catch (err) {
      next(err)
    }
  }

  static async delete_brand(req, res, next) {
    try {
      const { id } = req.body
      const foundBrand = Brand.destroy({
        where: { id }
      })

      res.status(200).json({message: "Brand deleted!"})
    } catch (err) {
      next(err)
    }
  }

  static async get_brand(req, res, next) {
    try {
      const all_brand = Brand.findAll();
      res.status(200).json({ list_brand: all_brand });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = BrandController;
