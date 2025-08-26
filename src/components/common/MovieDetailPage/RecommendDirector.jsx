import MovieItem from '../MovieListPage/MovieItem';

const director = {
    name: "백승원"
}
const RecommendDirector = () => {
    return (
        <div id="RecommendDirector">
            <MovieItem />
            <div className="recommend-more">
                <img src="../data/img/plus_128px" />
                <p>{director.name}감독 작품 더보기</p>
            </div>
        </div>
    );
};
export default RecommendDirector;
