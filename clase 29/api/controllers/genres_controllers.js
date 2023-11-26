import Genres from '../models/genres_model.js';

const getAllGenres = async (req, res) => {
  try {
    const genres = await Genres.find();
    res.json(genres);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  };

export {
  getAllGenres
};
