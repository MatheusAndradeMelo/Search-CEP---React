import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background: linear-gradient(#121212, #212b46); */
  color: ${(props) => props.theme.fontColor};
`;

export const Title = styled.div`
  font-size: 65px;
  text-align: center;
  /* color: #fff; */
  color: ${(props) => props.theme.fontColor};
  animation: flipTitle 2s;

  @keyframes flipTitle {
    from {
      transform: rotateX(90deg);
    }
    to {
      transform: rotateX(0deg);
    }
  }
`;

export const ContainerInput = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  padding: 15px;
  margin: 34px 0;
  display: flex;
  border-radius: 8px;
  box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);

  input {
    background-color: transparent;
    border: 0;
    font-size: 20px;
    /* color: #fff; */
    color: ${(props) => props.theme.fontColor};
    outline: none;
    margin-right: 8px;
  }

  input::placeholder {
    /* color: #f1f1f1; */
    color: ${(props) => props.theme.fontColor};
  }
`;

export const ButtonSearch = styled.div`
  background-color: transparent;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.5s;
  color: ${(props) => props.theme.fontColor};

  hover {
    transform: scale(1.2);
  }
`;

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #a9a9a9;
  width: 500px;
  border-radius: 8px;

  h2 {
    margin: 16px 0;
    font-size: 39px;
    color: ${(props) => props.theme.fontColor};
  }

  span {
    margin-bottom: 16px;
    font-weight: bold;
    color: ${(props) => props.theme.fontColor};
  }

  @media (max-width: 620px) {
    .title {
      font-size: 60px;
      color: ${(props) => props.theme.fontColor};
    }

    .main h2 {
      font-size: 28px;
      color: ${(props) => props.theme.fontColor};
    }

    .main {
      width: 80%;
      min-height: 250px;
      color: ${(props) => props.theme.fontColor};
    }
  }
`;

export const ThemeText = styled.div`
  font-size: 20px;
  color: ${(props) => props.theme.fontColor};
`;
