// SearchResultPage.jsx

import { useSearchParams } from "react-router-dom";
import SearchMovieListPage from "./SearchMovieListPage";
import SearchActorListPage from "./SearchActorListPage";

const SearchResultPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  return (
    <div id="SearchResult">
      <div className="search-movie">
        <h2>영화 검색 결과</h2>
        <SearchMovieListPage query={query} />
      </div>
      <div className="search-actor">
        <h2>인물 검색 결과</h2>
        <SearchActorListPage query={query} />
      </div>
    </div>
  );
};

export default SearchResultPage;
