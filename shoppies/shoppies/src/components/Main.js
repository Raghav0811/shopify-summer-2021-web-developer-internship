import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Nominations from "./Nominations";
import SearchResults from "./SearchResults";
import axios from "axios";

const Main = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const [nominatedMovies, setNominatedMovies] = useState([]);
  const [headerText, setHeaderText] = useState("Latest Releases");

  useEffect(() => {
    let storedNominations = localStorage.getItem("Nominations");

    if (storedNominations) {
      setNominatedMovies(JSON.parse(storedNominations));
    }
    getLatestMovies();
  }, []);

  const getLatestMovies = async () => {
    const response = await axios(
      `http://www.omdbapi.com/?s='the'&y=2020&apikey=e695e9b0`
    );

    setResults(response.data.Search);
  };

  const isAlreadyNominated = (movie) => {
    let isNominated = false;
    nominatedMovies.forEach((element) => {
      if (element.imdbID === movie.imdbID) {
        isNominated = true;
        return isNominated;
      }
    });
    return isNominated;
  };

  const getMovies = async (e) => {
    e.preventDefault();
    const response = await axios(
      `http://www.omdbapi.com/?s=${query}&apikey=e695e9b0`
    );
    if (response.data.Error) {
      setError(response.data.Error);
      setHeaderText(response.data.Error);
    } else {
      setResults(
        response.data.Search.map((movie) => {
          return {
            ...movie,
            nominated: false,
          };
        })
      );
      setHeaderText(`Results for "${query}"`);
      setError("");
    }
  };

  const filterSearchResults = (results) => {
    if (results.length) {
      const filteredResults = results.filter((res) => {
        return !isAlreadyNominated(res);
      });
      return filteredResults;
    }
    return results;
  };

  const toggleNomination = (movie) => {
    movie.nominated = !movie.nominated;
    const updatedNominations = movie.nominated
      ? [...nominatedMovies, movie]
      : nominatedMovies.filter((element) => element !== movie);
    setNominatedMovies(updatedNominations);
    localStorage.setItem("nominations", JSON.stringify(updatedNominations));
  };

  const setMovieQuery = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="App">
      <Navbar
        query={query}
        getMovies={getMovies}
        setMovieQuery={setMovieQuery}
      />
      <div>
        <Nominations
          nominatedMovies={nominatedMovies}
          toggleNomination={toggleNomination}
          nominationLength={nominatedMovies.length}
        />
      </div>
      <div>
        <SearchResults
          headerText={headerText}
          toggleNomination={toggleNomination}
          nominationLength={nominatedMovies.length}
          results={filterSearchResults(results)}
          error={error}
        />
      </div>
    </div>
  );
};

export default Main;
