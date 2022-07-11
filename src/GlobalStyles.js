import { createGlobalStyle } from "styled-components";

/* CSS GLOBAL */
export const GlobalStyles = createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

  body{
    background-color: ${props => props.theme.body}
  }
`;
