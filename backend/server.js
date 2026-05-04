const express = require("express");
const app = express();


// ROOT ROUTE (this fixes your problem)
app.get("/", (req, res) => {
  res.send("Backend server is running");
});

// Example API
app.get("/api", (req, res) => {
  res.json({ message: "API working" });
});

app.listen(5000, "0.0.0.0", () => {
  console.log("Server running on port 5000");
});
const fs = require("fs");

fs.writeFileSync("/app/data/test.txt", "Hello from Docker");