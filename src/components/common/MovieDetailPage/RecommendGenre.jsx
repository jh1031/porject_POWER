import MovieItem from "../MovieListPage/MovieItem";

const movie = {
    genre: "액션"
};
const RecommendGenre = ({movie}) => {
    return(
        <div id="RecommendGenre">
            <MovieItem movie={movie}/>
            <div className="recommend-more">
                <button><img src=".../public/data/img/plus_128px" alt="해당 장르 더보기"/>
                <p>{movie.genre}장르 더보기</p></button>
            </div>
        </div>
    )
}
export default RecommendGenre;