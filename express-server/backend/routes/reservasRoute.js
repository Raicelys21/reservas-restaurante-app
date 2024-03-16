const express = require("express");
const reservas = require("../models/reservasSchema");
const router = express.Router();

const {
  postreservas,
  getreservas,
  getAllreservas,
  deletereservas,
  updatereservas,
  getAllreservasByCod,
  getAllReservasByCodAndFecha,
} = require("../controllers/reservasController");

router.post("/reservas", postreservas);
router.get("/reservas", getAllreservas);
router.get("/reservas/codigo/:cod_usuario", getAllreservasByCod);
router.post("/reservas/restaurante", getAllReservasByCodAndFecha);
router.get("/reservas/:id", getreservas);
router.delete("/reservas/:id", deletereservas);
router.put("/reservas/:id", updatereservas);

module.exports = router;