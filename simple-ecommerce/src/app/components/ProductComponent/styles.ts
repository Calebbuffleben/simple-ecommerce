import styled from "styled-components";

export const ProductPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ProductImage = styled.div`
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    max-width: 40%;
    margin-bottom: 0;
  }
`;

export const ProductInfo = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
    width: 50%;
  }
`;

export const ProductTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

export const ProductDescription = styled.p`
  color: #666;
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

export const ProductPrice = styled.p`
  font-size: 1.75rem;
  color: #ff4500;
  margin-bottom: 2rem;
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.5rem;

  p {
    margin-right: 1rem;
  }
`;

export const StarIcon = styled.span`
  color: #ffcc00;
`;

export const AddToCartButton = styled.button`
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