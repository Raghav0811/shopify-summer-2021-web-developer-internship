import React from "react";

const MovieCard = (props) => {
  const setButtonText = (movie) => {
    return movie.nominated ? "Remove" : "Nominate";
  };

  const setButtonClassName = (movie) => {
    return movie.nominated ? "remove-nomination-button" : "nomination-button";
  };

  const setDisabled = (movie) => {
    return !movie.nominated && props.nominationLength >= 5;
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
      <button
        disabled={setDisabled(props.movie)}
        className={setButtonClassName(props.movie)}
        onClick={() => props.toggleNomination(props.movie)}
      >
        {setButtonText(props.movie)}
      </button>
    </div>
  );
};

export default MovieCard;
