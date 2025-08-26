import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';

function MainPage() {
  const [currentTime, setCurrentTime] = useState('');

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

  return (
    <div id="MainPage">
      <div className="container">
        <div className="search">
          <input type="text" placeholder="검색창" />
        </div>

        <section className="top">
          <div>
            <h2>대한민국의 TOP10</h2>
            <p>{currentTime}</p>
          </div>

          <div>
            {[1, 2, 3].map((rank) => (
              <div key={rank}>
                <span>{rank}</span>
                <Link to="/moviedetail/:id">
                  <img
                    src={`https://picsum.photos/id/${rank * 10}/400/600`}
                    alt={`영화 ${rank}`}
                  />
                </Link>
              </div>
            ))}
          </div>

          <div>
            {[4, 5, 6, 7, 8, 9, 10].map((rank) => (
              <div key={rank}>
                <span>{rank}</span>
                <Link to="/moviedetail/:id">
                  <img
                    src={`https://picsum.photos/id/${rank * 10}/400/600`}
                    alt={`영화 ${rank}`}
                  />
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="event">
          <div>
            <h2>지금 인기있는 이벤트</h2>
          </div>
          <div>
            {[101, 102, 103].map((id) => (
              <div key={id}>
                <Link to="/eventdetail/:id">
                  <img
                    src={`https://picsum.photos/id/${id}/600/300`}
                    alt={`이벤트 ${id}`}
                  />
                  <p>0000 시사회 이벤트</p>
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
