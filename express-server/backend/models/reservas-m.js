const mongoose = require("mongoose");

const reservaSchema = mongoose.Schema(
    {
        cedula: {
            type: String,
            unique: true,
            required: [true, "The cedula field is required."],
        },
        nombre: {
            type: String,
            required: [true, "The nombre field is required."],
        },
        apellido: {
            type: String,
            required: [true, "The apellido field is required."],
        },
        telefono: {
            type: String,
            required: [true, "The telefono field is required."],
        },
        correo: {
            type: String,
            required: [true, "The correo field is required."],
        },
        contrasena: {
            type: String,
            required: [true, "The contrasena field is required."],
        },
        entidad: {
            type: String,
            required: [true, "The entidad field is required."],
        },
        codigo_confirmacion: {
            type: String,
        }
    }
);

const Reserva = mongoose.model("Reserva", reservaSchema);

module.exports = Reserva;