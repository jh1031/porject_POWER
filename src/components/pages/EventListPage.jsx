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
      <EventMovieList evMovie={evMovie} text={text} />
      <EventMdList evMd={evMd} text={text} />
    </div>
  );
};

export default EventListPage;
