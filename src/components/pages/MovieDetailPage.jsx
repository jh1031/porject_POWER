import { useState } from "react";
import { RecommendDirector, RecommendGenre, ReviewList } from "../common/MovieDetailPage";


const MovieDetailPage = () => {
    const [sorted, setSorted] = useState("like");
    return(
        <div id="MovieDetailPage">
            <div className="movie-info">

            </div>
            <select>
                <option value="like">인기순</option>
                <option value="new">최신순</option> 
                <option value="rating">평점순</option>
            </select>
            <ReviewList/>
            <h2>같은 장르 추천 영화</h2>
            <RecommendGenre/>
            <h2>같은 감독의 다른 영화</h2>
            <RecommendDirector/>
        </div>
    )
}

export default MovieDetailPage;