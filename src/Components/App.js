import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      );
      const { data } = response;
      const { movies } = data.data;
      console.log(movies);
      setIsLoading(false);
      setMovies(movies);
    } catch (error) {
      console.log("error occured");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <ul>
          {movies.map((el) => {
            const { title, id, summary, rating, genres, medium_cover_image } =
              el;
            return (
              <div key={id}>
                <img alt={title} src={medium_cover_image}></img>
                <h2>{title}</h2>
                <p>{summary ? summary : "No summary available"}</p>
                <div>{rating}</div>
                <ul>
                  {genres.map((genre) => (
                    <li key={genre}>{genre}</li>
                  ))}
                </ul>
                <br />
              </div>
            );
          })}
        </ul>
      )}
      ;
    </div>
  );
}

export default App;
