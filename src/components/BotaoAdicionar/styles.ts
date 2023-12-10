import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Circulo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  width: 64px;
  background-color: #44bd32;
  color: #fff;
  position: fixed;
  right: 50px;
  bottom: 50px;
  font-size: 40px;
  border-radius: 50%;
  text-decoration: none;
`
