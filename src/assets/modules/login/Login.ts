import styled from "styled-components";

export const ContainerHome = styled.div`
  display: flex;
  background-color: #f5f4f9;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
`;
export const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 100vh;
  z-index: 0;

  img {
    max-width: 1200px;
    height: 80vh;
  }
  @media screen and (max-width: 1500px) {
    img {
      height: 70vh;
    }
  }
  @media screen and (max-width: 1370px) {
    img {
      height: 60vh;
    }
  }
  @media screen and (max-width: 1300px) {
    display: none;

    img {
      display: none;
    }
  }
  /* background-color: black; */
`;
export const Container = styled.div`
  display: flex;
  background-color: #ffffff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 809px;
  width: 60%;
  height: 100vh;
  border-bottom-left-radius: 24px;
  border-top-left-radius: 24px;
  z-index: 1;
  box-shadow: #bbc0cd66;

  @media screen and (max-width: 1300px) {
    width: 100%;
    max-width: 1300px;
  }
`;
export const ContainerLogin = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px;
  padding-left: 30%;
  padding-right: 30%;
  position: relative;

  .error {
    border: 1px solid red;
  }
  .logo {
    width: 80%;
    margin-bottom: 10px;
  }
  h1 {
    font-size: 2em;
    text-align: left;
    color: black;
    width: 80%;
    margin-bottom: 10px;
  }
  .group-form {
    position: relative;
  }
  div label {
    font-size: 1em;
    color: #616161;
    position: absolute;
    left: 11px;
    bottom: 22px;
    background-color: white;
  }
  .help {
    display: flex;
    width: 320px;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;
    align-items: start;

    .link-lembrar-me {
      display: flex;
      align-items: center;
      gap: 5px;
      color: #616161;
    }
    div a {
      color: #2c4d9c;
      text-decoration: none;
      cursor: pointer;
    }
  }
  .ou-entao {
    display: flex;
    gap: 3px;
    width: 320px;
    justify-content: center;
    text-align: center;
    color: #616161;
  }

  .linha-traco {
    border-top: 1px solid #616161;
    margin-top: 10px;
    width: 25px;
    height: 0;
  }
  .button-cadastre-se {
    background-color: #00c247;
  }
  button:hover {
    background: #181515;
    box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.2);
    text-shadow: none;
    transition: 1s;
  }

  @media screen and (max-width: 1300px) {
    border: #757575;
    background-color: #ffffff;
    width: 400px;
    height: 70vh;
    justify-content: center;
    align-items: center;
    padding-left: 0px;
    padding-right: 0px;
    border: 1px solid #757575;
    border-radius: 24px;
  }
  @media screen and (max-width: 401px) {
    width: 100%;
    max-width: 400px;
    margin-left: 2px;
    margin-right: 2px;
    height: 70vh;

    h1 {
      width: 90%;
    }
    .logo {
      width: 90%;
      margin-top: 10px;
    }
  }
`;
export const ContainerInput = styled.input`
  padding: 0.5em;
  border: 1px solid #757575;
  border-radius: 10px;
  display: block;
  width: 320px;
  padding-top: 15px;
  font-size: 15px;
  height: 35px;
  outline: none;
`;
export const Button = styled.button`
  border: none;
  font-family: "Nunito", sans-serif;
  font-size: 1em;
  border-radius: 5px;
  font-size: 1.2em;
  background: gray;
  border: 0;
  margin-bottom: 1em;
  color: #ffffff;
  padding: 0.5em 0.6em;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  display: relative;
  cursor: pointer;
  width: 320px;
  height: 40px;
`;
