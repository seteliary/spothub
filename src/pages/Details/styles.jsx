import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Content = styled.main`
  width: 100%;
  max-width: 1280px;
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: #515151;
`

export const InfoCard = styled.div`
  width: 100%;
  border: 2px solid #B0B0B0;
  margin-top: 12px;

  .active-tab {
    background-color: #004AAD;
    color: #fff;
  }

  .inactive-tab {
    background-color: #F0F0F0;
  }

  .hidden {
    display: none;
  }

  .visible {
    display: block;
  }

  .info-container {
    display: flex;
    flex-wrap: wrap;
    column-gap: 64px;
    row-gap: 28px;
    padding: 16px;
  }

  .info {
    display: flex;
    flex-direction: column;
    width: 38%;

    span:first-child {
      font-weight: bold;
      margin-bottom: 4px;
    }
  }

  .observacoes {
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 2px solid #B0B0B0;

    .observacoes-header {
      background-color: #F0F0F0;
      width: 100%;
      font-weight: bold;
      border-bottom: 2px solid #B0B0B0;
    }

    span {
      padding: 8px;
    }
  }

  .card-header {
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    background-color: #F0F0F0;
    border-bottom: 2px solid #B0B0B0;

    @media (max-width: 640px) {
      overflow: scroll;
    }

    li {
      padding: 8px;
      width: 100%;
      text-align: center;
      font-weight: bold;
      cursor: pointer;

      &:not(li.active-tab):hover {
        background-color: #e1e1e1;
      }

      &:not(li:last-child) {
        border-right: 2px solid #B0B0B0;
      }
    }
  }
`
export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  .fas.fa-arrow-left {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    cursor: pointer;
    color: #fff;
    font-size: 11px;
    border-radius: 999px;
    padding-top: 2px;
    background-color: #004AAD;
    margin-bottom: 1px;
  }
`

export const ButtonLink = styled(Link)`

`