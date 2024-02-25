import logo from '../../imagens/logo.svg';
import './logo_style.css';

export default function Logo() {
    return (
        <div className='logo'>
            <img src={logo} alt='logo'></img>
            <p><strong>Alura</strong>Books</p>
        </div>
    )
}