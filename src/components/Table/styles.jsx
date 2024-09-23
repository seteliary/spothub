import styled from "styled-components";

export const Overflow = styled.div`
  overflow-x: auto;

  .info {
    font-size: 14px;
    color: #004AAD;
    margin: 8px 0 16px;

    i {
      margin-right: 5px;
    }
  }
  
  .search-input {
    border: none;
    outline: none;
    margin: 12px 0;
  }

  .search-input, .search-button {
    border-bottom: 2px solid #B0B0B0;
    padding: 8px;
  }

  .search-button {
    padding: 8px 12px 8px 0;
    font-size: 12px;
    color: #B0B0B0;
    cursor: pointer;
  }

  .clear-button {
    cursor: pointer;
    margin-left: 16px;
    padding: 8px;
    border-radius: 8px;
    background-color: #004AAD;
    color: #fff;
    transition: 0.3s ease-in-out;

    &:hover {
      background-color: #1B6CD7;
    }
  }
`

export const TableContainer = styled.table`
  width: 100%;
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

  thead tr th {
    cursor: pointer;

    .fa-sort {
      margin-left: 5px;
      font-size: 14px;
    }
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
    justify-content: space-evenly;

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
        cursor: auto;
      }

      &.fa-arrow-right {
        background-color: #004AAD;
        transition: 0.3s ease-in-out;
        
        &:hover {
          background-color: #1B6CD7;
        }
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
        transition: 0.3s ease-in-out;

        &:hover {
          background-color: #717171;
        }
      }
    }
  }
`
