import { Link } from "react-router-dom";

const MovieItem = () => {
    return(
        <div className="movie-item">
            {/* <img src={moviedata.img} alt="영화포스터"/> */}
            <Link to="/moviedetail/:id">
                <img className="img" src="../img/4018_2_1714908657.jpg" alt="예시"/>
                <p className="title">title</p>
            </Link>
        </div>
    )
}
export default MovieItem;
