import styled from "styled-components";

export const Background = styled.div`
  background-color: #004AAD;
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  max-width: 1280px;
  padding: 0 16px;

  .fa-user-circle {
    color: #fff;
    font-size: 24px;
    cursor: pointer;
  }
`

export const Logo = styled.img`
  height: 70%;
  user-select: none;
`

