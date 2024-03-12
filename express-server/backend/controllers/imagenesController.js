const Image = require('../models/imagenesSchema');

exports.uploadImage = async (req, res) => {
  try {
    const { filename, path } = req.file; // Adjust based on your Multer configuration
    const { id_restaurante } = req.body;

    const newImage = new Image({
      filename,
      filepath: path,
      id_restaurante,
    });

    const savedImage = await newImage.save();

    res.status(201).json(savedImage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
