import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;

  @media (max-width: 768px) {
    max-width: 600px;
    margin: 0 auto;
  }
`;

export const Input = styled.input`
  padding: 10px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;

  @media (max-width: 768px) {
    width: auto;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const Label = styled.label`
  width: 100%;
  font-weight: bold;
  margin: 5px 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  input[type='radio'] {
    margin-right: 10px;
    width: 10px;
  }
`;
