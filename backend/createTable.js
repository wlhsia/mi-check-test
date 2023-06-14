require("dotenv").config();

const sequelize = require('./models/db');
const User = require('./models/userModel');
const Project = require('./models/projectModel');

sequelize
  .sync()
  .then(() => {
    console.log("Models synced successfully.");
    // 在這裡繼續你的應用程式邏輯
  })
  .catch((error) => {
    console.error("Error syncing models:", error);
  });

