import { useLocation } from 'react-router-dom';

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header id="Header">
      <div className="pageName">pageName</div>
    </header>
  );
};

export default Header;
