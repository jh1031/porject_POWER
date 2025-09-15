// EventDetailPage.jsx

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import './EventDetailPage.css';

const EventDetailPage = () => {
  const { id } = useParams();
  const numId = Number(id);

  const [isReady, setIsReady] = useState(false);
  const [evMovie, setEvMovie] = useState([]);
  const [evMd, setEvMd] = useState([]);

  const [imgIdx, setimgIdx] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImgIdx, setModalImgIdx] = useState(0);

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

  const foundMovie = evMovie.find((item) => item.id === numId);
  const foundMd = evMd.find((item) => item.id === numId);

  const foundData = foundMovie || foundMd;

  if (!foundData) {
    return (
      <div className="EventDetailPageNone">
        <div className="event-none">
          <h1>데이터를 찾을 수 없습니다. 😢</h1>
          <p>존재하지 않는 이벤트 페이지 입니다.</p>
        </div>
      </div>
    );
  }

  const isMovieEvent = !!foundMovie;
  const eventTitleText = `${foundData.movieName}${'\u00A0'} -${'\u00A0'} ${
    isMovieEvent ? '시사회 이벤트' : '굿즈 이벤트'
  }`;

  const images = foundData.imagePath;

  const goToPrev = () => {
    setimgIdx((prevIdx) => (prevIdx === 0 ? images.length - 1 : prevIdx - 1));
  };

  const goToNext = () => {
    setimgIdx((prevIdx) => (prevIdx === images.length - 1 ? 0 : prevIdx + 1));
  };

  const openModal = () => {
    setIsModalOpen(true);
    setModalImgIdx(imgIdx);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToPrevModal = () => {
    setModalImgIdx((prevIdx) =>
      prevIdx === 0 ? images.length - 1 : prevIdx - 1
    );
  };

  const goToNextModal = () => {
    setModalImgIdx((prevIdx) =>
      prevIdx === images.length - 1 ? 0 : prevIdx + 1
    );
  };

  return (
    <div id="EventDetailPage">
      <div className="event-name">{eventTitleText}</div>
      <div className="event-container">
        <div className="event-img-gallery">
          <button className="nav-button prev" onClick={goToPrev}>
            &lt;
          </button>
          <img
            src={images[imgIdx]}
            alt={foundData.movieName}
            onClick={openModal}
          />
          <button className="nav-button next" onClick={goToNext}>
            &gt;
          </button>
        </div>
        <div className="event-information">
          <div className="event-actor">
            <h3>참여 출연진 및 MC</h3>

          </div>
          <div className="event-date">
            <h3>이벤트 날짜</h3>
            <p>
              {foundData.startDate} ~ {foundData.endDate}
            </p>
          </div>
          <div className="event-reference">
            <h3>이벤트 참여 방법</h3>
            <p>{foundData.reference}</p>
          </div>
        </div>
        <div className="event-content">
          <h3>시사회 내용</h3>
          <p>{foundData.content}</p>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close-button" onClick={closeModal}>&times;</button>
            <button className="modal-nav-button prev" onClick={goToPrevModal}>&lt;</button>
            <img src={images[modalImgIdx]} alt={foundData.movieName} />
            <button className="modal-nav-button next" onClick={goToNextModal}>&gt;</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventDetailPage;
