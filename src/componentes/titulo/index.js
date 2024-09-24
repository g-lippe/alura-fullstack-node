import styled from "styled-components"

export const Titulo = styled.h2`
  width: 100%;
  padding: 30px 0;
  background-color: #FFF;
  font-size: ${props => props.tamanhoFonte || '36px'};
  color: ${props => props.cor || '#000'};
  text-align: ${props => props.alinhamento || 'center'};
  margin: 0;
`