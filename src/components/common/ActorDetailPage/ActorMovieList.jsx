import ActorMoiveItem from "./ActorMovieItem";
import "./ActorMovieList.css";
const ActorMovieList = ({ sortMovies }) => {
  return (
    <div id="ActorMovieList">
      <ul>
        {sortMovies.map((movie) => (
          <ActorMoiveItem key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default ActorMovieList;
