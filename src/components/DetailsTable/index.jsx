import { DetailsTableContainer } from "./styles"

export default function DetailsTable(){
  return(
    <DetailsTableContainer>
      <thead>
        <tr>
          <th>Título</th>
          <th>Data</th>
          <th>Dia da semana</th>
          <th>Inserções</th>
          <th>Custo unitário</th>
          <th>Custo total</th>
          <th>Horário</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>ROTATIVO - SPOT 15''</td>
          <td>10/06/22</td>
          <td>A</td>
          <td>6</td>
          <td>568,00</td>
          <td>9,66</td>
          <td>06H ÀS 20H</td>
        </tr>
      </tbody>
    </DetailsTableContainer>
  )
}