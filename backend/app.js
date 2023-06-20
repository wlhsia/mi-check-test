const express = require("express");
const bodyParser = require("body-parser");

require("dotenv").config();

app = express();
// 使用 body-parser 中間件解析請求主體
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 引入路由模組
const authRoutes = require("./routes/authRoutes");
const itemRoutes = require("./routes/itemRoutes");
const userRoutes = require("./routes/userRoutes");
const projectRoutes = require("./routes/projectRoutes");
const photoRoutes = require("./routes/photoRoutes");

// 使用路由模組
app.use("/api", authRoutes);
app.use("/api/items", itemRoutes);
app.use("/api/users", userRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/photos", photoRoutes);

// 啟動伺服器
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
