import { useSearchParams } from 'react-router-dom';

const SearchResultPage = () => {
  const [searchParams] = useSearchParams();
  return <div id="SearchResult"></div>;
};

export default SearchResultPage;
