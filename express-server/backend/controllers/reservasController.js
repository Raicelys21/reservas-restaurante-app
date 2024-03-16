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

const getAllreservasByCod = async (req, res) => {
  try {
    const { cod_usuario } = req.params;
    const reservasFound = await reservas.find({ cod_usuario });

    if (reservasFound.length === 0) {
      return res.status(404).json({ msg: 'No se encontraron reservas para el usuario dado.' });
    }
    res.status(200).json(reservasFound);
  } catch (error) {
    console.error('Error al obtener reservas:', error);
    res.status(500).json({ msg: 'Error al obtener reservas.' });
  }
};

const getAllReservasByCodAndFecha = async (req, res) => {
  try {
    const { cod_restaurante, fecha } = req.body;
    const reservasFound = await reservas.find({ cod_restaurante, fecha });

    if (reservasFound.length === 0) {
      return res.status(404).json({ msg: 'No se encontraron reservas para el restaurante y fecha dados.' });
    }
    res.status(200).json(reservasFound);
  } catch (error) {
    console.error('Error al obtener reservas por código de restaurante y fecha:', error);
    res.status(500).json({ msg: 'Error al obtener reservas por código de restaurante y fecha.' });
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
      return res.status(404).json(`No reservas with id: ${id}`);
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
  getAllreservasByCod,
  getAllReservasByCodAndFecha,
};