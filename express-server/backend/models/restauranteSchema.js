const mongoose = require("mongoose");

const restauranteSchema = mongoose.Schema({
  cod_restaurante: {
    type: String,
    required: [true, "The codigo restaturante field is required."],
  },
  nombre_restaurante: {
    type: String,
  },
  menu: {
    type: String,
  },
  telefono: {
    type: String,
  },
  ubicacion: {
    type: String,
  },
  ciudad: {
    type: String,
  },
  hora_apertura: {
    type: String,
  },
  hora_cierre: {
    type: String,
  },
  cant_mesas: {
    type: Number,
  },
  num_personas: {
    type: Number,
  },
});

const Restaurante = mongoose.model("Restaurante", restauranteSchema);

module.exports = Restaurante;
