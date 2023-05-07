import styled from "@emotion/styled/macro";
import { NavLink } from "react-router-dom";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow-y: auto;

  text-transform: uppercase;
  font-style: italic;
  @media (max-width: 888.98px) {
    overflow: auto;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    min-height: 100vh;
    width: 100vw;
    padding: 30px;

    padding-top: 80px;
    box-shadow: -5px 0 5px rgba(0, 0, 0, 0.596);
    background-color: ${(p) => p.theme.colors.backgfoundTablet};
    > *:last-child {
      display: flex;
    }
  }
`;

export const DropList = styled.ul`
  position: absolute;
  top: 140%;
  left: 50%;
  transform: translateX(-50%);

  list-style: none;
  display: flex;
  color: ${(p) => p.theme.colors.accentedTextDark};
  background-color: ${(p) => p.theme.colors.link};
  backdrop-filter: blur(5px);
  border-radius: 9px;
  z-index: 999;

  @media (max-width: 480.98px) {
    width: 100vw;
    border-radius: 0;
    display: flex;
    justify-content: space-evenly;
    background-color: ${(p) => p.theme.colors.mobileMenuBackground};
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
      rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  }

  @media (max-width: 888.98px) {
    top: 12%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const StyledDropdownItem = styled.li`
  margin: 0 5px;
  padding: 10px 5px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  font-size: 15px;
  transition: all 0.2s ease-in-out;
  white-space: nowrap;
  cursor: pointer;


  @media (max-width: 480.98px) {
    font-size: 12px;
    margin: 0;

    width: 60px;
    height: 60px;

    span {
      padding: 9px;
      border-radius: 5%;
      fill: ${(p) => p.theme.colors.accentSecondary};
      background: ${(p) => p.theme.colors.backgroundAccent};
      transition: all 0.3s ease-in-out;
    }
    &.active {
      span {
        padding: 10px;
        border-radius: 30%;
        fill: ${(p) => p.theme.colors.black};
        background: ${(p) => p.theme.colors.accent};
        transform: translateY(25%);
        transition: all 0.3s ease-in-out;
        box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px,
          rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
          rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
      }

      p {
        pointer-events: auto;
        position: absolute;
        border-radius: 10px;
        padding: 3px 12px;
        font-size: 16px;
        color: ${(p) => p.theme.colors.black};
        background-color:  ${(p) => p.theme.colors.accent};
        box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px,
          rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
          rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;

        opacity: 1;
        transform: translate(-50%, 0%);
        transition: transform 0.4s ease-in-out;
      }
    }

    p {
      pointer-events: none;
      position: absolute;
      top: 145%;
      left: 50%;
      opacity: 0;
      transform: translate(-50%, 10%);
      transition: transform 0.4s ease-in-out;
    }
  }
  @media (max-width: 888.98px) {
    font-size: 12px;
    margin: 0 3px;
    padding: 5px;
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export const LinkContainer = styled(NavLink)`
  width: 100px;
  display: flex;
  justify-content: center;
  position: relative;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  color: ${(p) => p.theme.colors.accentedTextDark};
  padding: ${({ isscrolled }) => (isscrolled ? "19px" : "40px")} 5px;
  opacity: 1;
  margin-right: 10px;
  transition: padding 250ms ease-out;

  @media (max-width: 888.98px) {
    width: 200px;
    padding: 20px 0px;
    margin-bottom: 10px;
  }

  &:hover {
    background-color: ${(p) => p.theme.colors.link};
    border-radius: 0px;
  }
  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: ${(p) => p.theme.colors.accent};
    &:before {
      transform: scaleX(0.8);
      box-shadow: 0px -1px 70px 1px black;
    }
  }

  &.active {
    color: ${(p) => p.theme.colors.accent};
    background-color: ${(p) => p.theme.colors.link};
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 0px;
  }
  &.active:before {
    border-color: ${(p) => p.theme.colors.accent};
  }
`;

export const LinkContainerProd = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  position: relative;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  color: ${(p) => p.theme.colors.accentedTextDark};
  padding: ${({ isscrolled }) => (isscrolled ? "19px" : "40px")} 15px;
  opacity: 1;
  margin-right: 10px;
  transition: padding 250ms ease-out;
  :hover {
    background-color: ${(p) => p.theme.colors.link};
    box-shadow: rgba(255, 166, 0, 0.841) 0px 5px 15px;
    border-radius: 0px;
  }

  @media (max-width: 888.98px) {
    margin-bottom: 10px;
    width: 200px;
    padding: 20px 0px;
  }

  &:before {
    content: "";
    width: 100%;
    position: absolute;
    left: 0%;
    bottom: 0px;
    border-bottom: 3px solid black;
    transition: transform 250ms ease-out;
    transform-origin: center;
    transform: scaleX(0);

    @media (max-width: 888.98px) {
      left: -8%;
    }
  }

  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: ${(p) => p.theme.colors.accent};
    &:before {
      transform: scaleX(0.8);
      box-shadow: 0px -1px 70px 1px black;
    }
  }

  &.active {
    color: ${(p) => p.theme.colors.accent};
    background-color: #020202;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 10px;
  }
  &.active:before {
    border-color: ${(p) => p.theme.colors.accent};
  }
`;
