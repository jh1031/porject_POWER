import { useEffect, useState } from "react";
import { MovieDetailActorList, RecommendDirector, RecommendGenre, ReviewList } from "../common/MovieDetailPage";


const MovieDetailPage = () => {
    const [sorted, setSorted] = useState("like");
    const [isReady, setIsReady] = useState(false);

    return(
        <div id="MovieDetailPage">
            <div className="movie-info">
                <div className="md-left">
                    <img src="../img/4018_2_1714908657.jpg" alt="포스터"/>
                    <div className="left-info">
                        <div className="rating">
                            <span>평점</span>
                            <strong>9.5</strong>
                        </div>
                        <div className="left-btn">
                            <button>보고싶어요</button>
                            <button>리뷰작성</button>
                        </div>
                    </div>
                </div>
                <div className="md-right">
                    <h1>더 퍼스트 슬램덩크</h1>
                    <MovieDetailActorList/>
                    <div className="right-info">
                        <div>
                            <h4>장르</h4>
                            <span>스포츠드라마</span>
                        </div>
                        <div>
                            <h4>개봉일</h4>
                            <span>2023.12.20 </span>
                        </div>
                        <div>
                            <h4>줄거리</h4>
                            <span>ㅈ ㅜ ㄹ ㄱ ㅓ ㄹ ㅣ</span>
                        </div>
                    </div>
                </div>
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