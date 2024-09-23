import { Overflow, TableContainer, IconButtons } from "./styles"
import Status from "./Status"
import DetailsButton from "./DetailsButton"

import { useState } from "react"
import Dummy from "../../MOCK_DATA.json" 

export default function Table(){
  const [data, setData] = useState(Dummy)
  const [order, setOrder] = useState("asc")
  const [searchQuery, setSearchQuery] = useState(""); // Termo digitado no input
  const [searchTerm, setSearchTerm] = useState(""); // Termo de busca efetivo

  const sortTable = (col) => {
    if (order === "asc") {
      const sorted = [...data].sort((a, b) => a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
    );
      setData(sorted);
      setOrder("dsc")
    }

    if (order === "dsc") {
      const sorted = [...data].sort((a, b) => a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
    );
      setData(sorted);
      setOrder("asc")
    }
  }

  const filterData = (data, search) => {
    return data.filter((item) => {
      const searchLower = search.toLowerCase();
      return (
        searchLower === "" ||
        item.first_name.toLowerCase().includes(searchLower) ||
        item.last_name.toLowerCase().includes(searchLower) ||
        item.email.toLowerCase().includes(searchLower)
      );
    });
  };

  const handleSearch = () => {
    setSearchTerm(searchQuery); // Atualiza o termo de busca efetivo com o valor digitado
  };

  const clearSearch = () => {
    setSearchQuery(""); // Limpa o input de busca
    setSearchTerm("");  // Reseta a busca efetiva
  };

  return (
    <Overflow>
      <p className="info"><i class="fas fa-sort"></i>Clique no título de uma coluna para exibir seus itens em ordem crescente. Clique novamente para exibir os itens em ordem descrescente</p>
      <input type="text" name="search" id="search" value={searchQuery} onChange={(e => setSearchQuery(e.target.value))} placeholder="Buscar..." className="search-input"/>
      <button onClick={handleSearch} className="search-button"><i class="fas fa-search"></i></button>
      {searchTerm && (
          <button onClick={clearSearch} className="clear-button">
            Limpar busca
          </button>
        )}
      <TableContainer>
          <thead>
            <tr>
            <th></th>
            <th onClick={() => sortTable("first_name")}>Número do PI <i class="fas fa-sort"></i></th>
            <th onClick={() => sortTable("last_name")}>Veículo <i class="fas fa-sort"></i></th>
            <th onClick={() => sortTable("gender")}>Agência <i class="fas fa-sort"></i></th>
            <th onClick={() => sortTable("email")}>Cliente <i class="fas fa-sort"></i></th>
            <th onClick={() => sortTable("email")}>Status <i class="fas fa-sort"></i></th>
          </tr>
          </thead>
          <tbody>
            {filterData(data, searchTerm).map((item) => (
              <tr key={item.id}>
                <td>
                  <IconButtons>
                    <button>
                      <i className="fas fa-bars"></i>
                    </button>
                    <DetailsButton />
                  </IconButtons>
                </td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.gender}</td>
                <td>{item.email}</td>
                <td>
                  <Status status={item.id} />
                </td>
              </tr>
            ))}
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