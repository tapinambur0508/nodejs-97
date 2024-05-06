import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, Express:-)");
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
