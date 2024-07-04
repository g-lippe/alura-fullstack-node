import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']
const icones = [perfil, sacola]


function OpcoesHeader() {
  return (
    <div>

      <ul className='opcoes'>
        {textoOpcoes.map(texto => (<li className='opcao'><p>{texto}</p></li>))}
      </ul>


      <ul className='icones'>
        {icones.map(icone => (<li className='icone'><img src={icone} alt={icone} /></li>))}
      </ul>
    </div>
  )

}

export default OpcoesHeader;