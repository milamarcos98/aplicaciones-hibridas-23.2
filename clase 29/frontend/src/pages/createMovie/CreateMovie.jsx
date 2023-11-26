import axios from "axios";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const CreateMovie = () => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [cast, setCast] = useState([]);
  const [genres, setGenres] = useState([]);
  const [extract, setExtract] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSaveMovie = (e) => {
    e.preventDefault();
    const data = {
      title,
      year,
      cast,
      genres,
      extract,
    };
    setLoading(true)
    axios
    .post('http://localhost:3000/movies', data)
    .then((res) => {
        console.log(res)
        navigate(`/details/${res.data._id}`)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
        setLoading(false)
      });
  };
  return (
    <div>
      <h1>Create Movie</h1>
      <form>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Year</label>
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <div>
          <label>Cast</label>
          <input
            type="text"
            value={cast}
            onChange={(e) => setCast(e.target.value.split(","))}
          />
        </div>
        <div>
          <label>Genre</label>
          <input
            type="text"
            value={genres}
            onChange={(e) => setGenres(e.target.value.split(","))}
          />
        </div>
        <div>
          <label>Extract</label>
          <textarea
            value={extract}
            onChange={(e) => setExtract(e.target.value)}
          />
        </div>
        <button onClick={handleSaveMovie}>Save</button>
      </form>
    </div>
  );
};

export { CreateMovie };
