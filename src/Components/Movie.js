import { Link } from "react-router-dom";
import styled from "styled-components";

function Movie({
  title,
  divId,
  summary,
  rating,
  genres,
  CoverImage,
  runtime,
  year,
}) {
  const genresString = genres.join(", ");
  return (
    <StyledCard>
      <StyledUp>
        <StyledImage alt={title} src={CoverImage}></StyledImage>

        <StyledRight>
          <h1>
            <StyledLink to={`movies/${divId}`}>{title}</StyledLink>
          </h1>
          <div>Year: {year}</div>
          <div>Runtime: {runtime === 0 ? 60 : runtime}min</div>
          <div>Rating: {rating}</div>
          <div>Genres: {genresString}</div>
        </StyledRight>
      </StyledUp>

      <div>{summary ? summary : "No summary available"}</div>
    </StyledCard>
  );
}
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    color: blue;
  }
`;
const StyledImage = styled.img`
  object-fit: cover;
  height: 200px;
`;
const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  background: rgb(225, 210, 182);
  box-shadow: 10px 10px 30px grey;
  margin: 30px;
  padding: 30px;
  color: black;
  border-radius: 15px;
  width: 80%;
  font-family: Impact, Charcoal, sans-serif;
`;
const StyledUp = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;
const StyledRight = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  justify-content: space-between;
`;
export default Movie;
