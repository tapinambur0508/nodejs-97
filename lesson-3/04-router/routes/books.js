import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Books");
});

export default router;
