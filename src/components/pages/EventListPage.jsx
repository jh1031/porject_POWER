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
  // 나중에 지워
  // commit 용 나중에 지워~

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
  if (!isReady) {
    return <div>데이터 로딩 중,,,</div>;
  }
  return (
    <div id="EventListPage">
      <div className="Event-search">
        <input
          type="text"
          placeholder="🔎 search"
          value={text}
          onChange={handleChangeText}
        />
      </div>
      <h3>시사회 이벤트</h3>
      <EventMovieList evMovie={evMovie} text={text} />
      <h3>굿즈 이벤트</h3>
      <EventMdList evMd={evMd} text={text} />
    </div>
  );
};

export default EventListPage;
