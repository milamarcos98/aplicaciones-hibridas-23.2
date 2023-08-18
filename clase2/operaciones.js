// const suma = (num1, num2) => {
//     return num1 + num2;
// }

// const resta = (num1, num2) =>{
//     return num1 - num2;
// }

// const multiplicacion = (num1, num2) => {
//     return num1 * num2;
// }

// console.log(module);

// common js

// module.exports = {suma, resta, multiplicacion};

// exports = {suma, resta, multiplicacion};

// module.exports = exports = {}

// console.log(module.exports, exports, module.exports === exports)
// module.exports = {suma, resta, multiplicacion};
// console.log(module.exports, exports, module.exports === exports)

// console.log(module.exports, exports, module.exports === exports)
// exports = {suma, resta, multiplicacion};
// console.log(module.exports, exports, module.exports === exports)

// exports.suma = suma;





// ecma script modules

// export const suma = (num1, num2) => {
//     return num1 + num2;
// }

// export const resta = (num1, num2) =>{
//     return num1 - num2;
// }

// export const multiplicacion = (num1, num2) => {
//     return num1 * num2;
// }

const suma = (num1, num2) => {
    return num1 + num2;
}

const resta = (num1, num2) =>{
    return num1 - num2;
}

const multiplicacion = (num1, num2) => {
    return num1 * num2;
}

export {suma, resta, multiplicacion};


export default resta;