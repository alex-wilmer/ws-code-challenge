import { injectGlobal as css } from 'emotion';

export default css`
  * {
    outline: none;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background-color: #0f0431;
  }

  #root {
    position: relative;
    width: 155px;
  }

  .App {
    position: absolute;
    display: flex;
    flex-direction: column;
    padding: 8px;
    justify-content: center;
    align-items: center;
  }

  .logo {
    width: 75vw;
    margin: 12px 0;
  }

  input {
    background: transparent;
    border: 2px solid white;
    border-radius: 10px;
    padding: 4px 5px;
    margin: 6px 0;
    color: white;
  }

  input:focus {
    box-shadow: 0px 0px 30px 0px rgba(175, 255, 124, 0.75);
    border-color: #19ff19;
  }

  ::placeholder {
    color: white;
    opacity: 0.8;
  }

  .login-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: #88c53a;
    padding: 8px 18px;
    border-radius: 25px;
    color: #fff;
    border: 0;

    &:hover {
      background-color: #5f9617;
    }
  }

  .sk-spinner {
    margin-left: 8px;
    width: 10px;
    height: 10px;
  }

  .header {
    color: white;
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
  }

  .menu-btn {
    margin-left: auto;
    font-size: 20px;
    cursor: pointer;

    &:hover {
      color: chartreuse;
    }
  }

  .logout {
    cursor: pointer;
    font-size: 10px;
    font-weight: bold;
    margin-top: 2px;

    &:hover {
      color: chartreuse;
    }
  }

  label {
    color: white;
  }

  .Menu {
    background-color: #ff0047;
    width: 100%;
    height: 175px;
    color: white;
    box-sizing: border-box;

    & > * {
      box-sizing: border-box;
      width: 100%;
      text-align: center;
      padding: 8px;
      cursor: pointer;
      text-transform: uppercase;
      font-weight: bold;

      &:hover {
        background-color: #b8224c;
      }
    }
  }
`;
