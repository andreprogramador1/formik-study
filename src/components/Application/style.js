import styled from 'styled-components'

export const Container = styled.div`
    background-color: #668788;
    width: 10%;
    padding: 20px;
    margin: auto;
    border-radius: 7px;
    color: #1c2f2f;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 170px;
    margin: auto;

    input {
      outline: none;
      border: 1px solid #dbe2e4;
      padding: 5px;
      margin: 10px 0;
      border-radius: 5px;
    }

    h1 {
      display: flex;
      justify-content: center;
      color: #1c2f2f;
    }

    button {
      background-color: #1b393a;
      border: none;
      padding: 10px 70px;
      margin-top: 20px;
      border-radius: 500px;
      color: white;
    }
  }
`;