// SearchMovieItem.jsx

import { Link } from "react-router-dom";
import "./SearchMovieItem.css";
const SearchMovieItem = ({ movie }) => {
  return (
    <li className="search-movie-item">
      <Link to={`/moviedetail/${movie.id}`}>
        {movie.poster_path ? (
          <img
            src={`http://image.tmdb.org/t/p/w342/${movie.poster_path}`}
            alt={movie.title}
          />
        ) : (
          <img src="/../../public/img/img_loading.png" alt={movie.title} />
        )}
        <div className="movie-info">
          <p className="movie-title">{movie.title}</p>
        </div>
      </Link>
    </li>
  );
};
export default SearchMovieItem;
