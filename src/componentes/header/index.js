import styled from 'styled-components';
import Logo from '../logo';
import OpcoesHeader from '../opcoesHeader';

const HeaderContainer = styled.header`
  background-color: #FFF;
  display: flex;
  justify-content: center;
`

export default function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <OpcoesHeader />
    </HeaderContainer>
  )
}
