const express = require("express");
const mysql = require("mysql");
const app = express();
const PORT = process.env.PORT || 3000;

// MySQL database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "todo_db",
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database: ", err);
    return;
  }
  console.log("Connected to MySQL database");
});

// Middleware to parse JSON request bodies
app.use(express.json());

// Create a new todo item
app.post("/todos", (req, res) => {
  const { task } = req.body;
  const sql = "INSERT INTO todos (task) VALUES (?)";
  db.query(sql, [task], (err, result) => {
    if (err) {
      console.error("Error creating todo item: ", err);
      res.status(500).json({ error: "Error creating todo item" });
      return;
    }
    res.status(201).json({ id: result.insertId, task, completed: false });
  });
});

// Retrieve all todo items
app.get("/todos", (req, res) => {
  const sql = "SELECT * FROM todos";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error retrieving todo items: ", err);
      res.status(500).json({ error: "Error retrieving todo items" });
      return;
    }
    res.json(results);
  });
});

// Mark a todo item as completed
app.put("/todos/:id", (req, res) => {
  const { id } = req.params;
  const sql = "UPDATE todos SET completed = true WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Error marking todo item as completed: ", err);
      res.status(500).json({ error: "Error marking todo item as completed" });
      return;
    }
    res.json({ message: "Todo item marked as completed" });
  });
});

// Delete a todo item
app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM todos WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Error deleting todo item: ", err);
      res.status(500).json({ error: "Error deleting todo item" });
      return;
    }
    res.json({ message: "Todo item deleted" });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
