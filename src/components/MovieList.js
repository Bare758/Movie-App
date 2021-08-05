import React from "react";

const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;
  const movieLink = "https://imdb.com/title/";
  return (
    <div>
      {props.movies.map((movie, index) => (
        <div className="image-container d-flex justify-content-start m-3">
          <img src={movie.Poster} alt="movie"></img>
          <div
            onClick={() => props.handleFavouritesClick(movie)}
            className="overlay d-flex align-items-center justify-content-center"
          >
            <FavouriteComponent />
          </div>
          <p id="Title">Title: {movie.Title} </p>
          <br></br>
          <p id="ReleasedYear">Released year: {movie.Year} </p>
          <br></br>
          <p id="ReleaseDate">Release Date{2021 - movie.Year} years ago </p>
          <br></br>
          <p id="Type">Type: {movie.Type}</p>

          <a href={movieLink + movie.imdbID + "/"} target={"_blank"}>
            Link to IMDB
          </a>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
