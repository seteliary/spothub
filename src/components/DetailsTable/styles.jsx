import styled from "styled-components";

export const DetailsTableContainer = styled.table`
  width: calc(100% - 32px);
  margin: 12px 16px 18px 16px;
  border-collapse: collapse;

  thead {
    background-color: #F0F0F0;
  }

  th, td {
    border: 2px solid #B0B0B0;
    padding: 6px;
    width: calc(100%/8);
  }

  th:first-child, td:first-child {
    width: 250px;
  }

  @media (max-width: 640px) {
    width: 100%;

    th, td {
      min-width: 170px;
    }
  }
`