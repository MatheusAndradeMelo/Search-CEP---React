import { FiSearch } from "react-icons/fi";
import {
  Container,
  ContainerInput,
  ButtonSearch,
  Title,
  ThemeText,
  Main,
} from "./styles.js";
import { useState } from "react";
import { GlobalStyles } from "./GlobalStyles";
import { lightTheme, darkTheme } from "./themes";
import swel from "sweetalert2";

import api from "./services/api";
import { ThemeProvider } from "styled-components";
import Switch from '@mui/material/Switch';

function App() {
  const [input, setInput] = useState("");
  const [cep, setCep] = useState({});
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  async function handleSearch() {
    //cep teste : 01310930/json/
    if (input === "") {
      swel.fire({
        icon: "error",
        title: "Oops...",
        text: "Digite um cep!",
      });
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput("");
    } catch {
      alert("Ops erro ao buscar");
      setInput("");
    }
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Container>
        <ThemeText>Alterar tema</ThemeText>
        <Switch color="primary" onClick={() => themeToggler()}></Switch>
        <Title>Buscador de CEP</Title>

        <ContainerInput>
          <input
            type="text"
            placeholder="Digite seu cep..."
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />

          <ButtonSearch onClick={handleSearch}>
            <FiSearch size={25} color="#A9A9A9" />
          </ButtonSearch>
        </ContainerInput>

        {Object.keys(cep).length > 0 && (
          <Main>
            <h2>CEP: {cep.cep}</h2>

            <span>{cep.logradouro}</span>
            <span>Complemento: {cep.complemento}</span>
            <span>Bairro: {cep.bairro}</span>
            <span>
              Cidade/Estado: {cep.localidade} - {cep.uf}
            </span>
          </Main>
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App;
