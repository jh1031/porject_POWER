
import { Link } from "react-router-dom";
import { MovieListTop3, SortedMovieList } from "../common/MovieListPage";
import { useState } from "react";

const movie = {
    genre: "액션"
};
const MovieListPage = () => {
    const [movieSort, setMovieSort] = useState("like");
    return(
        <div id="MovieListPage">
            <div className="movielist-top">
                <h2>{movie.genre}영화</h2>
                <div className="nav">
                    <p>장르</p>
                    <p>  &gt;  </p>
                    <p>{movie.genre}</p>
                </div>
            </div>
            <MovieListTop3/>
            <select name="sort" id="sort">
                <option value="like">인기순</option>
                <option value="new">최신순</option>
            </select>
            <SortedMovieList/>
        </div>
    )
}

export default MovieListPage;