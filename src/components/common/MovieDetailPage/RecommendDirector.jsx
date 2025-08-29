import MovieItem from '../MovieListPage/MovieItem';

const director = {
    name: "백승원"
}
const RecommendDirector = () => {
    return (
        <div id="RecommendDirector">
            <MovieItem />
            <div className="recommend-more">
                <button><img src="../public/data/img/plus_128px" alt='해당 감독 더보기'/>
                <p>{director.name}감독 작품 더보기</p></button>
            </div>
        </div>
    );
};
export default RecommendDirector;
