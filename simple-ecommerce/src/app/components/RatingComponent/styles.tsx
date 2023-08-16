import styled from "styled-components";

export const RatingContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 1.5rem;

  p {
    margin-right: 1rem;
  }
`;

export const StarIcon = styled.span`
  color: #ffcc00;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #f0b300;
  }

  &.selected {
    color: #f0b300;
  }
`;

export const ReviewForm = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ReviewInput = styled.textarea`
  width: 100%;
  max-width: 400px;
  height: 100px;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

export const SubmitButton = styled.button`
  padding: 1rem 2.5rem;
  font-size: 1.25rem;
  background-color: #ff4500;
  border: none;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e63900;
  }
`;