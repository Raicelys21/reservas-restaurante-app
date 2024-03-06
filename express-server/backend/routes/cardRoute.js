const express = require("express");
const card = require("../models/cardModel");
const router = express.Router();

const {
  postCard,
  getCard,
  getAllCard,
  deleteCard,
  updateCard,
} = require("../controllers/cardController");

router.post("/card", postCard);
router.get("/cards", getAllCard);
router.get("/card/:id", getCard);
router.delete("/card/:id", deleteCard);
router.put("/card/:id", updateCard);

module.exports = router;