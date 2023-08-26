const fs = require('fs');

// fs.readFile('notas.txt', (err, data) =>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data.toString())
//     }
// })

// fs.writeFile('notas.txt', 'nuevo mensaje', (err, data) =>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("mensaje creado")
//     }
// })


fs.appendFile('notas.txt', '\r\nnuevo mensaje', (err, data) =>{
    if(err){
        console.log(err)
    }else{
        console.log("mensaje creado 2")
    }
})

