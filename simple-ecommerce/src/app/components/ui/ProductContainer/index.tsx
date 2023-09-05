import React, { FC } from "react";
import { Container } from "./styles";

type Props = { children: React.ReactNode };

const ProductContainer: FC<Props> = ({ children } )  => (
    <Container>
        { children }
    </Container>
);

export default ProductContainer;