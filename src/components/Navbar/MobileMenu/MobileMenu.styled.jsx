import styled from "@emotion/styled";

export const BoxBurger = styled.div`
  @media (max-width: 888.98px) {
    ${(props) =>
      props.isOpen &&
      `
      position: absolute;
      padding:15px;
      top: 0;
      right: 0;
      z-index: 9999;
    `}
  }
`;

export const StyledBurger = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-left: auto;
  z-index: 9999;

  &:focus {
    outline: none;
  }

  span {
    width: 2rem;
    height: 0.25rem;
    background: #333;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }

  span:nth-of-type(1) {
    transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
  }

  span:nth-of-type(2) {
    opacity: ${({ open }) => (open ? "0" : "1")};
    transform: ${({ open }) => (open ? "translateX(-20px)" : "translateX(0)")};
  }

  span:nth-of-type(3) {
    transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
  }
`;
