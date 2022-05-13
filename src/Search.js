import React from "react";

const Search = ({ query, searchMovies }) => {
  return (
    <div>
      <input
        className="input-search-bar"
        value={query}
        type="text"
        name="moviesearch"
        id="srch"
        placeholder="search movies"
        onChange={searchMovies}
      />
      <button className="clear" onClick={()=>window.location.reload()}>X</button>
    </div>
  );
};

export default Search;
