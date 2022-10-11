import { CONFIG } from "../config/db.config";
import { Model, ModelCtor, Sequelize } from "sequelize";
import { UserModel } from "./user.model"
import { RoleModel } from "./role.model"

type DB = {
  sequelize: Sequelize
  Sequelize: typeof Sequelize
  user: ModelCtor<Model<unknown, unknown>>
  role: any
  ROLES: any
}

const sequelize = new Sequelize(
  CONFIG.DB,
  CONFIG.USER,
  CONFIG.PASSWORD,
  {
    host: CONFIG.HOST,
    dialect: "postgres",
    // operatorsAliases: false,

    pool: {
      max: CONFIG.pool.max,
      min: CONFIG.pool.min,
      acquire: CONFIG.pool.acquire,
      idle: CONFIG.pool.idle
    }
  }
);

const db: DB = {
  Sequelize: Sequelize,
  sequelize: sequelize,
  //@ts-ignore
  user: UserModel(sequelize, Sequelize),
  role: RoleModel(sequelize, Sequelize),
  ROLES: []
};

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

db.ROLES = ["user", "admin", "moderator"];

export default db;
