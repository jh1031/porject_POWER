// MovieDetailActorList.jsx
import MovieDetailActorItem from './MovieDetailActorItem';
import MovieDetailDirectorItem from './MovieDetailDirectorItem';

import './MovieDetailActorList.css';


const MovieDetailActorList = ({ genre, cast, director }) => {
    const cutCast = cast.slice(0, 20);
    return (
        <div id="MovieDetailActorList">
                {director.map(item => (
                    
                        <MovieDetailDirectorItem key={director.id} director={item} />
                ))}
                {cutCast.map(item => (
                    
                        <MovieDetailActorItem key={item.id} genre={genre} cast={item} />
                ))}
        </div>
    );
};
export default MovieDetailActorList;

