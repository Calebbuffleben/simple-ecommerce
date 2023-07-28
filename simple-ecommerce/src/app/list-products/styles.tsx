import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-family: Arial, sans-serif;
`;

export const Th = styled.th`
  background-color: #f2f2f2;
  padding: 10px;
  text-align: left;
  font-weight: 600;
  font-size: 16px;
  color: #333;
`;

export const Td = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  font-size: 14px;
  color: #333;
`;

export const Button = styled.button`
  margin-right: 5px;
  padding: 8px 12px;
  font-size: 14px;
  color: #fff;
  background-color: #f44336;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #d32f2f;
  }
`;

export const EditButton = styled(Button)`
  background-color: #2196f3;

  &:hover {
    background-color: #1976d2;
  }
`;
