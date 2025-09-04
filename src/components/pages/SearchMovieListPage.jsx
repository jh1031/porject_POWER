// SearchMovieListPage.jsx

import { useState, useEffect } from "react";
import baseApi from "../../../public/data/api/api";
import { SearchMovieList } from "../common/SearchListPage";
const SearchMovieListPage = ({ keyword }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchMovies, setSearchMovies] = useState([]);

  useEffect(() => {
    fatchData();
  }, [keyword]);

  const fatchData = async () => {
    try {
      const respones = await baseApi.get(
        `/search/movie?query=${keyword}&include_adult=false&language=ko-KR&page=1`
      );
      const data = respones.data.results;
      console.log(data);
      setSearchMovies(data);
    } catch (e) {
      console.error("데이터 로딩 실패 : ", e);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <div>데이터 로딩중...</div>;
  return (
    <div id="SearchMovieListPage">
      <SearchMovieList searchMovies={searchMovies} />
    </div>
  );
};

export default SearchMovieListPage;
