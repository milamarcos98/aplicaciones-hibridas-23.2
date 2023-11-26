import React, { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"

function App() {
  // guardamos la imagen del form
  const [image, setImage] = useState(null);
  // guardamos las imagenes de la db
  const [allImages, setAllImages] = useState([]);

  // variables de entorno
  let env = import.meta.env;

  useEffect(() => {
    getImages();
  }, []);

  const handleImageUpload = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);

    // enviamos la imagen del input al be
    await axios.post(
      "http://localhost:3000/images",
      formData,
      {
        // definimos los headers para envio de archivos
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
  };

  const handleChange = (e) => {
    // obtenemos la imagen del input
    setImage(e.target.files[0]);
  };

  const getImages = async () => {
    // obtenemos las imagenes de la db
    const result = await axios.get("http://localhost:3000/images");
    setAllImages(result.data.data);
  };

  return (
    <>
      <form onSubmit={handleImageUpload}>
        <input type="file" accept="image/*" onChange={handleChange}></input>
        <button type="submit">Submit</button>
      </form>
      {allImages.length > 0
        ? allImages.map((data) => {
          return (
            <img
              src={`${env.VITE_URL_BE}/images/${data.image}`}
              height={100}
              width={100}
            />
          );
        })
        : <p>No hay imagenes para mostrar.</p>
      }
    </>
  )
}

export default App
