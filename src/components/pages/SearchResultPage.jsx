// SearchResultPage.jsx

import { useSearchParams } from "react-router-dom";
import SearchMovieListPage from "./SearchMovieListPage";

const SearchResultPage = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  return (
    <div id="SearchResult">
      <div className="search-movie">
        <h2>영화 검색 결과</h2>
        <SearchMovieListPage keyword={keyword} />
      </div>
    </div>
  );
};

export default SearchResultPage;
