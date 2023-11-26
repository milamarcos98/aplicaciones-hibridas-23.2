import express  from 'express';
import {createChat, findUserChats, findChat} from "../controllers/chat_controllers.js"

const route = express.Router();

route.post('/', createChat);
route.get('/:userId', findUserChats);
route.get('/find/:firstId/:secondId', findChat);


export default route;