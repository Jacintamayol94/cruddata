'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('directores', { 
      id: { 
        type : Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
       },
       first_name: {
        type: Sequelize.TINYINT,
        allowNull: false
    },
    last_name: {
        type: Sequelize.TINYINT,
        allowNull: false
    },
    awards: {
      type: Sequelize.FLOAT,
      default: 0
    }
    
    });
     
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
