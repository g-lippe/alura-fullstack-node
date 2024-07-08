import './App.css';
import Logo from './componentes/logo';

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Logo />

        <ul>
          {textoOpcoes.map(texto => (<li><p>{texto}</p></li>))}
        </ul>

      </header>
    </div>
  );
}

export default App;
