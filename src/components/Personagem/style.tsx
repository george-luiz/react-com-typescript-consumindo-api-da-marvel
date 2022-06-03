import { Box, styled } from "@mui/material";

export const BoxPersonagem = styled(Box)`
    table {
        width: 100%;
        margin: 10px 0 20px 0;
        border: 0.5px solid black;
        border-collapse: collapse;
      }
      
      th, .td {
        border: 0.5px solid black;
        text-align: center;
        padding: 5px;
        border-collapse: collapse;
      }

      td {
        text-align: center;
      }

      .corTableaError {
        background-color: #ad2e24;

        .corLetraError{
          color: white;
        }
      }
    }
`;


export const BoxInformacoesPersonagem = styled(Box)`
    background-color: #ad2e24;
    color: white;

    li {
      list-style-type: none;
    }
`;
