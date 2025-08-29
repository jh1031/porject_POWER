import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { MovieListTop3, SortedMovieList } from '../common/MovieListPage';
import { useEffect, useState } from 'react';
import baseApi from '../../../public/data/api/api';

const movieGenre = [
    { id: 28, name: '액션' },
    { id: 12, name: '모험' },
    { id: 16, name: '애니메이션' },
    { id: 35, name: '코미디' },
    { id: 80, name: '범죄' },
    { id: 99, name: '다큐멘터리' },
    { id: 18, name: '드라마' },
    { id: 10751, name: '가족' },
    { id: 14, name: '판타지' },
    { id: 36, name: '역사' },
    { id: 27, name: '공포' },
    { id: 10402, name: '음악' },
    { id: 9648, name: '미스터리' },
    { id: 10749, name: '로맨스' },
    { id: 878, name: 'SF' },
    { id: 10770, name: 'TV 영화' },
    { id: 53, name: '스릴러' },
    { id: 10752, name: '전쟁' },
    { id: 37, name: '서부' },
];
const MovieListPage = () => {
    const nav = useNavigate();
    const [searchParams] = useSearchParams();
    const genre = searchParams.get('genre');
    const page = searchParams.get('page');
    const numGenre = Number(genre);
    const [movieSort, setMovieSort] = useState('like');
    const [isReady, setIsReady] = useState(false);
    const [movie, setMovie] = useState([]);
    const [pages, setPages] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const filteredGenreId = movieGenre.filter((gen) => gen.id === numGenre);

    useEffect(() => {
        fetchMovie();
    }, [pages, genre]);

    const fetchMovie = async () => {
        try {
            const res = await baseApi.get(
                `/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=vote_average.desc&with_genres=${genre}&vote_count.gte=200`
            );
            console.log(res);
            const data = await res.data.results;
            const total = res.data.total_pages;
            setMovie(data);
            setTotalPage(total);
        } catch (e) {
            console.error('데이터 로딩 실패 :', e);
        } finally {
            setIsReady(true);
        }
    };

    if (!isReady) {
        return <div>데이터 로딩 중 ...</div>;
    }
    return (
        <div id="MovieListPage">
            <div className="movielist-top">
                <h2>{filteredGenreId[0].name}영화</h2>

                <div className="nav">
                    <p>장르</p>
                    <p> &gt; </p>
                    <p>{filteredGenreId[0].name}</p>
                </div>
            </div>
            <MovieListTop3 movie={movie} />
            <select name="sort" id="sort">
                <option value="like">인기순</option>
                <option value="new">최신순</option>
            </select>
            <SortedMovieList movie={movie} />
            <div className="pagination">
                {pages > 1 && (
                    <button onClick={() => setPages(pages - 1)}>이전</button>
                )}
                {Array.from({ length: totalPage }, (_, i) => i + 1).map(
                    (pageNum) => (
                        <button
                            key={pageNum}
                            onClick={() => setPages(pageNum)}
                            style={{
                                fontWeight:
                                    pageNum === pages ? 'bold' : 'normal',
                            }}
                        >
                            {pageNum}
                        </button>
                    )
                )}
                {pages < totalPage && (
                    <button onClick={() => setPages(pages + 1)}>다음</button>
                )}
            </div>
        </div>
    );
};

export default MovieListPage;
