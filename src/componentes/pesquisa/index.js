import Input from "../Input";
import styled from "styled-components";
import { useEffect, useState } from 'react';
import { getLivros } from "../../servicos/livros";
import { postFavorito } from "../../servicos/favoritos";

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
  grid-template-columns: repeat(4, 1fr);

`

const LivroPesquisa = styled.div`
  
    align-items: center;
    transition: 0.3s;
    border-radius: 10px;
    padding: 5px;
    font-size: 12px;
    /* width: 50px; */

    &:hover {
      transform: scale(1.05);
      background-color: #FFF1;
    }

  
  `

export default function Pesquisa() {
  const [livrosPesquisados, setLivrosPesquisados] = useState([])
  const [livros, setLivros] = useState([])


  useEffect(() => {
    fetchLivros()
  }, [])


  async function fetchLivros() {
    const livrosDaAPI = await getLivros()
    setLivros(livrosDaAPI)
    setLivrosPesquisados(livrosDaAPI)
  }


  async function insereFavorito(id) {
    await postFavorito(id)
    alert('livro adicionado aos favoritos')
  }

  return (
    <PesquisaContainer>
      <h2>Já sabe por onde começar?</h2>
      <h3>Encontre seu livro em nossa estante.</h3>
      <Input
        placeholder="Escreva sua próxima leitura"
        onBlur={evento => {
          const textoDigitado = evento.target.value
          const resultadoPesquisa = livros.filter(livro => livro.name.includes(textoDigitado))
          setLivrosPesquisados(resultadoPesquisa)
        }}
      />

      <ListaPesquisa >
        {livrosPesquisados.map(livro => (
          <LivroPesquisa key={livro.id} onClick={() => insereFavorito(livro.id)}>
            <img src={livro.src} />
            <p>{livro.name}</p>
          </LivroPesquisa>
        ))}
      </ListaPesquisa>



    </PesquisaContainer>
  )
}