import { livrosLançamentos } from "./dadosUltimosLanc";
import { Titulo } from "../titulo";
import styled from 'styled-components';
import CardRecomenda from "../cardRecomenda";
import imgLivro2 from '../../imagens/livro2.png';


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
    <div>

      <UltimosLancamentosContainer>
        <Titulo cor="#EB9B00" tamanhofonte="36px"> ÚLTIMOS LANÇAMENTOS </Titulo>
        <div>
          {livrosLançamentos.map(livro => (
            <img src={livro.src} alt="livro" key={livro.id} />
          ))}
        </div>

      </UltimosLancamentosContainer>

      <CardRecomenda
        titulo="Talvez você se interesse por..."
        subtitulo="Angular 11"
        descricao="Criando uma aplicação moderna com o Angular"
        imagem={imgLivro2}
      />

    </div>
  )
}