import { useState } from "react";
import { useLocation, Link } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import "./Header2.css";

const gnbMap = [
  { path: "/", label: "Main" },
  { path: "/login", label: "Login" },
  { path: "/signup", label: "Singup" },
  { path: "/movielist", label: "Movielist" },
  { path: "/moviedetail/:id", label: "Moviedetail" },
  { path: "/reviewwrite", label: "Reviewwrite" },
  { path: "/eventlist", label: "Eventlist" },
  { path: "/eventdetail/:id", label: "Eventdetail" },
  { path: "/actorlist", label: "Actorlist" },
  { path: "/actordetail/:id", label: "Actordetail" },
  { path: "/admin", label: "Admin" },
  { path: "/inguirywrite", label: "Inguirywrite" },
];

const Header2 = () => {
  const { pathname } = useLocation();

  const [isModal, setIsModal] = useState(false);
  const handleClickIsMdal = () => {
    setIsModal(!isModal);
  };

  const modalClose = () => {
    setIsModal(!isModal);
  };

  return (
    <header id="Header2">
      <nav className="gnb">
        <ul>
          <li>
            <button onClick={handleClickIsMdal}>login</button>
          </li>
          {gnbMap.map((gm, idx) => (
            <li key={idx} className={gm.path === pathname ? "active" : ""}>
              <Link to={gm.path}>{gm.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="isModal">
        {<LoginPage isModal={isModal} modalClose={modalClose} />}
      </div>
    </header>
  );
};

export default Header2;
