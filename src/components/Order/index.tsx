import { Button } from "@components/Button";
import { Container, Row, Label, Value } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useCart } from "@hooks/index";
import { priceFormatter } from "@utils/currencyFormater";
import { cartStorageRemoveAll } from "@storage/cart/CartStorageRemoveAll";

export const Order: React.FC = () => {
    const { cart, clearCart } = useCart();
    const navigation = useNavigation();

    const total = cart.reduce((acc, item) => acc += item.price * item.quantity, 0);

    const handleNavigateToPurchaseCompleted = () => {
        clearCart();
        navigation.navigate("purchase-completed");
    }

    return (
        <Container>
            <Row>
                <Label>Valor total</Label>
                <Value>R$ {priceFormatter.format(total)}</Value>
            </Row>

            <Button 
                name="Confirmar pedido"
                color="SECONDARY"
                onPress={() => handleNavigateToPurchaseCompleted()}  
            />
        </Container>
    );
}