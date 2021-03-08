import { QueryInterface } from "sequelize";

export = {
  up: (queryInterface: QueryInterface, Sequelize: any): Promise<void> => {
    return queryInterface.createTable("admins", { id: Sequelize.INTEGER });
  },

  down: (queryInterface: QueryInterface, Sequelize: any): Promise<void> => {
    return queryInterface.dropTable("admins");
  }
};