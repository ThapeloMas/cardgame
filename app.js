const express = require("express");
const app = express();
const path = require("path");

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

// Utility to shuffle cards
const shuffleCards = () => {
  const pairs = Array.from({ length: 18 }, (_, i) => i + 1).flatMap((x) => [
    x,
    x,
  ]);
  return pairs.sort(() => Math.random() - 0.5);
};

// Routes
app.get("/", (req, res) => {
  const cards = shuffleCards();
  res.render("index", { cards });
});

// Start Server
const PORT = 3002;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
