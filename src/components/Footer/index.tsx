import React, { ReactNode } from "react";
import { Container } from "./styles";

type Props = {
    children: ReactNode;
}

export const Footer: React.FC<Props> = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    );
}