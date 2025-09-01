import { useEffect, useState } from 'react';
import {
    MovieDetailActorList,
    RecommendDirector,
    RecommendGenre,
    ReviewList,
} from '../common/MovieDetailPage';
import baseApi from '../../../public/data/api/api';
import { useParams } from 'react-router-dom';

const MovieDetailPage = () => {
    const [sorted, setSorted] = useState('star');
    const [isReady, setIsReady] = useState(false);
    const [movie, setMovie] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        fetchMovie();
    }, [id,sorted]);

    const fetchMovie = async () => {
        setIsReady(false);
        try {
            const res1 = await baseApi.get(`/movie/${id}?language=ko-KR`);
            const data = await res1.data;
            setMovie(data);
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
        <div id="MovieDetailPage">
            <div className="movie-info">
                <div className="md-left">
                    <img
                        className="img"
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                    />
                    <div className="left-info">
                        <div className="rating">
                            <span>평점</span>
                            <p>
                                {Array.from({
                                    length: parseInt(movie.vote_average / 2),
                                }).map((_, index) => (
                                    <span
                                        key={`filled-${index}`}
                                        className="filled-star"
                                    >
                                        ★
                                    </span>
                                ))}
                                {Array.from({
                                    length:
                                        5 - parseInt(movie.vote_average / 2),
                                }).map((_, index) => (
                                    <span
                                        key={`empty-${index}`}
                                        className="empty-star"
                                    >
                                        ☆
                                    </span>
                                ))}
                            </p>
                            <strong>{parseInt(movie.vote_average / 2)}</strong>
                        </div>
                        <div className="left-btn">
                            <button>보고싶어요</button>
                            <button>리뷰작성</button>
                        </div>
                    </div>
                </div>
                <div className="md-right">
                    <h1>{movie.title}</h1>
                    <MovieDetailActorList />
                    <div className="right-info">
                        <div>
                            <h4>장르</h4>
                            <span>{movie.genres[0].name}</span>
                        </div>
                        <div>
                            <h4>개봉일</h4>
                            <span>{movie.release_date}</span>
                        </div>
                        <div>
                            <h4>줄거리</h4>
                            <span>{movie.overview}</span>
                        </div>
                    </div>
                </div>
            </div>
            <select name="sort" id="sort" onChange={(e) => setSorted(e.target.value)} value={sorted}>
                <option value="like">인기순</option>
                <option value="createdDate">최신순</option>
                <option value="star">평점순</option>
            </select>
            <ReviewList />
            <h2>같은 장르 추천 영화</h2>
            <RecommendGenre movie={movie} />
            <h2>같은 감독의 다른 영화</h2>
            <RecommendDirector movie={movie} />
        </div>
    );
};

export default MovieDetailPage;
