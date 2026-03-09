const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Web Pertama Saya</title>
        <style>
          body { font-family: Arial; text-align: center; padding: 50px; background: #f0f0f0; }
          h1 { color: #333; }
          p { color: #666; }
        </style>
      </head>
      <body>
        <h1>Halo Dunia! 👋</h1>
        <p>Ini website pertama saya dengan Node.js</p>
        <p>Dibuat oleh: ifay-tech</p>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Website berjalan di http://localhost:${port}`);
});
