import { useState, useEffect } from "react";
import axios from "axios";
import Movie from "../Components/Movie";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year"
      );
      const { data } = response;
      const { movies } = data.data;
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
            const {
              title,
              id,
              summary,
              rating,
              genres,
              medium_cover_image,
              runtime,
              year,
            } = el;
            return (
              <Movie
                key={id}
                title={title}
                divId={id}
                summary={summary}
                rating={rating}
                genres={genres}
                CoverImage={medium_cover_image}
                runtime={runtime}
                year={year}
              ></Movie>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Home;
