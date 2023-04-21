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
    background-color: #c7c7c7;
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
    overflow-y: auto;

  list-style: none;
  display: flex;
  color: black;
  background-color: #5f5f5fd5;
  backdrop-filter: blur(5px);
  border-radius: 9px;
  z-index: 999;

  @media (max-width: 700.98px) {
    top: 12%;
    left: 50%;
    transform: translateX(-50%);
    display: grid;
    width: 95vw;
    background-color: #c7c7c7d4;
  }
  @media (max-width: 888.98px) {
    top: 17%;
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
  background-color: #c7c7c7;
  border-radius: 7px;
  transition: all 0.2s ease-in-out;
  border: 2px solid gray;
  white-space: nowrap;
  @media (max-width: 480.98px) {
    font-size: 12px;
    margin: 0 3px;
    padding: 5px;
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

  &:hover {
    background: linear-gradient(to bottom right, #4c4c4c, #4c4c4c);
    color: orange;
    border-radius: 7px;
    border: 2px solid orange;
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
  color: black;
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
    background-color: #383737;
    border-radius: 0px;
  }
  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: #ff8900;
    &:before {
      transform: scaleX(0.8);
      box-shadow: 0px -1px 70px 1px black;
    }
  }

  &.active {
    color: #ff8900;
    background-color: #4c4c4c;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 0px;
  }
  &.active:before {
    border-color: #ff8900;
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
  color: black;
  padding: ${({ isscrolled }) => (isscrolled ? "19px" : "40px")} 15px;
  opacity: 1;
  margin-right: 10px;
  transition: padding 250ms ease-out;
  :hover {
    background-color: #383737;
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
    color: #ff8900;
    &:before {
      transform: scaleX(0.8);
      box-shadow: 0px -1px 70px 1px black;
    }
  }

  &.active {
    color: #ff8900;
    background-color: #020202;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 10px;
  }
  &.active:before {
    border-color: #ff8900;
  }
`;
