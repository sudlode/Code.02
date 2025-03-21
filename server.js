const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

const CORRECT_PASSWORD = "MySecurePassword123"; // Замініть на свій пароль
const CHANNEL_LINK = "https://t.me/YOUR_CHANNEL"; // Замініть на посилання

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public"))); // Папка для HTML

app.post("/login", (req, res) => {
    const password = req.body.password;
    if (password === CORRECT_PASSWORD) {
        res.send(`<h1>✅ Пароль правильний!</h1><a href="${CHANNEL_LINK}">Перейти до каналу</a>`);
    } else {
        res.send('<h1>❌ Неправильний пароль! Спробуйте ще раз.</h1><a href="/">Повернутися</a>');
    }
});

app.listen(PORT, () => {
    console.log(`Сервер працює на http://localhost:${PORT}`);
});
