import React from "react";
import { Link, useLocation } from "react-router-dom";

import { FaInfoCircle } from "react-icons/fa";

import { Container } from "./styles";

const Footer: React.FC = () => {
  const { pathname } = useLocation();

  if (pathname === "/info") {
    return <></>;
  }

  return (
    <Container>
      <p>Genshin Pack is not affiliated with miHoYo.</p>
      <p>Genshin Pack Version: 1.0.2</p>
      <Link to="/info" aria-current={pathname === "/info" && "page"}>
        <FaInfoCircle /> Privacy, Cookies and FAQs
      </Link>
    </Container>
  );
};

export default Footer;
