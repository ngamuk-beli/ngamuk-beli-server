'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
          name: "Coyote 21",
          description: "Sepatu lari",
          slug: "coyote-sport",
          price: 150000,
          sku: "123123",
          quantity: 5,
          keyword: "shoes, running, run, health",
          weight: 1,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          name: "Coyote 22",
          description: "Sepatu lari",
          slug: "coyote-sport",
          price: 180000,
          sku: "123123123",
          quantity: 5,
          keyword: "shoes, running, run, health",
          weight: 1,
          createdAt: new Date(),
          updatedAt: new Date()
      }
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
