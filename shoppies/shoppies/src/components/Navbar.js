import React from "react";

const Navbar = (props) => {
  return (
    <div className="nb-container">
      <div className="search-bar">
        <form className="search-form" onSubmit={props.getMovies}>
          <input
            type="search"
            placeholder="Search movies"
            name="search"
            value={props.query}
            onChange={props.setMovieQuery}
          />
          <button
            className="button-search"
            type="submit"
            disabled={!props.query.length}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
