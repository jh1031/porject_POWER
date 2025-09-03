import { Link } from 'react-router-dom';
import "./MovieDetailActorItem.css";

const MovieDetailActorItem = ({cast}) => {
    return (
        <div id="MovieDetailActorItem">
            <Link to={`/actordetail/${cast.id}`}>
                <img src={`https://image.tmdb.org/t/p/w45${cast.profile_path}`} alt="배우사진" />
                <p>배우/성우</p>
                <p>{cast.name}</p>
            </Link>
        </div>
    );
};
export default MovieDetailActorItem;
