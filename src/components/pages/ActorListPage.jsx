import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import baseApi from "../../../public/data/api/api";
const ActorListPage = () => {
  const [searchParams] = useSearchParams();
  const person = (searchParams.get("person") || "").trim();

  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetchdata();
  }, [person]);

  const fetchdata = async () => {
    try {
      for (let i = 1; i <= 500; i++) {
        const respones = await baseApi.get(
          `/person/popular?language=ko-KR&page=${i}`
        );
        const data = respones.data.results;
        console.log(data);
        setActors((prev) => [...prev, ...data]);
      }
    } catch (e) {
      console.error("데이터 로딩 실패 : ", e);
    }
  };

  const searchActor = actors.filter((item) => item.name.includes(person));

  return (
    <div id="ActorListPage">
      <ul>
        {searchActor.map((actor, idx) => (
          <li key={idx}>
            <img
              src={`http://image.tmdb.org/t/p/w185/${actor.profile_path}`}
              alt={actor.name}
            />
            <p>{actor.name}</p>
            <p>{actor.known_for_department}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActorListPage;
