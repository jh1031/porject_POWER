import { Link } from 'react-router-dom';
import "./MovieDetailDirectorItem.css";

const MovieDetailDirectorItem = ({director}) => {
    
    return (
        <div id="MovieDetailDirectorItem">
            <Link to={`/actordetail/${director.id}`}>
                <img src={`https://image.tmdb.org/t/p/w45${director.profile_path}`} alt="감독사진" />
                <p>감독</p>
                <p>{director.name}</p>
            </Link>
        </div>
    );
};
export default MovieDetailDirectorItem;
