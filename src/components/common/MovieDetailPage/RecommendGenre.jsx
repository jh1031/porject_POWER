// RecommendGenre.jsx
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import MovieItem from '../MovieListPage/MovieItem';
import { useEffect, useState } from 'react';
import baseApi from '../../../../public/data/api/api';
import './RecommendGenre.css';

const RecommendGenre = ({ movie, handleClickGenre }) => {
    console.log(movie)
    const recMovie = movie.slice(0, 4);
    return (
        <div id="RecommendGenre">
            <ul>
                {recMovie.map((item, idx) => (
                    <MovieItem key={idx} movie={item} />
                ))}
            </ul>
            <div className="recommend-more">
                <button onClick={handleClickGenre}>
                    <img src="/icon/plus_128px.png" alt="해당 장르 더보기" />
                    <p>같은 장르 영화 더보기</p>
                </button>
            </div>
        </div>
    );
};
export default RecommendGenre;
