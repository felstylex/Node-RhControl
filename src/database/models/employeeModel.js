import { Sequelize } from "sequelize";
import db from "../config/db.js";

export default db.define("employee", {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  office: {
    type: Sequelize.STRING,
    allowNull: false
  },
  department: {
    type: Sequelize.STRING,
    allowNull: false
  },
  admissionDate: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  birthDate: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  adress: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  phoneNumber: {
    type: Sequelize.STRING,
    allowNull: true
  },
  salary: {
    type: Sequelize.DECIMAL(10,2),
    allowNull: false
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false
  },
  workedHours: {
    type: Sequelize.STRING,
    allowNull: false
  },
});