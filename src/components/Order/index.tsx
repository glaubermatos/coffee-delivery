import { Button } from "@components/Button";
import { Container, Row, Label, Value } from "./styles";
import { useNavigation } from "@react-navigation/native";

export const Order: React.FC = () => {
    const navigation = useNavigation();

    function handleNavigateToPurchaseCompleted() {
        navigation.navigate("purchase-completed");
    }

    return (
        <Container>
            <Row>
                <Label>Valor total</Label>
                <Value>R$ 9,90</Value>
            </Row>

            <Button 
                name="Confirmar pedido"
                color="SECONDARY"
                onPress={() => handleNavigateToPurchaseCompleted()}  
            />
        </Container>
    );
}