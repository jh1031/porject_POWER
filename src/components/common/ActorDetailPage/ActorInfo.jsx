import "./ActorInfo.css";
const ActorInfo = ({ actor, tDept, filterbio }) => {
  return (
    <div id="ActorInfo">
      <div className="actorProfile">
        <img
          src={`http://image.tmdb.org/t/p/w185/${actor.profile_path}`}
          alt={actor.name}
        />
        <div className="actorInfo">
          <div className="actor-name-job">
            <p className="actorName">{actor.name}</p>
            <p className="job">{tDept(actor.known_for_department)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActorInfo;
