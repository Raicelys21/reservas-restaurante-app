const usuario = require("../models/usuarioSchema");

// post usuario
const postusuario = async (req, res) => {
  try {
    const usuario0 = await usuario.create(req.body);
    res.status(200).json(usuario0);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Get a single Usuarios
const get_UsuarioCorreo = async (req, res) => {
  try {
    const { correo, contrasena } = req.params;

    const usuarioEncontrado = await usuario.findOne({ correo, contrasena });
    if (!usuarioEncontrado) {
      return res.status(404).json(`No user found with email: ${correo} and password: ${contrasena}`);
    }

    res.status(200).json(usuarioEncontrado);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// get all usuario
const getAllusuario = async (req, res) => {
  try {
    const usuario0 = await usuario.find();
    res.status(200).json(usuario0);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// get a single usuario
const getusuario = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario0 = await usuario.findById(id);
    if (!usuario0) {
      return res.status(404).json(`No usuarios with id: ${id}`);
    }
    res.status(200).json(usuario0);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// delete usuario
const deleteusuario = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario0 = await usuario.findByIdAndDelete(id);
    if (!usuario0) {
      return res.status(404).json(`No usuarios with id: ${id}`);
    }
    res.status(200).send("usuario deleted");
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// update a usuario
const updateusuario = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario0 = await usuario.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!usuario0) {
      return res.status(404).json(`No usuarios with id: ${id}`);
    }
    res.status(200).json(usuario0);

  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  postusuario,
  getAllusuario,
  getusuario,
  deleteusuario,
  updateusuario,
  get_UsuarioCorreo,
};