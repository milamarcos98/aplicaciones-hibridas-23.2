console.log("hello world");

const saludar = () =>{
    console.log("holis");
}

saludar();

const nombre = "pepe";

// global

setTimeout(() =>{
    console.log("holis con this");
}, 2000)

setTimeout(() =>{
    console.log("holis con this y un 0");
}, 0)

console.log(nombre);