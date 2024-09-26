import styled from 'styled-components';
import Logo from '../logo';
import OpcoesHeader from '../opcoesHeader';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color: #FFF;
  display: flex;
  justify-content: center;
`

export default function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo />
      </Link>
      <OpcoesHeader />
    </HeaderContainer>
  )
}
