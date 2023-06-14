const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mssql',
  dialectOptions: {
    options: {
      encrypt: true, // 如果使用加密的連線，設置為 true
    },
  },
  logging: false, // 是否顯示 SQL 日誌，設置為 false 可禁用
});

// 測試資料庫連線
sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
