import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";
function Home() {
  const [movieData, setMovieData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then((res) => res.json())
      .then((data) => setMovieData(data));
  }, []);

  return (
    <>
      <header>{<NavBar />}</header>

      <h1>Home Page</h1>
      <main>
        {movieData.map((movieItem) => {
          return (
            <MovieCard
              key={movieItem.id}
              title={movieItem.title}
              id={movieItem.id}
            />
          );
        })}
      </main>
    </>
  );
}

export default Home;