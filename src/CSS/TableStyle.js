import styled from 'styled-components';

export const Styles = styled.div`
padding: 1rem;
table {   
   border-spacing: 0;
   border: 1px solid #dddddd;
   tr {
     :last-child {
       td {        
         border-bottom: 0;
       }       
     }
   }
   th,
   td {   
    background-color: #ffffff;  
     margin: 0;
    //  width: 100% !important;
     padding: 0.5rem;
     border-bottom: 2px solid #dddddd;
     border-right: 2px solid #dddddd;
    //  text-align: center;   
     font-size: .85rem;
     font-weight: 500;
     :last-child {
       border-right: 0;
     }
   }
`
