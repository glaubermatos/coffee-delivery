import { Button } from "@components/Button";
import { Container, Content, Label, ValueTotal } from "./styles";

export const Order: React.FC = () => {
    return (
        <Container>
            <Content>
                <Label>Valor total</Label>
                <ValueTotal>R$ 9,90</ValueTotal>
            </Content>

            <Button name="Confirmar pedido" />
        </Container>
    );
}