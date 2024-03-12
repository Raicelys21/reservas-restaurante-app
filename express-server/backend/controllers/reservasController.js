const reservas = require("../models/reservasSchema");

// post reservas
const postreservas = async (req, res) => {
  try {
    const reservas0 = await reservas.create(req.body);
    res.status(200).json(reservas0);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// get all reservas
const getAllreservas = async (req, res) => {
  try {
    const reservas0 = await reservas.find();
    res.status(200).json(reservas0);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// get a single reservas
const getreservas = async (req, res) => {
  try {
    const { id } = req.params;
    const reservas0 = await reservas.findById(id);
    if (!reservas0) {
      return res.status(404).json(`No reservass with id: ${id}`);
    }
    res.status(200).json(reservas0);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// delete reservas
const deletereservas = async (req, res) => {
  try {
    const { id } = req.params;
    const reservas0 = await reservas.findByIdAndDelete(id);
    if (!reservas0) {
      return res.status(404).json(`No reservass with id: ${id}`);
    }
    res.status(200).send("reservas deleted");
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// update a reservas
const updatereservas = async (req, res) => {
  try {
    const { id } = req.params;
    const reservas0 = await reservas.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!reservas0) {
      return res.status(404).json(`No reservass with id: ${id}`);
    }
    res.status(200).json(reservas0);

  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  postreservas,
  getAllreservas,
  getreservas,
  deletereservas,
  updatereservas,
};