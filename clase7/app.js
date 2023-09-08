import express  from "express";

const app = express();
const port = 3000;

app.use(express.json())
app.use(express.urlencoded({extended: true}))

let movies = [
    {
      id: 1,
      title: "Harry Potter and the Sorcerer's Stone",
      writer: 'J.K. Rowling',
      year: 2001,
      genre: 'Fantasy',
      cast: ['Daniel Radcliffe', 'Emma Watson', 'Rupert Grint'],
    },
    {
      id: 2,
      title: 'Avatar',
      writer: 'James Cameron',
      year: 2009,
      genre: 'Science Fiction',
      cast: ['Sam Worthington', 'Zoe Saldana', 'Sigourney Weaver'],
    },
    {
      id: 3,
      title: 'Jurassic Park',
      writer: 'Michael Crichton',
      year: 1993,
      genre: 'Science Fiction',
      cast: ['Sam Neill', 'Laura Dern', 'Jeff Goldblum'],
    },
    {
      id: 4,
      title: 'Fast & Furious',
      writer: 'Gary Scott Thompson',
      year: 2001,
      genre: 'Action',
      cast: ['Vin Diesel', 'Paul Walker', 'Dwayne Johnson'],
    },
    {
      id: 5,
      title: 'The Matrix',
      writer: 'Lana Wachowski, Lilly Wachowski',
      year: 1999,
      genre: 'Science Fiction',
      cast: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
    },
  ];

  app.get('/', (req, res) => {
    const htmlContent = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Bienvenido a mi API de peliculas</h1>
        <a href="http://localhost:3000/movies">Ir a ver pelis</a>
    </body>
    </html>`;
    res.send(htmlContent)
  })

  app.get('/movies', (req, res)=> {
    res.json(movies);
  })

  app.get('/movies/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const movie = movies.find((m) => m.id === id);
    if(!movie){
        return res.status(404).json({message: "Movie not found"})
    }
    res.json(movie)
  })

  app.get('/movies/count', (req, res)=> {
    // retornar la cantidad de peliculas
    res.json({count: movies.length});
  })

  app.post('/movies', (req, res)=>{
    const newMovie = req.body;
    movies.push(newMovie);
    res.status(201).json(newMovie);
  })

  app.put('/movies/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedMovie = req.body;

    const index = movies.findIndex((m) => m.id === id)
    if(index === -1){
        return res.status(404).json({message: "Movie not found"})
    }
    // spread operator
    movies[index] = {id, ...updatedMovie};
    res.json(movies[index])
  })

  app.patch('/movies/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedFields = req.body;
    const index = movies.findIndex((m) => m.id === id)
    if(index === -1){
        return res.status(404).json({message: "Movie not found"})
    }
    movies[index] = {...movies[index], ...updatedFields}
    res.json(movies[index])
  })

  app.delete("/movies/:id", (req, res) =>{
    const id = parseInt(req.params.id);
    const index = movies.findIndex((m) => m.id === id)
    if(index === -1){
        return res.status(404).json({message: "Movie not found"})
    }
    const deletedMovie = movies.splice(index, 1);
    res.json(deletedMovie);
  })

  app.listen(port, () => {
    console.log(`Server running on port ${port}`)
  })