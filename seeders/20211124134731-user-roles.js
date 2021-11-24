'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Roles', [{
      id: 1000,
      name: 'Admin',
    }, {
      id: 1002,
      name: "User"
    }], {});

    await queryInterface.bulkInsert('Users', [{
      id: 1000,
      username: 'admin',
      password: "$2a$10$xfie./namh0UZkauKD3ue.6BVmVQiXozi4GOZd2JIhymB.JaVZtBG",
      role_id: 1000
    }, {
      id: 1001,
      username: "user",
      password: "$2a$10$HFk33Rb1Uv7h2tq7ATxUie/JvoYU6KgOIZTtHq.nEtEpQ4teMw1uS",
      role_id: 1002
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Roles', null, {});
    await queryInterface.bulkDelete('Users', null, {});

  }
};
