const { Banner, Brand, Sub_Brand } = require("../models")
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const getBanner = await Banner.findAll()
    const getBrand = await Brand.findAll()
    const getSubBrand = await Sub_Brand.findAll()

    await queryInterface.bulkInsert('Products', [
      {
          name: "Nike Air Force 1 '07",
          description: "The radiance lives on in the Nike Air Force 1 '07, the basketball original that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.",
          slug: "air-force-1-07-shoes",
          price: 1549000,
          sku: "10022445566",
          quantity: 5,
          keyword: "air, force, shoes, running, run, health",
          weight: 1,
          category: "Sneakers",
          banner_id: getBanner[0],
          brand_id: getBrand[2],
          sub_brand_id: getSubBrand[13],
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          name: "Nike Air Jordan 1 Mid",
          description: "Inspired by the original AJ1, this mid-top edition maintains the iconic look you love while choice colours and crisp leather give it a distinct identity.",
          slug: "air-jordan-1-mid-shoes",
          price: 1939000,
          sku: "10022445567",
          quantity: 5,
          keyword: "air, jordan, shoes, running, run, health",
          weight: 1,
          category: "Sneakers",
          banner_id: getBanner[0],
          brand_id: getBrand[2],
          sub_brand_id: getSubBrand[12],
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          name: "Nike Air Jordan 1 Mid",
          description: "Inspired by the Nike Air Max 90, the Nike Air Max Excee celebrates a classic through a new lens. Elongated design lines and distorted proportions on the upper elevate an icon into a modern space.",
          slug: "air-max-excee-shoes",
          price: 1279000,
          sku: "10022445568",
          quantity: 5,
          keyword: "air, max, shoes, running, run, health",
          weight: 1,
          category: "Sneakers",
          banner_id: getBanner[0],
          brand_id: getBrand[2],
          sub_brand_id: getSubBrand[14],
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
    await queryInterface.bulkDelete('Products', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
