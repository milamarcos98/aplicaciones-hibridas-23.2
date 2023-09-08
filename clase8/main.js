import express from 'express';
const app = express();

// middleware
app.use(logger)
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

app.get('/', (req, res) => {
    res.send("Home page")
})

app.get('/users',auth, (req, res) => {
    res.send("Users page")
})

function logger(req, res, next){
    //log
    console.log("log => " + req.originalUrl)
    next()
}

function auth(req, res, next){
    if(req.query.admin === 'true'){
        next()
    }else{
        res.send("no auth")
    }
}

app.listen(3000, function(){
    console.log("el server esta en http://localhost:3000")
})
