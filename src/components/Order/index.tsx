import { Button } from "@components/Button";
import { Container, Row, Label, Value } from "./styles";

export const Order: React.FC = () => {
    return (
        <Container>
            <Row>
                <Label>Valor total</Label>
                <Value>R$ 9,90</Value>
            </Row>

            <Button 
                name="Confirmar pedido"
                color="SECONDARY"    
            />
        </Container>
    );
}