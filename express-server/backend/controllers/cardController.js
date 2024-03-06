const card = require("../models/cardModel");

// post card
const postCard = async (req, res) => {
  try {
    const card0 = await card.create(req.body);
    res.status(200).json(card0);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// get all cards
const getAllCard = async (req, res) => {
  try {
    const card0 = await card.find();
    res.status(200).json(card0);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// get a single card
const getCard = async (req, res) => {
  try {
    const { id } = req.params;
    const card0 = await card.findById(id);
    if (!card0) {
      return res.status(404).json(`No cards with id: ${id}`);
    }
    res.status(200).json(card0);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// delete card
const deleteCard = async (req, res) => {
  try {
    const { id } = req.params;
    const card0 = await card.findByIdAndDelete(id);
    if (!card0) {
      return res.status(404).json(`No cards with id: ${id}`);
    }
    res.status(200).send("Card deleted");
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// update a card
const updateCard = async (req, res) => {
  try {
    const { id } = req.params;
    const card0 = await card.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!card0) {
      return res.status(404).json(`No cards with id: ${id}`);
    }
    res.status(200).json(card0);

  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  postCard,
  getAllCard,
  getCard,
  deleteCard,
  updateCard,
};