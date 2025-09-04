// MovieDetailDirectorItem.jsx
import { Link } from 'react-router-dom';
import "./MovieDetailDirectorItem.css";

const MovieDetailDirectorItem = ({director}) => {
    
    return (
        <div id="MovieDetailDirectorItem">
            <Link to={`/actordetail/${director.id}`}>
                <img className='detail-director-img'
                src={`https://image.tmdb.org/t/p/w185${director.profile_path}`} alt="감독사진" />
                <p className='detail-director-name'>{director.name}</p>
                <p className='detail-director'>감독</p>
            </Link>
        </div>
    );
};
export default MovieDetailDirectorItem;
