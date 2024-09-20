import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ButtonLink = styled(Link)` 
  text-decoration: none;
  background-color: #004AAD;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  color: #fff;
  font-size: 11px;
  border-radius: 999px;
  padding-top: 2px;

  .fa-search {
  }
`