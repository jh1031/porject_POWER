// EventListPage.jsx

import { useEffect, useState } from 'react';
import axios from 'axios';
import { EventMovieList, EventMdList } from '../common/EventListPage/index';

import './EventListPage.css';

const EventListPage = () => {
  const [isReady, setIsReady] = useState(false);
  const [evMovie, setEvMovie] = useState([]);
  const [evMd, setEvMd] = useState([]);
  const [text, setText] = useState('');
  const [today, setToday] = useState(new Date());

  const handleChangeText = (e) => setText(e.target.value);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const movieRes = await axios.get('/data/eventMovieData.json');
      setEvMovie(movieRes.data);

      const mdRes = await axios.get('/data/eventMdData.json');
      setEvMd(mdRes.data);
    } catch (e) {
      console.error('data loading error', e);
    } finally {
      setIsReady(true);
    }
  };
  const thisYear = today.getFullYear();
  const thisMonth = today.getMonth();

  const firstDay = new Date(thisYear, thisMonth, 1);
  const lastDay = new Date(thisYear, thisMonth + 1, 1);

  const handleClickPrev = () => {
    setToday(new Date(thisYear, thisMonth - 1, 1));
  };
  const handleClickNext = () => {
    setToday(new Date(thisYear, thisMonth + 1, 1));
  };

  const [filter, setFilter] = useState('nowEvent');

  const handleFilterChange = (e) => setFilter(e.target.value);

  const filteredEvMovie = evMovie.filter((item) => {
    const isTextMath = item.movieName.includes(text);
    const isFilterMath =
      filter === 'nowEvent' ||
      (filter === 'startEvnet' )
      (filter === 'endEvent')

      return isTextMath && isFilterMath;
    });
    // ? [...filteredEvMovie].sort(
    //     (a, b) => new Date(a.startDate) - new Date(b.startDate)
    //   )
    // : filteredEvMovie;

    // 내일 해야할거 시작일 빠른순 이랑 마감일 빠른순 으로 보여지게 할건지 
    // 데이터 받아오는거 정리

  if (!isReady) {
    return <div>데이터 로딩 중,,,</div>;
  }
  return (
    <div id="EventListPage">
        <div className="date-control">
            <p className="btnLeft">
          <button onClick={handleClickPrev}>
            <span>이전 달</span>
          </button>
        </p>
            <div className="thismonth">{today.toISOString().slice(5,7)}월 이벤트</div>
             <p className="btnRight">
          <button onClick={handleClickNext}>
            <span>다음 달</span>
          </button>
        </p>
        </div>
      <div className="event-top">
        <div className="event-filter">
            <select value={filter} onChange={handleFilterChange}>
            <option value="nowEvent">진행중인 이벤트</option>
            <option value="startEvent">다가오는 이벤트</option>
            <option value="endEvent">끝난 이벤트</option>
            <option value="all">전체</option>
          </select>
        </div>
        <div className="event-search">
          <input
            type="text"
            placeholder="🔎 search"
            value={text}
            onChange={handleChangeText}
          />
        </div>
      </div>
      <h3>시사회 이벤트</h3>
      
      <EventMovieList evMovie={evMovie} text={text} />
      <h3>굿즈 이벤트</h3>
      <EventMdList evMd={evMd} text={text} />
    </div>
  );
};

export default EventListPage;
