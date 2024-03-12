const restaurante = require("../models/restauranteSchema");

// post restaurante
const postrestaurante = async (req, res) => {
  try {
    const restaurante0 = await restaurante.create(req.body);
    res.status(200).json(restaurante0);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// get all restaurante
const getAllrestaurante = async (req, res) => {
  try {
    const restaurante0 = await restaurante.find();
    res.status(200).json(restaurante0);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// get a single restaurante
const getrestaurante = async (req, res) => {
  try {
    const { id } = req.params;
    const restaurante0 = await restaurante.findById(id);
    if (!restaurante0) {
      return res.status(404).json(`No restaurantes with id: ${id}`);
    }
    res.status(200).json(restaurante0);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// delete restaurante
const deleterestaurante = async (req, res) => {
  try {
    const { id } = req.params;
    const restaurante0 = await restaurante.findByIdAndDelete(id);
    if (!restaurante0) {
      return res.status(404).json(`No restaurantes with id: ${id}`);
    }
    res.status(200).send("restaurante deleted");
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// update a restaurante
const updaterestaurante = async (req, res) => {
  try {
    const { id } = req.params;
    const restaurante0 = await restaurante.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!restaurante0) {
      return res.status(404).json(`No restaurantes with id: ${id}`);
    }
    res.status(200).json(restaurante0);

  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  postrestaurante,
  getAllrestaurante,
  getrestaurante,
  deleterestaurante,
  updaterestaurante,
};