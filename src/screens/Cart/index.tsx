import { CartHeader } from "@components/CartHeader";
import { Container } from "./styles";
import { Order } from "@components/Order";

export const Cart: React.FC = () => {
    return (
        <Container>
            <CartHeader />

            <Order />
        </Container>
    );
}