// SearchActorList.jsx

import SearchActorItem from "./SearchActorItem";
import "./SearchActorList.css";
const SearchActorList = ({ actors }) => {
  return (
    <div id="SearchActorList">
      <ul className="search-list">
        {actors.map((actor) => (
          <SearchActorItem key={actor.id} actor={actor} />
        ))}
      </ul>
    </div>
  );
};

export default SearchActorList;
