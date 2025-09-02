import "./ActorInfo.css";
const ActorInfo = ({ actor }) => {
  return (
    <div id="ActorInfo">
      <div className="actorProfile">
        <img
          src={`http://image.tmdb.org/t/p/w185/${actor.profile_path}`}
          alt={actor.name}
        />
        <div className="actorInfo">
          <p className="actorName">{actor.name}</p>
          <p className="job">{actor.known_for_department}</p>
        </div>
      </div>
    </div>
  );
};

export default ActorInfo;
