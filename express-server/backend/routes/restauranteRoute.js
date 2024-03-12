const express = require("express");
const router = express.Router();
const {
  postrestaurante,
  getAllrestaurante,
  getrestaurante,
  deleterestaurante,
  updaterestaurante,
} = require("../controllers/restauranteController");

router.post("/restaurante", postrestaurante);
router.get("/restaurantes", getAllrestaurante);
router.get("/restaurante/:id", getrestaurante);
router.delete("/restaurante/:id", deleterestaurante);
router.put("/restaurante/:id", updaterestaurante);

module.exports = router;
