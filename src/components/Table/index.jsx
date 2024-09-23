import { Overflow, TableContainer, IconButtons } from "./styles"
import Status from "./Status"
import DetailsButton from "./DetailsButton"

export default function Table(){
  return (
    <Overflow>
      <TableContainer>
          <thead>
            <tr>
            <th></th>
            <th>Número do PI</th>
            <th>Veículo</th>
            <th>Agência</th>
            <th>Cliente</th>
            <th>Status</th>
          </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <IconButtons>
                  <button><i class="fas fa-bars"></i></button>
                  <DetailsButton/>
                </IconButtons>
              </td>
              <td>7650</td>
              <td>Itatiaia FM</td>
              <td>Agência XYZ</td>
              <td>Cliente ABC</td>
              <td>
              <Status status="Aprovado"/>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="5">
                <span>Página 1 de 1</span>
              </td>
              <td className="page-indicator">
                <button><i class="fas fa-arrow-left"></i></button>
                <span>1</span>
                <button><i class="fas fa-arrow-right"></i></button>
              </td>
            </tr>
          </tfoot>
        </TableContainer>
    </Overflow>
  )
}