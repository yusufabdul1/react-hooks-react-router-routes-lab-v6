import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      });
  }, [id]);
  if (!movie) {
    return <p>Loading data...</p>;
  }
  return (
    <>
      <main>
        <NavBar />
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {movie.genres &&
          movie.genres.map((genre, index) => {
            return <span key={index}>{genre} </span>;
          })}
      </main>
    </>
  );
}

export default Movie;