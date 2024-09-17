import Input from "../Input";
import styled from "styled-components";
import { useState } from 'react';
import { livros } from './dadosPesquisa';

const PesquisaContainer = styled.section`

  background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
  color: #FFF;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;

  h2 {
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
  }

  h3 {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
  }

`

const ListaPesquisa = styled.div`

  display: grid;
  grid-template: auto auto;



  div {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    margin: 2px 20%;
    transition: 0.3s;
    border-radius: 10px;
    padding: 5px;

    &:hover {
      transform: scale(1.05);
      background-color: #FFF1;
    }

  }


  img {
    width: 120px;
  }

  p {
    font-size: 24px;
    margin-left: 40px;
  }



`


export default function Pesquisa() {

  const [livrosPesquisados, setLivrosPesquisados] = useState([])

  return (
    <PesquisaContainer>
      <h2>Já sabe por onde começar?</h2>
      <h3>Encontre seu livro em nossa estante</h3>
      <Input placeholder="Pesquise sua próxima leitura" onBlur={e => {

        const resultado = livros.filter(livro => livro.nome.toLowerCase().includes(e.target.value.toLowerCase()))
        setLivrosPesquisados(resultado)
        console.log("Livros", livros)
        console.log(resultado)
      }} />

      <ListaPesquisa >
        {livrosPesquisados.map(livro => (
          <div key={livro.id}>
            <img src={livro.src} />
            <p>{livro.nome}</p>
          </div>
        ))}
      </ListaPesquisa>



    </PesquisaContainer>
  )
}