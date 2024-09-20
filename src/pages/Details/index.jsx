import Header from "../../components/Header";
import Title from "../../components/Title";
import Text from "../../components/Text";
import Status from "../../components/Table/Status";
import DetailsTable from "../../components/DetailsTable";
import { Container, Content, InfoCard, TitleContainer, ButtonLink } from "./styles";
import { useState } from "react";

export default function Details() {
  const [activeContent, setActiveContent]
  = useState("pi")

  function updateContent(id) {
    setActiveContent(id)
  }

  return (
    <Container>
      <Header/>
      <Content>
        <TitleContainer>
          <ButtonLink to="/home"><i class="fas fa-arrow-left"></i></ButtonLink>
          <Title text="Detalhes do Pedido de Inserção"/>
        </TitleContainer>
        <Text content="Para visualizar as informações de determinada categoria, clique na aba contendo o nome da categoria desejada." />
        <InfoCard>
          <ul className="card-header">
            <li className={activeContent === "pi" ? "active-tab" : "inactive-tab" } onClick={() => updateContent("pi")}>PI</li>
            <li className={activeContent === "campanha" ? "active-tab" : "inactive-tab" } onClick={() => updateContent("campanha")}>Campanha</li>
            <li className={activeContent === "faturamento" ? "active-tab" : "inactive-tab" } onClick={() => updateContent("faturamento")}>Faturamento</li>
            <li className={activeContent === "agencia" ? "active-tab" : "inactive-tab" } onClick={() => updateContent("agencia")}>Agência</li>
            <li className={activeContent === "veiculo" ? "active-tab" : "inactive-tab" } onClick={() => updateContent("veiculo")}>Veículo</li>
            <li className={activeContent === "cliente" ? "active-tab" : "inactive-tab" } onClick={() => updateContent("cliente")}>Cliente</li>
          </ul>

          <div className={activeContent === "pi" ? "visible" : "hidden" }>
            <div className="info-container">
              <div className="info">
                <span>Número</span>
                <span>7650</span>
              </div>
              <div className="info">
                <span>Recebimento</span>
                <span>20/09/2024 às 13:10</span>
              </div>
              <div className="info">
                <span>Status</span>
                <Status status="Aprovado"/>
              </div>
            </div>
          </div>
          
          <div className={activeContent === "campanha" ? "visible" : "hidden" }>
            <div className="info-container">
              <div className="info">
                <span>Nome</span>
                <span>CAMPANHA_2022</span>
              </div>
              <div className="info">
                <span>Produto</span>
                <span>INSTITUCIONAL_BR</span>
              </div>
              <div className="info">
                <span>Mês</span>
                <span>JUNHO/2022</span>
              </div>
              <div className="info">
                <span>Data inicial</span>
                <span>10/06/22</span>
              </div>
              <div className="info">
                <span>Data final</span>
                <span>15/06/22</span>
              </div>
            </div>
            <DetailsTable/>
          </div>

          <div className={activeContent === "faturamento" ? "visible" : "hidden" }>
            <div className="info-container">
              <div className="info">
                <span>Nome</span>
                <span>ACTION MIDIA PARTNERS SERVIÇOS DE MARKETING LTDA</span>
              </div>
              <div className="info">
                <span>CNPJ</span>
                <span>23.473.087</span>
              </div>
              <div className="info">
                <span>Endereço</span>
                <span>RUA NATINGUI, 862, VILA MADALENA</span>
              </div>
              <div className="info">
                <span>Cidade</span>
                <span>SÃO PAULO</span>
              </div>
              <div className="info">
                <span>Estado</span>
                <span>SP</span>
              </div>
              <div className="info">
                <span>CEP</span>
                <span>05.443-002</span>
              </div>
              <div className="info">
                <span>Telefone</span>
                <span>99999-9999</span>
              </div>
              <div className="info">
                <span>E-mail</span>
                <span>financeiro@actionooh.art.br</span>
              </div>
              <div className="info">
                <span>Total bruto</span>
                <span>22.532,65</span>
              </div>
              <div className="info">
                <span>Total líquido</span>
                <span>18.023,12</span>
              </div>
              <div className="info">
                <span>Comissão</span>
                <span>4.506,53</span>
              </div>
              <div className="info">
                <span>Autorização do cliente</span>
                <span>289.291</span>
              </div>
              <div className="info">
                <span>Data de vencimento</span>
                <span>22/07/22</span>
              </div>
              <div className="info">
                <span>IE</span>
                <span>ISENTO</span>
              </div>
              <div className="info">
                <span>Instruções</span>
                <span>Remeter NFe para o seguinte endereço: financeiro@actionooh.art.br</span>
              </div>
              <div className="observacoes">
              <span className="observacoes-header">Observações</span>
              <span>Remeter NFe para o seguinte endereço: financeiro@actionooh.art.br</span>
            </div>
            </div>
          </div>

          <div className={activeContent === "agencia" ? "visible" : "hidden" }>
            <div className="info-container">
            <div className="info">
                <span>Nome</span>
                <span>ACTION MIDIA PARTNERS SERVIÇOS DE MARKETING LTDA</span>
              </div>
              <div className="info">
                <span>CNPJ</span>
                <span>23.473.087</span>
              </div>
              <div className="info">
                <span>Endereço</span>
                <span>RUA NATINGUI, 862, VILA MADALENA</span>
              </div>
              <div className="info">
                <span>Cidade</span>
                <span>SÃO PAULO</span>
              </div>
              <div className="info">
                <span>Estado</span>
                <span>SP</span>
              </div>
              <div className="info">
                <span>CEP</span>
                <span>05.443-002</span>
              </div>
              <div className="info">
                <span>Telefone</span>
                <span>99999-9999</span>
              </div>
              <div className="info">
                <span>E-mail</span>
                <span>financeiro@actionooh.art.br</span>
              </div>
            </div>
          </div>

          <div className={activeContent === "veiculo" ? "visible" : "hidden" }>
            <div className="info-container">
              <div className="info">
                <span>Nome</span>
                <span>RADIO ITATIAIA LIMITADA</span>
              </div>
              <div className="info">
                <span>CNPJ</span>
                <span>17.270.950/001-39</span>
              </div>
              <div className="info">
                <span>Endereço</span>
                <span>R ITATIAIA, 117</span>
              </div>
              <div className="info">
                <span>Cidade</span>
                <span>BELO HORIZONTE</span>
              </div>
              <div className="info">
                <span>UF</span>
                <span>MG</span>
              </div>
              <div className="info">
                <span>CEP</span>
                <span>31210-170</span>
              </div>
              <div className="info">
                <span>Telefone</span>
                <span>9999-999</span>
              </div>
              <div className="info">
                <span>E-mail</span>
                <span>exemplo@email.com</span>
              </div>
              <div className="info">
                <span>IE</span>
                <span>ISENTO</span>
              </div>
              <div className="info">
                <span>Tipo</span>
                <span>RADIO</span>
              </div>
              <div className="info">
                <span>Estação</span>
                <span>ITATIAIA FM</span>
              </div>
            </div>
          </div>

          <div className={activeContent === "cliente" ? "visible" : "hidden" }>
            <div className="info-container">
              <div className="info">
                <span>Nome</span>
                <span>CIA ULTRAGAZ S/A</span>
              </div>
              <div className="info">
                <span>CNPJ</span>
                <span>61.602.199/0001-12</span>
              </div>
              <div className="info">
                <span>Endereço</span>
                <span>AV BRIGADEIRO LUIS ANTONIO, 1343</span>
              </div>
              <div className="info">
                <span>Cidade</span>
                <span>SÃO PAULO</span>
              </div>
              <div className="info">
                <span>Estado</span>
                <span>SP</span>
              </div>
              <div className="info">
                <span>CEP</span>
                <span>01.317-910</span>
              </div>
              <div className="info">
                <span>Telefone</span>
                <span>99999-9999</span>
              </div>
              <div className="info">
                <span>E-mail</span>
                <span>exemplo@email.com</span>
              </div>
              <div className="info">
                <span>IE</span>
                <span>ISENTO</span>
              </div>
            </div>
          </div>
        </InfoCard>
      </Content>      
    </Container>
  )
}