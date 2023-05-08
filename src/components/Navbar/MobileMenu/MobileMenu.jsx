import React, { useState } from "react";
import LinkNav from "components/Header/LinkNav/LinkNav";
import { BoxBurger, StyledBurger } from "./MobileMenu.styled";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  return (
    <BoxBurger isOpen={isOpen}>
      <StyledBurger open={isOpen} onClick={handleToggle}>
        <span />
        <span />
        <span />
      </StyledBurger>
      {isOpen && <LinkNav handleToggle={handleToggle} isOpen={isOpen} />}
    </BoxBurger>
  );
};

export default MobileMenu;
