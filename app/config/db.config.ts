export const CONFIG = {
  HOST: "localhost",
  PORT: "5432",
  USER: "vitaliyzhalnin",
  PASSWORD: "123",
  DB: "vuejwt1",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};