import React from "react";
import EmptyMovieCard from "./EmptyMovieCard";
import MovieCard from "./MovieCard";

const Nominations = (props) => {
  const getMovieCards = () => {
    return props.nominatedMovies.map((movie) => {
      return (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          toggleNomination={props.toggleNomination}
          nominationLength={props.nominationLength}
        />
      );
    });
  };

  const getEmptyCards = () => {
    const emptyCardNumber = 5 - props.nominationLength;
    return Array(emptyCardNumber).fill(<EmptyMovieCard />);
  };

  return (
    <div className="nominated-section">
      <h2>Nominated Movies</h2>
      <div>
        {props.nominationLength === 5 && (
          <p className="limit-msg">5 nomination limit reached</p>
        )}
      </div>
      <div className="movie-list">
        {[...getMovieCards(), ...getEmptyCards()]}
      </div>
    </div>
  );
};

export default Nominations;
