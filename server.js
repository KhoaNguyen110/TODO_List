const express = require("express");
const app = express();
const port = 4000;

// Serve static files from /public
app.use(express.static("todo-csr"));

// Default route → home.html
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/todo-csr/home.html");
});

// Route ToDo list
app.get("/todo", (req, res) => {
  res.sendFile(__dirname + "/todo-csr/todo.html");
});

app.listen(port, () => {
  console.log(`🚀 App running at http://localhost:${port}`);
});
