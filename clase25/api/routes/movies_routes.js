import express  from 'express';
import {getAllMovies, getMovieById, searchMovies, createMovie, updateMovie, deleteMovie} from "../controllers/movies_controllers.js"

const route = express.Router();

route.get('/', getAllMovies);
route.get('/:id', getMovieById);
route.get('/search/:title', searchMovies);
route.post('/', createMovie);
route.put('/:id', updateMovie);
route.delete('/:id', deleteMovie);


export default route;