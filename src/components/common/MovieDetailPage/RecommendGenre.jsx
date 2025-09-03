// RecommendGenre.jsx
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import MovieItem from '../MovieListPage/MovieItem';
import { useEffect, useState } from 'react';
import baseApi from '../../../../public/data/api/api';
import './RecommendGenre.css';

const RecommendGenre = ({ movie,handleClickGenre }) => {
    const recMovie = movie.slice(0, 4);
    return (
        <div id="RecommendGenre">
            <ul>
                {recMovie.map((item, idx) => (
                    <MovieItem key={idx} movie={item} />
                ))}
            </ul>
            <button className="recommend-more" onClick={handleClickGenre}>
                <img
                    src="../../../public/icon/plus_128px.png"
                    alt="해당 장르 더보기"
                />
                <p>{movie.genre}장르 더보기</p>
            </button>
        </div>
    );
};
export default RecommendGenre;
