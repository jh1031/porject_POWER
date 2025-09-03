// ActorListPage.jsx

import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import baseApi from "../../../public/data/api/api";
import { SearchActorList } from "../common/SearchListPage";
import "./SearchActorListPage.css";
const SearchActorListPage = () => {
  const [searchParams] = useSearchParams();
  const keyword = (searchParams.get("keyword") || "").trim();

  const [loading, setLoading] = useState(false);
  const [actors, setActors] = useState([]);
  const [current, setCurrent] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    setCurrent(1);
  }, [keyword]);

  useEffect(() => {
    fetchData();
  }, [keyword, current]);

  const fetchData = async () => {
    try {
      if (!keyword) {
        setActors([]);
        setTotalPage(0);
        return;
      }
      setLoading(true);

      const respones = await baseApi.get(
        `/search/person?query=${keyword}&include_adult=false&language=ko-KR&page=${current}`
      );
      const data = respones.data.results;
      const totalPages = respones.data.total_pages;
      setActors(data);
      setTotalPage(totalPages);
    } catch (e) {
      console.error("데이터 로딩 실패 : ", e);
    } finally {
      setLoading(false);
    }
  };

  const handleClickPage = (e) => setCurrent(e.target.value);

  if (loading) return <div>불러오는 중…</div>;
  return (
    <div id="ActorListPage">
      <SearchActorList actors={actors} />
      <div className="pagination">
        {current > 1 && (
          <button onClick={() => handleClickPage(current - 1)}>이전</button>
        )}

        {Array.from({ length: totalPage }, (_, i) => i + 1).map((pageNum) => (
          <button
            key={pageNum}
            onClick={() => handleClickPage(pageNum)}
            style={{
              fontWeight: pageNum === current ? "bold" : "normal",
            }}
          >
            {pageNum}
          </button>
        ))}

        {current < totalPage && (
          <button onClick={() => handleClickPage(current + 1)}>다음</button>
        )}
      </div>
    </div>
  );
};

export default SearchActorListPage;
