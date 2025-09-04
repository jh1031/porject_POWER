// SearchMovieItem.jsx

import { Link } from "react-router-dom";
const SearchMovieItem = ({ movie }) => {
  return (
    <li className="search-movie-item">
      <Link>
        <img
          src={`http://image.tmdb.org/t/p/w342/${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-info">
          <p className="movie-title">{movie.title}</p>
        </div>
      </Link>
    </li>
  );
};
export default SearchMovieItem;
