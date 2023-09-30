import express from 'express';
// importar rutas
import todoRoutes from './routes/todoRoutes.js';

const app = express();

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('views'))


// rutas
app.get("/", function(req, res){
    res.sendFile('./index.html')
})
app.use('/todos', todoRoutes);

let PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto: ${PORT}`);
});
