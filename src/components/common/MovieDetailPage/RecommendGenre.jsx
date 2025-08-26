import MovieItem from "../MovieListPage/MovieItem";

const movie = {
    genre: "액션"
};
const RecommendGenre = () => {
    return(
        <div id="RecommendGenre">
            <MovieItem/>
            <div className="recommend-more">
                <img src="../data/img/plus_128px" />
                <p>{movie.genre}장르 더보기</p>
            </div>
        </div>
    )
}
export default RecommendGenre;