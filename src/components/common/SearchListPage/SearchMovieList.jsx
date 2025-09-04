// SearchMovieList.jsx

import SearchMovieItem from "./SearchMovieItem";
const SearchMovieList = ({ searchMovies }) => {
  return (
    <div id="SearchMovieList">
      <ul className="search-movie-list">
        {searchMovies.map((movie) => (
          <SearchMovieItem movie={movie} />
        ))}
      </ul>
    </div>
  );
};
export default SearchMovieList;
