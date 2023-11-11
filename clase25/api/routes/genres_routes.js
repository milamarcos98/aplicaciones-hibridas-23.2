import express  from 'express';
import {getAllGenres} from "../controllers/genres_controllers.js"

const route = express.Router();

route.get('/', getAllGenres);


export default route;