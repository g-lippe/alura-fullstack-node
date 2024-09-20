import { livrosLançamentos } from "./dadosUltimosLanc";
import { Titulo } from "../titulo";
import styled from 'styled-components';


const UltimosLancamentosContainer = styled.section`
  background-color: #EBECEE;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;

  div {
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
  }

`

export default function UltimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
      <Titulo cor="#000">ÚLTIMOS LANÇAMENTOS</Titulo>
      <div>
        {livrosLançamentos.map(livro => (
          <img src={livro.src} alt="livro" key={livro.id}/>
        ))}
      </div>
    </UltimosLancamentosContainer>
  )
}