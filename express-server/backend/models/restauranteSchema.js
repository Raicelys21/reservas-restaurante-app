const mongoose = require("mongoose");

const restauranteSchema = mongoose.Schema({
  cod_restaturante: {
    type: String,
    unique: true,
    required: [true, "The codigo restaturante field is required."],
  },
  nombre_restaurante: {
    type: String,
    required: [true, "The nombre restaurante field is required."],
  },
  menu: {
    type: String,
    required: [true, "The menu field is required."],
  },
  telefono: {
    type: String,
    required: [true, "The telefono field is required."],
  },
  ubicacion: {
    type: String,
    required: [true, "The ubicacion field is required."],
  },
  ciudad: {
    type: String,
    required: [true, "The ciudad field is required."],
  },
  hora_apertura: {
    type: String,
    required: [true, "The hora apertura field is required."],
  },
  hora_cierre: {
    type: String,
    required: [true, "The hora cierre field is required."],
  },
  cant_mesas: {
    type: Number,
    required: [true, "The cantidad de mesas field is required."],
  },
  num_personas: {
    type: Number,
    required: [true, "The numero de personas field is required."],
  },
});

const Restaurante = mongoose.model("Restaurante", restauranteSchema);

module.exports = Restaurante;
