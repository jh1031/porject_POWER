import ActorMoiveItem from "./ActorMovieItem";
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
