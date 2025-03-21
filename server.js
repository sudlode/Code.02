const express = require("express");
const app = express();

const CORRECT_PASSWORD = "MySecurePassword123"; // Заміни на свій пароль
const CHANNEL_LINK = "https://t.me/+OqUKXXzWFHNlODhi";  // Заміни на посилання

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
    <h1>Введіть пароль</h1>
    <form method="POST">
      <input type="text" name="password" placeholder="Пароль" required>
      <button type="submit">Відправити</button>
    </form>
  `);
});

app.post("/", (req, res) => {
  const enteredPassword = req.body.password;
  if (enteredPassword === CORRECT_PASSWORD) {
    res.send(`<h1>✅ Пароль правильний!</h1><a href="${CHANNEL_LINK}">Перейти до каналу</a>`);
  } else {
    res.send(`<h1>❌ Неправильний пароль! Спробуй ще раз.</h1>`);
  }
});

app.listen(3000, () => console.log("Сервер працює на порту 3000"));
