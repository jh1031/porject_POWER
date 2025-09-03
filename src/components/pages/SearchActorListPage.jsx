// ActorListPage.jsx

import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import baseApi from "../../../public/data/api/api";
import "./SearchActorListPage.css";
const SearchActorListPage = () => {
  const [searchParams] = useSearchParams();
  const person = (searchParams.get("person") || "").trim();

  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetchdata();
  }, [person]);

  const fetchdata = async () => {
    try {
      const respones = await baseApi.get(
        `/search/person?query=${person}&include_adult=false&language=ko-KR&page=1`
      );
      const data = respones.data.results;
      console.log(respones.data);
      setActors(data);
    } catch (e) {
      console.error("데이터 로딩 실패 : ", e);
    }
  };
  console.log(actors);
  return (
    <div id="ActorListPage">
      <ul>
        {actors.map((actor, idx) => (
          <li key={idx}>
            <img
              src={`http://image.tmdb.org/t/p/w342/${actor.profile_path}`}
              alt={actor.name}
            />
            <div>
              <p>{actor.name}</p>
              <p>{actor.known_for_department}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchActorListPage;
