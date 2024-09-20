import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  font-transform: uppercase;
  color: #004AAD;
  margin-bottom: 6px;
`

export const InputContent = styled.input`
  padding: 12px 8px;
  border: none;
  border-bottom: 2px solid #004AAD;
  color: #515151;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-size: 14px;
    color: #B0B0B0;
  }
`