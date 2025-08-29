import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

// 재사용 가능한 드롭다운 메뉴 컴포넌트
const DropdownMenu = ({ title, to, items, dropdownClassName }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <li
      className="dropdown-menu-item"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <Link to={to}>{title}</Link>
      {isVisible && (
        <ul className={`nav-dropdown ${dropdownClassName}`}>
          {items.map((item) => (
            <li key={item.name}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

const Header = () => {
  const { pathname } = useLocation();

  // 장르와 이벤트 데이터를 컴포넌트에 맞게 구조화
  const genreItems = [
    { path: '/movielist?genre=28', name: '액션' },
    { path: '/movielist?genre=16', name: '애니메이션' },
    { path: '/movielist?genre=35', name: '코미디' },
    { path: '/movielist?genre=27', name: '공포' },
    { path: '/movielist?genre=10749', name: '로맨스' },
    { path: '/movielist?genre=878', name: 'SF' },
    { path: '/movielist?genre=18', name: '드라마' },
    { path: '/movielist?genre=10402', name: '음악' },
    { path: '/movielist?genre=10751', name: '가족' },
  ];

  const eventItems = [
    { path: '/events/premieres', name: '시사회' },
    { path: '/events/goods', name: '굿즈' },
  ];

  return (
    <header id="site-header">
      <div className="logo-area">
        <Link to="/" className="logo-link">
          <h1 className="logo">LOGO</h1>
        </Link>
      </div>

      <nav className="main-nav">
        <ul>
          {/* 분리된 DropdownMenu 컴포넌트 사용 */}
          <DropdownMenu
            title="장르"
            to="/movielist"
            items={genreItems}
            dropdownClassName="genre-dropdown"
          />
          <DropdownMenu
            title="이벤트"
            to="/eventlist"
            items={eventItems}
            dropdownClassName="event-dropdown"
          />

          {/* 문의 메뉴 (툴팁) */}
          <li className="tooltip-item">
            <Link to="/inguirywrite">문의</Link>
            <span className="tooltip-text">문의 작성하기</span>
          </li>
        </ul>
      </nav>

      <div className="user-menu">
        <Link to="/login">로그인</Link>
        <Link to="/signup">회원가입</Link>
      </div>
    </header>
  );
};

export default Header;
