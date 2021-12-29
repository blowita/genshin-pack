import React from "react";
import { Link, useLocation } from "react-router-dom";

import { FaInfoCircle } from "react-icons/fa";
import { GiLightBackpack } from "react-icons/gi";

import { Container } from "./styles";

const Header: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <Container>
      <nav aria-label="Page Selection">
        <ul role="menubar">
          <li role="menuitem">
            <Link
              to="/characters"
              aria-current={["/", "/characters"].includes(pathname) && "page"}
              data-title="Characters"
            >
              <img
                src="/genshin-pack/static/images/icon/Icon_Character_Dark.png"
                alt="Character"
              />
              <span className="visuallyhidden">Characters</span>
            </Link>
          </li>
          <li role="menuitem">
            <Link
              to="/resources"
              aria-current={pathname === "/resources" && "page"}
              data-title="Resources"
            >
              <GiLightBackpack />
              <span className="visuallyhidden">Resources</span>
            </Link>
          </li>
          <li role="menuitem">
            <Link
              to="/info"
              aria-current={pathname === "/info" && "page"}
              data-title="Site Info"
            >
              <FaInfoCircle />
              <span className="visuallyhidden">Site information</span>
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Header;
