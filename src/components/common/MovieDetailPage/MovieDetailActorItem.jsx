// MovieDetailActorItem.jsx
import { Link } from 'react-router-dom';
import "./MovieDetailActorItem.css";

const MovieDetailActorItem = ({cast,genre}) => {

    return (
        <div id="MovieDetailActorItem">
            <Link to={`/actordetail/${cast.id}`}>
                <img className='detail-actor-img' src={`https://image.tmdb.org/t/p/w185${cast.profile_path}`} alt="배우사진" />
                <p className='detail-actor-name'>{cast.name}</p>
                <p className='detail-actor-job'>{genre.id === 16 ? '성우' : '배우'}</p>
            </Link>
        </div>
    );
};
export default MovieDetailActorItem;
