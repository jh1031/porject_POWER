// ActorListPage.jsx

import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import baseApi from "../../../public/data/api/api";
import { SearchActorList } from "../common/SearchListPage";
import "./SearchActorListPage.css";
const SearchActorListPage = () => {
  const [searchParams] = useSearchParams();
  const person = (searchParams.get("keyword") || "").trim();

  const [actors, setActors] = useState([]);
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    fetchdata();
  }, [person]);

  const fetchdata = async () => {
    try {
      const respones = await baseApi.get(
        `/search/person?query=${person}&include_adult=false&language=ko-KR&page=${current}`
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
      <SearchActorList actors={actors} />
    </div>
  );
};

export default SearchActorListPage;
