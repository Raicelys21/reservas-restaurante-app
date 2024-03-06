const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

//routes
const cardRoute = require("./routes/cardRoute");

// middleware
app.use(express.json());
-app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:5173",
    ],
  })
);

app.use("/api/", cardRoute);

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
