import styled from "styled-components"

// console.log(props.cor)

export const Titulo = styled.h2`
  width: 100%;
  padding: 30px 0;
  background-color: #FFF;
  font-size: 36px;
  color: ${props => props.cor || '#FFF'};
  text-align: center;
  margin: 0;
`

