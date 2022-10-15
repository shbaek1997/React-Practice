import { Link } from "react-router-dom";
import { Button } from "./Button";

function MovieDetail({
  coverImage,
  rating,
  runtime,
  title,
  description,
  genres,
}) {
  return (
    <div>
      <img alt={title} src={coverImage}></img>
      <h1>{title}</h1>
      <p>{description}</p>
      <div>{rating}</div>
      <div>{runtime}</div>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
      <Link to="/">
        <Button text="Go back" />
      </Link>
    </div>
  );
}

export default MovieDetail;
