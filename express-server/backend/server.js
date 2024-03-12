const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const app = express();

// Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "backend/uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname +
        "-" +
        uniqueSuffix +
        "." +
        file.originalname.split(".").pop()
    );
  },
});

const upload = multer({ storage });

// Routes
const imagenesRoute = require("./routes/imagenesRoute");
const reservasRoute = require("./routes/reservasRoute");
const restauranteRoute = require("./routes/restauranteRoute");
const usuarioRoute = require("./routes/usuarioRoute");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:5173"],
  })
);

app.use("/api/reservas", reservasRoute);
app.use("/api/restaurante", restauranteRoute);
app.use("/api/usuario", usuarioRoute);
app.use("/api/imagen", upload.single("image"), imagenesRoute);

app.get("/", (req, res) => {
  res.send("RUNNING");
});

const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
