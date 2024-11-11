import { useEffect, useState } from 'react';
import styled from 'styled-components';
import livroImg from '../imagens/livro2.png';
import { getFavoritos } from '../servicos/favoritos';


const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
`

const ResultadoContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
`

const Resultado = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 20px 5px;
   cursor: pointer;
   text-align: center;
   padding: 5px 50px;
   background-color: #00000030;
   border-radius: 5px;
   transition: 0.1s;

   p {
       width: 200px;
       color: #FFF;
   }
   img {
       width: 100px;
       width: 80px;
   border-radius: 5px;

   }
   &:hover {
       background-color: #00000060;
   }
`

const Titulo = styled.h2`
   color: #FFF;
   font-size: 36px;
   text-align: center;
   width: 100%;
   padding-top: 35px;
`

function Favoritos() {
  const [favoritos, setFavoritos] = useState([])

  async function fetchFavoritos() {
    const favoritosDaAPI = await getFavoritos()
    setFavoritos(favoritosDaAPI)
  }

  useEffect(() => {
    fetchFavoritos()
  }, [])

  console.log(favoritos)

  return (
    <AppContainer>
      <div>
        <Titulo>Aqui estão seus livros favoritos:</Titulo>
        <ResultadoContainer>
          {
            favoritos.length !== 0 ? favoritos.map(favorito => (
              <Resultado>
                <p>{favorito.name}</p>
                <img src={livroImg} />
              </Resultado>
            )) : null
          }
        </ResultadoContainer>
      </div>
    </AppContainer>
  );
}

export default Favoritos;
