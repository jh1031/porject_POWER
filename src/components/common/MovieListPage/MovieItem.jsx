import { Link } from "react-router-dom";

const MovieItem = ({movie}) => {
    return(
        <div className="movie-item">
            <Link to={`/moviedetail/${movie.id}`}>
                <img className="img" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
                <p className="title">{movie.title}</p>
            </Link>
        </div>
    )
}
export default MovieItem;
