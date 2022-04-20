const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mysql = require("mysql2");
const { Sequelize } = require("sequelize");

const app = express();

const sequelize = new Sequelize("goomer", "mateus", "gunesimi", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Conection has been stablished successfully");
} catch (error) {
  console.error("Unable to conect to the database", error);
}

const PORT = process.env.PORT || 5000;
const ENVIRONMENT = process.env.ENVIRONMENT;

const server = app.listen(
  PORT,
  console.log(`Server running in ${ENVIRONMENT} mode on port ${PORT}`)
);
