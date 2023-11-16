import React, { FC } from "react";
import { Container } from "./styles";

interface IProductContainerProps { children: React.ReactNode };

const ProductContainer: FC<IProductContainerProps> = ({ children } )  => (
    <Container>
        { children }
    </Container>
);

export default ProductContainer;