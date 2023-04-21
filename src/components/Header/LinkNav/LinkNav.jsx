import React, { useState, useEffect } from "react";
import {
  LinkContainer,
  NavContainer,
  LinkContainerProd,
} from "./LinkNav.styled";
import DropSlider, { DropSliderTrans } from "components/DropSlider/DropSlider";
import { useMediaQuery } from "react-responsive";
import Contact from "components/Contact/Contact";
import {
  StyledDropdownItem,
  DropList,
} from "components/Header/LinkNav/LinkNav.styled";
import dropvibro from "../../../data/dropvibro.json";
import dropbeton from "../../../data/dropbeton.json";
import droppress from "../../../data/droppress.json";
import droptransport from "../../../data/droptransport.json";
import drophelp from "../../../data/drophelp.json";

export default function LinkNav({ handleToggle, isOpen }) {
  const [selectedDropdownItem, setSelectedDropdownItem] = useState(dropvibro);
  const [isscrolled, setIsScrolled] = useState(false);

  const maxLaptop = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <>
      <NavContainer>
        <LinkContainer
          isscrolled={isscrolled ? 1 : 0}
          to="/"
          onClick={handleToggle}
        >
          <p>Головна</p>
        </LinkContainer>
        <LinkContainer
          isscrolled={isscrolled ? 1 : 0}
          to="/about"
          onClick={handleToggle}
        >
          <p>Про нас</p>
        </LinkContainer>

        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <LinkContainerProd
            isScrolled={isscrolled}
            variant="link"
            id="dropdown-link"
          >
            <p>Продукція</p>
          </LinkContainerProd>
          {isHovering && (
            <DropList>
              <StyledDropdownItem
                onMouseEnter={() => setSelectedDropdownItem(dropvibro)}
              >
                Вібропреси
              </StyledDropdownItem>
              <StyledDropdownItem
                onMouseEnter={() => setSelectedDropdownItem(dropbeton)}
              >
                Бетонозмішувальні комплекси
              </StyledDropdownItem>
              <StyledDropdownItem
                onMouseEnter={() => setSelectedDropdownItem(droppress)}
              >
                Прес-форми
              </StyledDropdownItem>
              <StyledDropdownItem
                onMouseEnter={() => setSelectedDropdownItem(droptransport)}
              >
                Транспортна група
              </StyledDropdownItem>
              <StyledDropdownItem
                onMouseEnter={() => setSelectedDropdownItem(drophelp)}
              >
                Допоміжне обладнання
              </StyledDropdownItem>
            </DropList>
          )}
          {selectedDropdownItem === droptransport && isHovering && (
            <DropSliderTrans
              handleToggle={handleToggle}
              handleMouseLeave={handleMouseLeave}
              droptransport={selectedDropdownItem}
            />
          )}
          {selectedDropdownItem !== droptransport && isHovering && (
            <DropSlider
              handleToggle={handleToggle}
              handleMouseLeave={handleMouseLeave}
              data={selectedDropdownItem}
            />
          )}
        </div>
        <LinkContainer
          isscrolled={isscrolled ? 1 : 0}
          to="/service"
          onClick={handleToggle}
        >
          <p>Сервіс</p>
        </LinkContainer>
        {maxLaptop && <Contact />}
      </NavContainer>
    </>
  );
}
