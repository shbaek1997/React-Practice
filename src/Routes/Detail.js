import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MovieDetail from "../Components/MovieDetail";
function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const fetchMovie = async () => {
    try {
      const response = await axios.get(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      );
      const movieFound = response.data.data.movie;
      setMovie((current) => {
        return { ...current, ...movieFound };
      });
      setIsLoading(false);
    } catch (error) {
      console.log("error occured");
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMovie();
  }, []);
  const {
    large_cover_image,
    rating,
    runtime,
    title_long,
    description_full,
    genres,
  } = movie;
  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <MovieDetail
          coverImage={large_cover_image}
          rating={rating}
          runtime={runtime}
          title={title_long}
          description={description_full}
          genres={genres}
        />
      )}
    </div>
  );
}

export default Detail;
