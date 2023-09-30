import express from 'express';
// controllers
import { getTodosController, createTodosController } from '../controllers/todoController.js';
// router
const router = express.Router();

// rutas
router.get('/', getTodosController);
router.post('/', createTodosController);

export default router;
