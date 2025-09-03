import MovieItem from '../MovieListPage/MovieItem';


const RecommendDirector = ({movie,director}) => {
    return (
        <div id="RecommendDirector">
            <MovieItem movie={movie}/>
            <div className="recommend-more">
                <button><img src="../../../public/icon/plus_128px.png" alt='해당 감독 더보기'/>
                {director.map(item => <p>{item.name}감독 작품 더보기</p>)}</button>
            </div>
        </div>
    );
};
export default RecommendDirector;
