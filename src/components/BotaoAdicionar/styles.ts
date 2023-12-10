import { Link } from 'react-router-dom'
import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Circulo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  width: 64px;
  background-color: ${variaveis.verde};
  color: #fff;
  position: fixed;
  right: 50px;
  bottom: 50px;
  font-size: 40px;
  border-radius: 50%;
  text-decoration: none;
`
