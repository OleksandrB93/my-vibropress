import styled from '@emotion/styled';

export const NavbarContainer = styled.header`
  backdrop-filter: blur(3px);
  background: ${(p) => p.theme.colors.headerBackground};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  height: ${({ isScrolled }) => (isScrolled ? '70px' : '112px')};
  transition: height 0.3s;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: ${({ isScrolled }) =>
    isScrolled ? '0 2px 4px rgba(8, 8, 8, 0.622)' : 'none'};
`;

export const Burger = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
`;
