import styled from "styled-components";

export const TableContainer = styled.table`
  margin-top: 12px;
  border: 2px solid #B0B0B0;
  border-collapse: collapse;
  color: #515151;

  thead, tfoot {
    background-color: #F0F0F0;
  }

  th, td {
    border: 2px solid #B0B0B0;
    padding: 6px;
  }

  tfoot tr td {
    border: none;
  }

  .fas {
    cursor: pointer;
  }

  .page-indicator {
    display: flex;
    align-items: center;
    justify-content: space-around;

    .fas {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      color: #fff;
      font-size: 11px;
      border-radius: 999px;
      padding-top: 2px;

      &.fa-arrow-left {
        background-color: #B0B0B0;
      }

      &.fa-arrow-right {
        background-color: #004AAD;
      }
    }
  }
`

export const IconButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  button {
    text-decoration: none;
    width: 28px !important;

    .fas {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      color: #fff;
      font-size: 11px;
      border-radius: 999px;
      padding-top: 2px;

      &.fa-bars {
        background-color: #515151;
      }
    }
  }
`
