import styled from "styled-components";
import { Link } from 'react-router-dom'

export const ButtonLink = styled(Link)`
  background-color: #004AAD;
  border-radius: 8px;
  color: #fff;
  text-align: center;
  text-decoration: none;
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 14px 8px;
  transition: 0.4s ease-in-out;

  &:hover {
    background-color: #003276;
  }
`