import axios from "axios";

export const getGifs = async (category) =>{
    
    const url = `https://api.giphy.com/v1/gifs/search?api_key=gn0sGB2hAGGGMrp61CZjLf4T88oZqkgL&q=${category}&limit=20&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
  
    // const resp = await fetch(url);
    // const {data} = await resp.json();
    // const gifs = data.map( gif => ({
    //   id: gif.id,
    //   title: gif.title,
    //   url: gif.images.original.url
    // }))

    return axios.get(url)
    .then(res => {
        // console.log(res)
        return res.data.data.map(gif => ({
            id: gif.id,
            title: gif.title,
            url: gif.images.original.url
        }))
    })

}