const express = require("express");
const usuario = require("../models/usuarioSchema");
const router = express.Router();

const {
  postusuario,
  getusuario,
  getAllusuario,
  deleteusuario,
  updateusuario,
} = require("../controllers/usuarioController");

router.post("/usuario", postusuario);
router.get("/usuarios", getAllusuario);
router.get("/usuario/:id", getusuario);
router.delete("/usuario/:id", deleteusuario);
router.put("/usuario/:id", updateusuario);

module.exports = router;