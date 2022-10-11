import { Sequelize } from "sequelize/types";

export const UserModel = (sequelize: Sequelize, Sequelize) => {
  return sequelize.define("users", {
    username: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    }
  });
};
