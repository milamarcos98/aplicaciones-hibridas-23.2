import express from 'express';
import mongoose from 'mongoose';
import movies from './routes/movies_routes.js';
import genres from './routes/genres_routes.js';
import users from './routes/users_routes.js';
import chat from './routes/chat_routes.js';
import messages from './routes/messages_routes.js';
import 'dotenv/config';
import cors from 'cors';

mongoose.connect("mongodb://127.0.0.1:27017/movies", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {console.log('Conectado a MongoDB...')
})
    .catch(err => console.log('No se pudo conectar con MongoDB..', err));


const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get('/',(req, res) => {
    res.send("movie database");
});
app.use('/movies', movies);
app.use('/genres', genres);
app.use('/users', users);
app.use('/chats', chat);
app.use('/messages', messages);

const port = process.env.PORT || 3002;
app.listen(port, () => {
    console.log(`    ░▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▒
    ░▐▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▓▀▌▀▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌
    ░▐▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▓▓  ░   ▀▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌
    ░▐▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▓███████▓▓▓▓▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌
    ░▐▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▓██████████▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌
    ░▐▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▀▓█▓▀▀▓▌▐▀▒▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌
    ░▐▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▄███▄▓▌  ▐▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌█████▀  ▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌█████▀░▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▀▀▀▀▀░  ▀▀▀   ░▀▀▀▀▓▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▀        ░               ▀▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌ ░                         ▐▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▒▒░░                  ▒░      ▐▓▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌
    ░▓▌▌▌▌▌▌▒░▒▒░            ░    ░░▓██▄     ▀▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌
    ░▓▌▌▌▌▀░▄▓▓██░ ░         ░░ ░▄▐▄▒▌▀█▓░     ▀▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌
    ░▓▌▌▌▌▄▒▒▒█▓▓░           ░  ░▒▒▓███▓▓█▓▄    ▀▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌
    ░▓▌▌▌▌███▀▀▌▀              ░░░▒▓███▌▌▓███▄  ▐▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌
    ░▓▌▌▌▌▓█▌▒▌ ░▌      ░    ░░ ░ ░▒▒▓▓▌▌▌▌▌▓██▄▓▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌
    ░▓▌▌▌▌▓▒█▌▌░ ░ ░░░░   ░   ▐ ░░▒░▓▒▐▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌
    ░▓▌▌▌▌▓░░▌▌▌░ ░░░░ ░░░ ░ ░ ░░  ░▒▄▌▌▀▀▀▀▀▀▀▀▌▌▌▌▒▌▀▒▒▌▌▌▐▀▒▐▒▌▒░ ▒▌▌▌▌░ ▒▌▌▌▌▌▌
    ░▓▌▌▌▌▓░▓▓▌▌▌▓▄▄▄▄▒░░░░░░░   ░ ░▌▌▌▌▒        ▐▌▌▒▒  ▒▌▌▓▐  ░▐▌    ▐▌▌▌   ▓▌▌▌▌▌
    ░▓▌▌▌▌▓▓▓█▀▓▌▀▓██████▓▓▄▌▄▄▄▄▓▒▌▌▌▌▌▒   ▌▄▄   ▐▌▒▒  ▒▌▌▌▒  ░▐▌    ░▀▌▓   ▐▌▌▌▌▌
    ░▓▌▌▌▌▌█▓▌▌▌▌▒▒▒░░▐▀▀▓██████▀▀░ ▐▌▌▌▒   ▌▌▌    ▌▌░  ▐▌▌▓▒   ▐▌░    ▒▓▓   ▐▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▒▌███▓▄▄▄▒▐▄▄▒░░░    ▐▌▌▌   ▌▌▓   ▐▌▌   ▐▌▌▌▒   ▓▌      ▐▌░  ▀▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▀▒▀▒░░░▒▀▄░▄▓░ ░▀░░░▐▌▌▌         ▓▌▌   ▐▌▌▌░   ▓▌   ▐   ▀▒  ▐▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▄░░░      ░▓█▄░░░░░▐▌▌▌▌   ▄    ▌▌▌▌   ▐▌▌▌▒   ▐▌   ▐▌      ▐▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▌▒░░░       ▓█▀▐░░░▌▌▌▌▌  ░▌▌   ▀▌▌▒   ▐▌▌▓░   ▐▌   ▐▌▒     ▐▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▌▌▒░░░░     ▐█░░░ ▓▌▌▌▌▒  ░▌▓░  ▐▌▌▌   ▐▌▌▓░  ░▓▌░  ▐▌▌▒    ▐▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▌▌▓▒▒░░░     ▓█░░▐▌▌▌▌▌▒   ▌▌▌   ▐▌▌░  ░     ░▐▌▌   ▐▌▌▌▒   ▐▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▓▌░░░    ▐█▓░▓▌▌▌▌▌▒   ▌▌▓   ▒▓▌▓▄▌░ ░▒▒▒▓▌▌▌░░▒▐▌▌▌▌▌▒▒▓▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▓▓▒░░░   ▀▒▐▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▀▒▀▀▀▀▀░   ▒▌▌▌▌▌▌▌▀▀▀▀▓▌▀▀▀▀▌▌▌▌▌▌▌▌▌▌▌▌▌▀▀▀▓▌▌▀▀▀▌▌▌▌▌▓▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▌▓██▓▌▀▓█▓▄     ▌▌▌▌▌▌▌ ▐▄▄▌  ▄  ▀    ▐▌    ▐▒ ▄▄▄▌ ▄▄ ▐▄▄  ▄▄▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▓█████▄█▀▓█▓░░▓▐▌▌▌▌▌▌▌ ▐▀▓▌ ▐▌▒ ▐ ▐▌  ▌ ▐▌  ▒ ▀▌▌▌ ░▓▌▌▌▌ ▐▌▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▌▒█████▒██▀▀▀▒▓▌▌▌▌▌▌▌▒ ▐▄▐▌ ▐▌▒ ▐    ▐▌    ▓▒ ▄▄▓▌▌░ ░▓▌▌ ▐▌▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▌░▀██▀▒▓▒▓▒▐░▓░▓▌▌▌▌▌▌▒ ▓▌▌▌ ▐▌░ ▐ ▐▌ ▐▌ ▐░ ▓▒ ▓▌▌▀▒▌▓  ▌▌ ▐▌▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▌░ ░ ▐▒░░▒▄▄█▒▌▓▌▌▌▌▌▌▒ ▐▌▌▓▒░  ▒▓ ▐▌  ▌ ▐▌ ▐▒   ░▌░░ ░▄▌▌░▐▌▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▌░░░ ▐▌░░▄▌▀█▓▐▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▓▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▌▌░  ▐▓▐███▓▓█▌▒▌▌▌▌▌▌▌▓▀▓▓▓▀▓▌▌▌▌▌▒▌▀▐▌▌▌▌▐▀▀▌▒▌▌▒▀▀▌▌▌▌▀▀▀▓▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▓▓▌▒▀▌▀█▓▒▓▒▐▌▌▌▌▌▌▒        ▐▌▌▒▒  ▒▌▌▓▒  ░▐▌    ▐▌▌▌   ▓▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▓▌▀▀▀▓▌▄▐▌▌▌▌▌▌▒   ▄▄▄   ▐▌▒▒  ▒▌▌▓▒  ░▐▌    ▐▓▌▓░  ▐▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▒▓▄░░░░▒▒▌▌▌▌▌▌▌   ▌▌▌    ▌▌░  ▐▌▌▓▒  ▐▐▌     ▒▓▓   ▐▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▀▓▒░░░░░▐▌▌▌▌▌▌   ▌▌▌   ▐▌▌   ▐▌▌▌▒   ▓▌░     ▐▓░  ▓▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▓▄▒░░░░▄▄▌▌▌▌▌▌   ░░    ▓▌▌   ▐▌▌▌▒   ▓▌   ▌   ▀▒  ▐▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▓██▀▓█▓▌▌▌▌▌▌▌        ▓▌▌▌   ▐▌▌▌▒   ▐▌   ▓▌      ▐▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▀    ▀▌▌▌▌▌▌▌  ░▌▌   ▓▌▌▒   ▐▌▌▓░   ▐▌   ▐▌▒     ▐▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌      ▀▌▌▌▌▌▒  ░▌▓░  ▐▌▌▌   ▐▌▌▌░   ▓▌░  ▓▌▌░    ▐▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌       ░▓▌▌▌▒   ▌▌▌   ▀▌▌░   ░     ▒▌▌   ▐▌▌▌▒   ▐▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▄▄▀████▓▌▌▌▌▒   ▌▌▓   ▒▓▌▓▄▒░ ░▄▒▒▄▓▌▌░ ░▐▌▌▌▌▄░▒▐▌▌▌▌▌
    ░▓▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▓▓▌▌▌▌▌▌▌▌▌▓▌▓▌▌▌▌▓▓▓▓▌▌▌▌▌▌▓▓▓▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌
    ░▀▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▓▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌
                                                                                ░`);
console.log(`

  ██████╗ ██╗   ██╗███╗   ██╗     █████╗ ██████╗ ██╗    ██████╗ ██╗   ██╗███╗   ██╗██╗
  ██╔══██╗██║   ██║████╗  ██║    ██╔══██╗██╔══██╗██║    ██╔══██╗██║   ██║████╗  ██║██║
  ██████╔╝██║   ██║██╔██╗ ██║    ███████║██████╔╝██║    ██████╔╝██║   ██║██╔██╗ ██║██║
  ██╔══██╗██║   ██║██║╚██╗██║    ██╔══██║██╔═══╝ ██║    ██╔══██╗██║   ██║██║╚██╗██║╚═╝
  ██║  ██║╚██████╔╝██║ ╚████║    ██║  ██║██║     ██║    ██║  ██║╚██████╔╝██║ ╚████║██╗
  ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝    ╚═╝  ╚═╝╚═╝     ╚═╝    ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝
                                                              
        `);
})