import styled from "styled-components";

export const StatusContainer = styled.span`
  padding: 3px 8px;
  border-radius: 999px;
  background-color: green;
  color: #fff;
  font-weight: bold;
  text-align: center;
  max-width: 97px;
`

// { 
//   if (props.aprovado) {
//     'green';
//   } else if (props.reprovado) {
//     'red';
//   } else {
//     'orange';
//   }
// }

// background-color: ${props => 
//   props.status === "Aprovado" ? '#34C759' :
//   props.status === "Reprovado" ? '#FF3B30' : '#FF9500'
// };

// &:before {
//   content: ${props => 
//     props.aprovado ? 'Aprovado' :
//     props.reprovado ? 'Reprovado' : 'Pendente'
//   };
// }