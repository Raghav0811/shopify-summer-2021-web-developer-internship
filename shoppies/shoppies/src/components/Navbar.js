import React from "react";

const Navbar = (props) => {
  const handleClick = () => {
    console.log("HERE!");
  };

  return (
    <div className="nb-container">
      <img
        className="navbar-logo"
        src="./shoppies-logo-2.png"
        alt="shoppies-logo"
        onClick
        {...handleClick()}
      />
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
            onClick={props.getMovies}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
