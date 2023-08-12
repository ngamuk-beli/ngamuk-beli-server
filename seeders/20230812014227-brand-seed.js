'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Brands', [
      {
        title: "Adidas",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Converse",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Nike",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Vans",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Puma",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Sketchers",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Under Armour",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "New Balance",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Reebok",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Louis Vuitton",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Prada",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Balenciaga",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Moncler",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Saint Laurent",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Armani",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Versace",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Uniqlo",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Zara",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Wrangler",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Levi's",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Calvin Klein",
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
