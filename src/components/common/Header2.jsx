import { useLocation, Link } from 'react-router-dom';

import './Header2.css'

const gnbMap = [
  { path: '/', label: 'Main' },
  { path: '/login', label: 'Login' },
  { path: '/signup', label: 'Singup' },
  { path: '/movielist', label: 'Movielist' },
  { path: '/moviedetail/:id', label: 'Moviedetail' },
  { path: '/reviewwrite', label: 'Reviewwrite' },
  { path: '/eventlist', label: 'Eventlist' },
  { path: '/eventdetail/:id', label: 'Eventdetail' },
  { path: '/actorlist', label: 'Actorlist' },
  { path: '/actordetail/:id', label: 'Actordetail' },
  { path: '/admin', label: 'Admin' },
  { path: '/inguirywrite', label: 'Inguirywrite' },
];

const Header2 = () => {
  const { pathname } = useLocation();

  return (
    <header id="Header2">
      <nav className="gnb">
                <ul>
                    {gnbMap.map((gm, idx) => 
                        <li 
                            key={idx}
                            className={gm.path === pathname ? 'active' : ''}
                        >
                            <Link to={gm.path}>{gm.label}</Link>
                        </li>
                    )}
                </ul>
            </nav>
    </header>
  );
};

export default Header2;
