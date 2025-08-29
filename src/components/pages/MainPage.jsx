import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/virtual';

function MainPage() {
  const [currentTime, setCurrentTime] = useState('');
  const [searchTerm, setSearchTerm] = useState(''); // 검색어 상태 추가

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setCurrentTime(`${year}.${month}.${day} ${hours}:${minutes} 기준`);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 60000);

    return () => clearInterval(intervalId);
  }, []);

  // 검색 실행 함수
  const handleSearch = () => {
    if (!searchTerm.trim()) {
      alert('검색어를 입력해주세요.');
      return;
    }
    // 실제 검색 로직을 여기에 구현합니다.
    // 예: alert(`'${searchTerm}' 검색 실행`);
    console.log('검색어:', searchTerm);
  };

  // Enter 키 입력 처리 함수
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  // 4-10위 영화 데이터를 배열로 관리합니다.
  const remainingMovies = [4, 5, 6, 7, 8, 9, 10];

  return (
    <div id="MainPage">
      <div className="container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="영화,배우 등 검색"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button className="search-icon" onClick={handleSearch}>
            search
          </button>
        </div>

        <section className="top-movies-section">
          <div className="section-header">
            <h2>대한민국의 TOP10</h2>
            <p className="current-time">{currentTime}</p>
          </div>

          <div className="top-three-movies">
            {[1, 2, 3].map((rank) => (
              <div key={rank} className="movie-item">
                <span className="movie-rank">{rank}</span>
                <Link to={`/moviedetail/${rank}`}>
                  <img
                    src={`https://picsum.photos/id/${rank * 10}/400/600`}
                    alt={`영화 ${rank}`}
                  />
                </Link>
              </div>
            ))}
          </div>

          {/* remaining-top-movies 부분을 Swiper로 교체합니다. */}
          <div className="remaining-top-movies">
            <Swiper
              modules={[Virtual]} // Virtual 모듈을 사용합니다.
              spaceBetween={20} // 슬라이드 사이의 간격
              slidesPerView={4.5} // 한 번에 보여줄 슬라이드 개수
              virtual // Virtual Slides 기능을 활성화합니다.
            >
              {remainingMovies.map((rank, index) => (
                <SwiperSlide key={rank} virtualIndex={index}>
                  <div className="movie-item">
                    <span className="movie-rank">{rank}</span>
                    <Link to={`/moviedetail/${rank}`}>
                      <img
                        src={`https://picsum.photos/id/${rank * 10}/400/600`}
                        alt={`영화 ${rank}`}
                      />
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        <section className="event-section">
          <div className="section-header">
            <h2>지금 인기있는 이벤트</h2>
          </div>
          <div className="event-list">
            {[101, 102, 103].map((id) => (
              <div key={id} className="event-item">
                <Link to={`/eventdetail/${id}`}>
                  <img
                    src={`https://picsum.photos/id/${id}/600/300`}
                    alt={`이벤트 ${id}`}
                  />
                  <p className="event-title">0000 시사회 이벤트</p>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default MainPage;
