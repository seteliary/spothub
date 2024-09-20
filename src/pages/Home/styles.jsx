import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Content = styled.main`
  width: 100%;
  height: 88vh;
  max-width: 1280px;
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  .filters {
    margin-top: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;

    .inputs {
      display: flex;
      align-items: center;
      gap: 24px;
      width: 100%;
    }
  }

  #search-input {
    border: none;

    &:focus {
    outline: none;
    }
  }

  #search-input::placeholder {
    color: #B0B0B0;
    font-size: 14px;
  }

  .input-search {
    display: flex;
    align-items: center;
    padding: 8.5px;
    border-bottom: 2px solid #B0B0B0;

    .fa-search {
      cursor: pointer;
      color: #B0B0B0;
      font-size: 14px;
    }
  }

  button[type="reset"] {
    width: 145px;
    align-self: flex-end;
    color: #004AAD;
    cursor: pointer;
    text-decoration: underline;
    transition: 0.4s ease-in-out;

    &:hover {
      color: #1B6CD7;
    }

    .fa-trash-alt {
      margin-right: 7px;
    }
  }

  @media (max-width: 640px) {
    .filters, .inputs {
      flex-direction: column;
    }

    select {
      width: 100%;
    }

    .input-search {
      width: 100%;
      justify-content: space-between;
    }

    button[type="reset"] {
      width: 110px;
      align-self: flex-start;
    }
  }
`
