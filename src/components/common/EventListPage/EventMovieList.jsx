// EventMovieList.jsx

import { useState } from 'react';

const EventMovieList = ({ evMovie, text }) => {
  const [filter, setFilter] = useState('all');

  const handleFilterChange = (e) => setFilter(e.target.value);

  const filteredEvMovie = evMovie.filter((item) => {
    const isTextMath = item.movieName.includes(text);
    const isFilterMath =
      filter === 'all' ||
      (filter === 'startFastest' )
      (filter === 'endFastest')

      return isTextMath && isFilterMath;
    });
    // ? [...filteredEvMovie].sort(
    //     (a, b) => new Date(a.startDate) - new Date(b.startDate)
    //   )
    // : filteredEvMovie;

    // 내일 해야할거 시작일 빠른순 이랑 마감일 빠른순 으로 보여지게 할건지 
    // 데이터 받아오는거 정리


  return (

      <div id="EventMovieList">
        <div className="Event-filter">
            <select value={filter} onChange={handleFilterChange}>
            <option value="all">전체</option>
            <option value="done">완료</option>
            <option value="undone">미완료</option>
          </select>
        </div>
      </div>
  )
};

export default EventMovieList;
