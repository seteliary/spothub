import Header from "../../components/Header";
import Title from "../../components/Title";
import Text from "../../components/Text";
import SelectInput from "../../components/SelectInput";
import Table from "../../components/Table";
import Footer from "../../components/Footer";
import { Container, Content } from "./styles";
import ordem from "../../models/SelectOptions/ordem"
import filtro from "../../models/SelectOptions/filtro"

export default function Home() {
  return (
    <Container>
      <Header/>
      <Content>
        <Title text="Pedidos de Inserção (PIs)"/>
        <Text content="Clique no ícone de lupa ou sobre um item da lista para ver detalhes do PI." />
        <Text content="Clique no ícone à esquerda da lupa para aprovar ou reprovar o PI." />
        <div className="filters">
          <div className="inputs">
            <SelectInput name="ordenar" options={ordem}/>
            <SelectInput name="filtrar" options={filtro}/>
            <div className="input-search">
              <input type="search" id="search-input" placeholder="Pesquisar..." />
              <i class="fas fa-search"></i>
            </div>
          </div>
          <button type="reset"><i class="fas fa-trash-alt"></i>Remover filtros</button>
        </div>
        <Table/>
        <Footer/>
      </Content>
    </Container>
  )
}
