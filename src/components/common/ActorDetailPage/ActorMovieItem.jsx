// ActorMovieItem.jsx

import { Link } from "react-router-dom";
import "./ActorMovieItem.css";
const ActorMoiveItem = ({ movie }) => {
  const movieDate = new Date(movie.release_date);
  const moveieYear = movieDate.getFullYear();
  return (
    <li className="actor-moive-item">
      <Link to={`/moviedetail/${movie.id}`}>
        <img
          className="movie-poster"
          src={`http://image.tmdb.org/t/p/w342/${movie.poster_path}`}
          alt={movie.title}
        />
        <p className="movie-title">{movie.title}</p>
        <p className="movie-date">{moveieYear}</p>
      </Link>
    </li>
  );
};

export default ActorMoiveItem;
