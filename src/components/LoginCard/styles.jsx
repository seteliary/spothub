import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 16px;

  @media (max-width: 641px) {
    flex-direction: column;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #004AAD;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
  border-top-left-radius: 73px;
  border-bottom-left-radius: 73px;
  height: 370px;

  .logo {
    width: 300px;
    height: 100%;
    object-fit: contain;
    margin-right: 16px;
    padding: 32px;
  }

  @media (max-width: 641px) {
    height: 100%;
    border-radius: 0;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
  }
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
  padding: 40px 56px;
  width: 100%;

  .senha-container {
    display: flex;
    flex-direction: column;
    gap: 16px;

    a {
      font-size: 12px;
      text-decoration: none;
      color: #004AAD;
      cursor: pointer;
    }
  }

  @media (max-width: 641px) {
    padding: 40px;
  }
`