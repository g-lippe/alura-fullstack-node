import Logo from '../logo';
import OpcoesHeader from '../opcoesHeader';
import './header_style.css';

export default function Header() {
  return (
    <header className="App-header">
      <Logo />
      <OpcoesHeader />
    </header>
  )
}
