const jwt = require('jsonwebtoken');

const { User } = require("../models");
const secretKey = process.env.SECRET_KEY;

const authController = {
    async login(req, res) {
        // 取得從用戶端傳送的登入資訊
        const { notesId, password } = req.body;
        // 執行身份驗證邏輯，驗證成功後生成 JWT
        if (true) {
            // 建立使用者物件
            const user = await User.findOne({
                where: {
                    notesId: notesId,
                },
            })
            if (user) {
                // 簽發 JWT
                const payload = { id: user.id, username: user.username };
                const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
                res.json({ token });
            } else {
                res.status(401).json({ message: '找不到該使用者' });
            }
        } else {
            // 登入失敗回傳錯誤訊息
            res.status(401).json({ message: '登入失敗' });
        }
    }
};

module.exports = authController;


