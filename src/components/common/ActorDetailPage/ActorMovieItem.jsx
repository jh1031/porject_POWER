const ActorMoiveItem = ({ movie }) => {
  return (
    <li id="ActorMoiveItem">
      <img
        src={`http://image.tmdb.org/t/p/w342/${movie.poster_path}`}
        alt={movie.title}
      />
      <p>{movie.title}</p>
    </li>
  );
};

export default ActorMoiveItem;
