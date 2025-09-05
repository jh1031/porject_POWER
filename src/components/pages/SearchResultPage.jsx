// SearchResultPage.jsx

import { useSearchParams } from "react-router-dom";
import SearchMovieListPage from "./SearchMovieListPage";
import SearchActorListPage from "./SearchActorListPage";
import "./SearchResultPage.css";

const SearchResultPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  return (
    <div id="SearchResult">
      <div className="search-result">
        <h1>
          "<span>{query}</span>" 검색 결과입니다.
        </h1>
      </div>
      <div className="search-movie">
        <h1 className="movie">영화</h1>
        <SearchMovieListPage query={query} />
      </div>
      <div className="search-actor">
        <h1 className="actor">인물</h1>
        <SearchActorListPage query={query} />
      </div>
    </div>
  );
};

export default SearchResultPage;
