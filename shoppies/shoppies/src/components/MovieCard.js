import React from "react";

const MovieCard = (props) => {
  const setButtonText = (movie) => {
    return movie.nominated ? "Remove" : "Nominate";
  };

  return (
    <div className="movie-card">
      <div className="movie-img-container">
        <img
          src={props.movie.Poster}
          alt={props.movie.Title}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "";
          }}
        />
      </div>
      <p className="movie-title">{props.movie.Title}</p>
      <p>{props.movie.Year}</p>
      <button>{setButtonText(props.movie)}</button>
    </div>
  );
};

export default MovieCard;
