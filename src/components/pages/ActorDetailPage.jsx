import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import baseApi from "../../../public/data/api/api";
import { ActorInfo, ActorMovieList } from "../common/ActorDetailPage";
import "./ActorDetailPage.css";

const ActorDetailPage = () => {
  const { id } = useParams();
  const numId = Number(id);

  const [isLoding, setIsLoding] = useState(false);
  const [actor, setActor] = useState({});
  const [movies, setMovies] = useState([]);

  const [select, setSelect] = useState("best");
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    fahctData();
  }, [id]);

  const fahctData = async () => {
    try {
      const res = await baseApi.get(`/person/${numId}?language=ko-KR`);
      const data = res.data;
      console.log(data);
      setActor(data);

      const respones = await baseApi.get(`/person/${numId}/movie_credits`);
      const movieData = respones.data.cast;
      console.log(movieData);
      setMovies(movieData);
    } catch (e) {
      console.error("데이터 로딩 실패 : ", e);
    } finally {
      setIsLoding(true);
    }
  };

  const handleChangeSelect = (e) => {
    setSelect(e.target.value);
    setVisibleCount(4);
  };
  // 정렬은 state를 mutate하지 않도록 "복사 후 정렬" + useMemo
  const sortedMovies = useMemo(() => {
    const arr = [...movies];
    const dateVal = (d) => (d ? new Date(d).getTime() : 0);

    if (select === "best") {
      return arr.sort((a, b) => (b.vote_average ?? 0) - (a.vote_average ?? 0));
    }
    if (select === "latest") {
      return arr.sort(
        (a, b) => dateVal(b.release_date) - dateVal(a.release_date)
      );
    }
    // oldest
    return arr.sort(
      (a, b) => dateVal(a.release_date) - dateVal(b.release_date)
    );
  }, [movies, select]);

  // 화면에 보여줄 4개 단위 슬라이스
  const visibleMovies = useMemo(
    () => sortedMovies.slice(0, visibleCount),
    [sortedMovies, visibleCount]
  );

  const handleMore = () => {
    setVisibleCount((c) => Math.min(c + 4, sortedMovies.length));
  };

  if (!isLoding) return <div>데이터 로딩중...</div>;
  return (
    <div id="ActorDetailPage">
      <ActorInfo actor={actor} />
      <div className="actorWork">
        <p>
          {actor.name}
          {actor.known_for_department}의 작품
        </p>
        <select value={select} onChange={handleChangeSelect}>
          <option value="best">인기순</option>
          <option value="latest">최신순</option>
          <option value="oldest">오래된순</option>
        </select>
        <ActorMovieList sortMovies={visibleMovies} />
      </div>
      <div className="btn">
        <button className="moreBtn" onClick={handleMore}>
          더보기
        </button>
      </div>
    </div>
  );
};

export default ActorDetailPage;
