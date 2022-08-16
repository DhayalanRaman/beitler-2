import styled from 'styled-components';

export const Styles = styled.div`
  padding: 1rem;
  table {
    border-spacing: 0;
    border: 2px solid darkgray;
    tr,    
    th,
    td{
      margin: 0;
      padding: 0.5rem;
      // text-align: center;
      border-bottom: 2px solid darkgray;
      border-right: 2px solid darkgray;
      :last-child {
        border-right: 0;
      }
    }
  }
`