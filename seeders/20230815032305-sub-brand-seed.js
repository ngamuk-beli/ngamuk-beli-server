'use strict';
const { Brand } = require("../models")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const findBrand = await Brand.findAll()
    
    await queryInterface.bulkInsert('Sub_brands', [
      {
        title: "Yeezy", // 0
        brand_id: findBrand[0].id ,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Terrex Soulstride", // 1
        brand_id: findBrand[0].id ,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "CrazyFast", // 2
        brand_id: findBrand[0].id ,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Bad Bunny", // 3
        brand_id: findBrand[0].id ,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Tourino", // 4
        brand_id: findBrand[0].id ,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Harden", // 5
        brand_id: findBrand[0].id ,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Torsion", // 6
        brand_id: findBrand[0].id ,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Rivalry", // 7
        brand_id: findBrand[0].id ,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Star Player", // 8
        brand_id: findBrand[1].id ,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Chuck 70", // 9
        brand_id: findBrand[1].id ,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Run Star", // 10
        brand_id: findBrand[1].id ,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Chuck Taylor", // 11
        brand_id: findBrand[1].id ,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Air Jordan", // 12
        brand_id: findBrand[2].id ,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Air Force", // 13
        brand_id: findBrand[2].id ,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Air Max", // 14
        brand_id: findBrand[2].id ,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Dunk", // 15
        brand_id: findBrand[2].id ,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Blazer", // 16
        brand_id: findBrand[2].id ,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
