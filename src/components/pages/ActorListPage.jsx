import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import baseApi from "../../../public/data/api/api";
const ActorListPage = () => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetchdata();
    console.log(actors);
  }, []);

  const fetchdata = async () => {
    try {
      const respones = await baseApi.get(`/movie/819/credits`);
      console.log(respones);
      const data = respones.data.results;

      console.log(data);
      setActors(data);
    } catch (e) {
      console.error("데이터 로딩 실패 : ", e);
    }
  };
  return <div id="ActorListPage"></div>;
};

export default ActorListPage;
