import Movies from '../models/movies_model.js';

const getAllMovies = async (req, res) => {
    const limit = req.query.limit || 10;
  try {
    const movies = await Movies.find().limit(limit);
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMovieById = async (req, res) => {
  try {
    const movie = await Movies.findById(req.params.id);
    if (movie) {
      res.json(movie);
    } else {
      res.status(404).json({ message: 'Movie not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const searchMovies = async (req, res) => {
  try {
    const movies = await Movies.find({ title: { $regex: req.params.title } });
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createMovie = async (req, res) => {
  const movie = new Movies(req.body);

  try {
    const newMovie = await movie.save();
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateMovie = async (req, res) => {
    // console.log(req.params.id)
  try {
    const updatedMovie = await Movies.findByIdAndUpdate(req.params.id, req.body);
    res.json(updatedMovie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteMovie = async (req, res) => {
    try {
      const deletedMovie = await Movies.findByIdAndDelete(req.params.id);
      if (deletedMovie) {
        res.json({ message: 'Movie deleted successfully' });
      } else {
        res.status(404).json({ message: 'Movie not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

export {
  getAllMovies,
  getMovieById,
  searchMovies,
  createMovie,
  updateMovie,
  deleteMovie
};
