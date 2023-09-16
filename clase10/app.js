import express from "express";
import {promises} from 'fs';
// filesystem

const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/personajes', function(req, res) {
    promises.readFile('./data/simpsons.json')
    .then(
        function(data){
            const personajes = JSON.parse(data);
            res.json(personajes)
        }
    )
    .catch(
        function(err){
            res.status(404).json({err:404, msg: "file not found"})
        }
    )
})

app.get('/personajes/:id', function(req, res) {
    promises.readFile('./data/simpsons.json')
    .then(
        function(data){
            const personajes = JSON.parse(data);
            const personaje = personajes.find(
                function(p){
                    return p.id == req.params.id
                }
            )
            if(personaje){
                res.status(200).json(personaje)
            }else{
                res.status(404)
                .json({
                    err: 404,
                    msg: "No se encuentra el personaje #" + req.params.id
                })
            }
        }
    )
    .catch(
        function(err){
            res.status(404).json({err:404, msg: "file not found"})
        }
    )
})

app.post('/personajes', function(req,res){
    promises.readFile('./data/simpsons.json')
    .then(
        function(data){
            const personajes = JSON.parse(data)
            const personaje = req.body;
            personaje.id = personajes.length + 1

            personajes.push(personaje)

            promises.writeFile('./data/simpsons.json', JSON.stringify(personajes))
            .then(
                function(){
                    res.status(201).json(personaje)
                }
            )
            .catch(
                function(err){
                    res.status(400).json({err:400, msg: "error while creating"})
                }
            )
        }
    )
})


//put
app.put('/personajes/:id', function(req,res){
    promises.readFile('./data/simpsons.json')
    .then(
        function(data){
            const personajes = JSON.parse(data)
            const personaje = personajes.find(
                function(p){
                    return p.id == req.params.id
                }
            )
            if(personaje){
                const index = personajes.indexOf(personaje)
                personajes[index] = {id: parseInt(req.params.id), ...req.body}
                promises.writeFile('./data/simpsons.json', JSON.stringify(personajes))
                .then(function(){
                    res.json(personajes[index])
                })

            }else{
                res.status(404)
                .json({
                    err: 404,
                    msg: "No se encuentra el personaje #" + req.params.id
                })
            }
        }
    )
})

app.listen(3000, function(){
    console.log("server running...")
})