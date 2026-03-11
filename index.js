const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static("public"));

// Data sementara (tersimpan di memori selama server jalan)
let todos = [
  { id: 1, text: "Belajar Git", selesai: true },
  { id: 2, text: "Belajar Node.js", selesai: true },
  { id: 3, text: "Deploy ke VPS", selesai: false },
];
let nextId = 4;

// GET - Ambil semua todo
app.get("/api/todos", (req, res) => {
  res.json(todos);
});

// POST - Tambah todo baru
app.post("/api/todos", (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: "Text tidak boleh kosong" });
  const todo = { id: nextId++, text, selesai: false };
  todos.push(todo);
  res.status(201).json(todo);
});

// PUT - Tandai selesai/belum
app.put("/api/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find((t) => t.id === id);
  if (!todo) return res.status(404).json({ error: "Todo tidak ditemukan" });
  todo.selesai = !todo.selesai;
  res.json(todo);
});

// DELETE - Hapus todo
app.delete("/api/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex((t) => t.id === id);
  if (index === -1)
    return res.status(404).json({ error: "Todo tidak ditemukan" });
  todos.splice(index, 1);
  res.json({ message: "Todo berhasil dihapus" });
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
