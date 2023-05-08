import { Link } from 'react-router-dom';
import { LogoContainer } from './Logo.styled';

export default function Logo({ isScrolled }) {
  return (
    <LogoContainer isScrolled={isScrolled}>
      <Link to="/">
        <img src={process.env.PUBLIC_URL + '/imgs/logo.png'} alt="logo" />
      </Link>
    </LogoContainer>
  );
}