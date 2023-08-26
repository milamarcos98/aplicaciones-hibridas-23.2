const fs = require('fs');

// console.log("uno")

// const file = fs.readFileSync("./file.txt", "utf-8");
// console.log(file)

// console.log("dos")

// fs.readFile("./file.txt", "utf-8", (error, data) => {
//     if(error){
//         console.log(error)
//     }else{
//         console.log(data)
//     }
// })

// console.log("tres")

// fs.writeFileSync("test.txt", "Mensaje de prueba hello 1234...")
// fs.writeFileSync("test.txt", "testing", {flag: "a"});// append

// fs.writeFile("test.txt", "testing 123", {flag: "a"}, (error, data) => {
//     if(error){
//         console.log(error)
//     }else{
//         console.log("archivo modificado")
//     }
// });

// info
// fs.stat('file.txt', (error, stats)=> {
//     if(error){
//         console.log('error:', error)
//     }else{
//         console.log('stats', stats)
//     }
// })

// fs.copyFile('file.txt', 'copy.txt', (error) =>{
//     if(error){
//         console.log(error)
//     }else{
//         console.log('archivo copiado')
//     }
// })

// fs.unlink('copy.txt', (error) => {
//     if(error){
//         console.log(error)
//     }else{
//         console.log("que paso?")
//     }
// })

fs.rmdir('carpeta', (error) => {
    if(error){
        console.log(error)
    }else{
        console.log("que paso? la secuela")
    }
})







