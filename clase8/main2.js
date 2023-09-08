// const data = [{
//         title: 'Title 1',
//         year: '2023',
//         author: 'Juan Perez'
//     },
//     {
//         title: 'Title 2',
//         year: '2023',
//         author: 'Juan Perez'
//     },
//     {
//         title: 'Title 3',
//         year: '2023',
//         author: 'Juan Perez'
//     }]

// function getData(){
//     setTimeout(() => {
//         return data;
//     }, 2000);
// }

// console.log(getData()) //undefined

// PROMESAS

// function getData(){
//     return new Promise((resolve, reject)=>{
//         if(data.length === 0){
//             reject(new Error('Data esta vacio'))
//         }
//                 resolve(data);
//     })
// }

// getData()
//     .then((respuesta) => console.log(respuesta))
    // .catch((error) => console.log(error.message))


// async await

// async function fetchData(){
//     console.log(await getData())
// }

// fetchData()

async function getData(){
    const data = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=50");
    const json = await data.json();
    console.log(json)
}

getData()

// EJEMPLO FETCH

    // const api = "https://type.fit/api/quotes";

    // function getData(url){
    //     return fetch(url)
    //             .then((respuesta) => {
    //                 console.log(respuesta)
    //                 // https://developer.mozilla.org/es/docs/Web/API/Response/ok
    //                 if(!respuesta.ok){
    //                     throw new Error(`HTTP Error! Status: ${respuesta.status}`)
    //                 }
    //                 return respuesta.json();
    //             })
    // }
    
    
    // getData(api)
    // .then((resultado) => {
    //     console.log("Data: ", resultado)
    // })
    // .catch((error) => {
    //     console.log("Error: ", error)
    // })
    