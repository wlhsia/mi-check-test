const fs = require('fs');
const path = require('path');

const PhotoController = {
    async getPhoto(req, res) {
        const { filename } = req.params;
        const imagePath = path.join(path.dirname(require.main.filename), '/photo', filename); // 替換為實際的圖像路徑
        fs.readFile(imagePath, (err, data) => {
            if (err) {
                console.error('無法讀取圖像：', err);
                return res.status(500).send('伺服器錯誤');
            }
            res.setHeader('Content-Type', 'image/jpeg'); // 設置圖像的 Content-Type，這裡以 JPEG 格式為例
            res.send(data);
        });
    },
};

module.exports = PhotoController;
