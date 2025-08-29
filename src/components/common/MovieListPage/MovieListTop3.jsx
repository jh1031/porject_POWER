import MovieItem from "./MovieItem";
const MovieListTop3 = ({movie}) => {
        const movieRanking = movie.slice(0,3); 
    return(
        <div id="MovieListTop3">
            {movieRanking.map((item,idx)=><div key={item.id} className="rank">
                <p >{idx+1}</p>
                <MovieItem movie={item}/>
                </div>)}
        </div>
    )
}
export default MovieListTop3;