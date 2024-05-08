import crypto from "node:crypto";

import express from "express";

const app = express();

// app.use(express.json());

const jsonParser = express.json();

app.post("/books", jsonParser, (req, res) => {
  const { title, author, year } = req.body;

  res.status(201).send({
    id: crypto.randomUUID(),
    title,
    author,
    year,
  });
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
