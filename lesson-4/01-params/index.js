import express from "express";

const app = express();

// app.get("/books/1", (req, res) => {
//   res.send("Book 1");
// });

// app.get("/books/2", (req, res) => {
//   res.send("Book 2");
// });

// app.get("/books/3", (req, res) => {
//   res.send("Book 3");
// });

app.get("/books/:bookId", (req, res) => {
  const { bookId } = req.params;

  res.send(`Book ${bookId}`);
});

app.listen(8080, () => {
  console.log("Server stated on port 8080");
});
