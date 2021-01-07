import React from "react";

const Navbar = (props) => {
  return (
    <div className="nb-container">
      <div className="search-bar">
        <form className="search-form" onSubmit={props.fetchMovies}>
          <input
            type="search"
            placeholder="Search movies"
            name="search"
            value={props.query}
            onChange={props.setMovieQuery}
          />
        </form>
      </div>
    </div>
  );
};

export default Navbar;
