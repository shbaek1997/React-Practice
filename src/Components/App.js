import { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./Movie";

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
        <div>
          {movies.map((el) => {
            const { title, id, summary, rating, genres, medium_cover_image } =
              el;
            return (
              <Movie
                title={title}
                divId={id}
                summary={summary}
                rating={rating}
                genres={genres}
                CoverImage={medium_cover_image}
              ></Movie>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
