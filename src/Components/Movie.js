import { Link } from "react-router-dom";

function Movie({ title, divId, summary, rating, genres, CoverImage }) {
  return (
    <div>
      <img alt={title} src={CoverImage}></img>
      <h2>
        <Link to={`movies/${divId}`}>{title}</Link>
      </h2>
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
}

export default Movie;
