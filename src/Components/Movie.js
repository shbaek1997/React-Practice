function Movie({ title, divId, summary, rating, genres, CoverImage }) {
  return (
    <div key={divId}>
      <img alt={title} src={CoverImage}></img>
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
}

export default Movie;
