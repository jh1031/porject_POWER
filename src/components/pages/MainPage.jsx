/*MainPage.jsx*/

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate 임포트
import './MainPage.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual } from 'swiper/modules';
import baseApi from '../../../public/data/api/api';

import 'swiper/css';
import 'swiper/css/virtual';

function MainPage() {
  const [currentTime, setCurrentTime] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [topMovies, setTopMovies] = useState([]); // 영화 데이터를 저장할 상태
  const [loading, setLoading] = useState(true); // 로딩 상태 추가
  const [error, setError] = useState(null); // 에러 상태 추가
  const navigate = useNavigate(); // useNavigate 훅 사용

  useEffect(() => {
    // 시간 업데이트 로직
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

    // TMDB에서 인기 영화 데이터 가져오기
    const fetchTopMovies = async () => {
      try {
        setLoading(true); // 데이터 요청 시작 시 로딩 상태로 설정
        setError(null); // 이전 에러 상태 초기화
        // baseApi는 axios 인스턴스로 가정합니다.
        const response = await baseApi.get('/movie/popular', {
          params: {
            language: 'ko-KR',
            region: 'KR',
            page: 1,
          },
        });
        // axios는 데이터를 .data 속성에 담아줍니다. .json()이 아닙니다.
        const data = response.data;
        // 상위 10개 영화만 잘라서 상태에 저장
        setTopMovies(data.results.slice(0, 10));
      } catch (error) {
        console.error('TMDB API 호출 중 오류 발생:', error);
        setError('영화 정보를 불러오는 데 실패했습니다.'); // 에러 상태 설정
      } finally {
        setLoading(false); // 데이터 요청 완료 시 로딩 상태 해제
      }
    };

    fetchTopMovies();

    return () => clearInterval(intervalId);
  }, []); // 의존성 배열을 빈 배열로 수정하여 한 번만 실행되도록 합니다.

  // 검색 실행 함수
  const handleSearch = () => {
    if (!searchTerm.trim()) {
      alert('검색어를 입력해주세요.');
      return;
    }
    // [핵심] 검색어를 URL 쿼리 파라미터로 넘겨주며 검색 결과 페이지로 이동합니다.
    navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
  };

  // Enter 키 입력 처리 함수
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  // API로부터 받아온 데이터를 1-3위와 4-10위로 분리
  const topThreeMovies = topMovies.slice(0, 3);
  const remainingMovies = topMovies.slice(3, 10);

  // 로딩 중일 때 표시할 UI
  if (loading) {
    return <div className="loading-message">영화 정보를 불러오는 중...</div>;
  }

  // 에러 발생 시 표시할 UI
  if (error) {
    return <div className="error-message">{error}</div>;
  }

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
            {topThreeMovies.map((movie, index) => (
              <div key={movie.id} className="movie-item">
                <span className="movie-rank">{index + 1}</span>
                <Link to={`/moviedetail/${movie.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                </Link>
              </div>
            ))}
          </div>

          {/* remaining-top-movies 부분을 Swiper로 교체합니다. */}
          <div className="remaining-top-movies">
            <Swiper
              modules={[Virtual]}
              spaceBetween={100}
              slidesPerView={4}
              virtual
            >
              {remainingMovies.map((movie, index) => (
                <SwiperSlide key={movie.id} virtualIndex={index}>
                  <div className="movie-item">
                    <span className="movie-rank">{index + 4}</span>
                    <Link to={`/moviedetail/${movie.id}`}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
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
