require("dotenv").config();

const sequelize = require('./models/db');
const { User, Project, Item } = require("./models");


sequelize.sync({ force: true }) // 設置 force: true 可以在建立資料表之前先刪除已存在的資料表（請小心使用）
  .then(() => {
    console.log('資料表已成功建立');
  })
  .catch((error) => {
    console.error('建立資料表時出錯：', error);
  });




