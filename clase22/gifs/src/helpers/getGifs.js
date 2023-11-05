import axios from "axios";

export const getGifs = async (endpoint,  info) =>{
console.log(endpoint)
console.log(info)
    let url;

    switch(endpoint){
        case "search":
            url = `https://api.giphy.com/v1/gifs/${endpoint}?api_key=gn0sGB2hAGGGMrp61CZjLf4T88oZqkgL&q=${info}&limit=20&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
        break;
        case "random":
            url = `https://api.giphy.com/v1/gifs/${endpoint}?api_key=gn0sGB2hAGGGMrp61CZjLf4T88oZqkgL&tag=&rating=g`;
        break;
        case "autocomplete":
            url = `https://api.giphy.com/v1/tags/related/${info}?api_key=gn0sGB2hAGGGMrp61CZjLf4T88oZqkgL`;
        break;
        default:
            throw new Error("invalid endpoint!");
    }
  
    // const resp = await fetch(url);
    // const {data} = await resp.json();
    // const gifs = data.map( gif => ({
    //   id: gif.id,
    //   title: gif.title,
    //   url: gif.images.original.url
    // }))

    return axios.get(url)
    .then(res => {
        return res.data.data;
        // console.log(res)
        // return res.data.data.map(gif => ({
            // id: gif.id,
            // title: gif.title,
            // url: gif.images.original.url
        // }))
    })

}