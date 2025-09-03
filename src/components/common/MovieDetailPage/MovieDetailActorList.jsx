import MovieDetailActorItem from "./MovieDetailActorItem";
import MovieDetailDirectorItem from "./MovieDetailDirectorItem";
import "./MovieDetailActorList.css";

const MovieDetailActorList = ({cast,director}) => {
    return(
        <div id="MovieDetailActorList">
            {director.map(item=> <MovieDetailDirectorItem key={director.id} director={item}/>)}
            {cast.map(item => <MovieDetailActorItem key={item.id} cast={item}/>)}
        </div>
    )
}
export default MovieDetailActorList;