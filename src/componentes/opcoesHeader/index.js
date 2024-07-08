import './opcoes_style.css'
import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import { Fragment } from 'react'

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']
const icones = [perfil, sacola]


function OpcoesHeader() {
  return (
    <Fragment>
      <ul>
        {textoOpcoes.map(texto => (
          <li className='opcao'><p>{texto}</p></li>)
        )}
      </ul>

      <ul>
        {icones.map(icone => (
          <li className='icone'><img src={icone} alt='icone'></img></li>)
        )}
      </ul>
    </Fragment>
  )
}


export default OpcoesHeader;