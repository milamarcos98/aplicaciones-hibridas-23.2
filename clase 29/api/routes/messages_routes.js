import express  from 'express';
import {createMessage,getMessages} from "../controllers/messages_controllers.js"

const route = express.Router();

route.post('/', createMessage);
route.get('/:chatId', getMessages);


export default route;