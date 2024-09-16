import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import { Fragment } from 'react'
import styled from 'styled-components'

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']
const icones = [perfil, sacola]

const Lista = styled.ul`
  display: flex;
  align-items: center;
`

const Opcao = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`

const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
`


function OpcoesHeader() {
  return (
    <Fragment>
      <Lista>
        {textoOpcoes.map(texto => (
          <Opcao><p>{texto}</p></Opcao>)
        )}
      </Lista>

      <Lista>
        {icones.map(icone => (
          <Icone><img src={icone} alt='icone'></img></Icone>)
        )}
      </Lista>
    </Fragment>
  )
}


export default OpcoesHeader;