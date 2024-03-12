const mongoose = require("mongoose");

const reservaSchema = mongoose.Schema({
  cod_usuario: {
    type: String,
    required: [true, "The cedula field is required."],
  },
  cod_restaurante: {
    type: String,
    required: [true, "The codigo restaurante field is required."],
  },
  nombre: {
    type: String,
  },
  apellido: {
    type: String,
  },
  fecha: {
    type: String,
  },
  horario: {
    type: String,
  },
  cant_personas: {
    type: String,
  },
  cant_mesas: {
    type: String,
  },
  comentario: {
    type: String,
  },
});

const Reserva = mongoose.model("Reserva", reservaSchema);

module.exports = Reserva;
