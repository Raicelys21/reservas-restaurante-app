const express = require("express");
const reservas = require("../models/reservasSchema");
const router = express.Router();

const {
  postreservas,
  getreservas,
  getAllreservas,
  deletereservas,
  updatereservas,
} = require("../controllers/reservasController");

router.post("/reservas", postreservas);
router.get("/reservas", getAllreservas);
router.get("/reservas/:id", getreservas);
router.delete("/reservas/:id", deletereservas);
router.put("/reservas/:id", updatereservas);

module.exports = router;