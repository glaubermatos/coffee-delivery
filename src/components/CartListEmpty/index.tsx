import { ShoppingCart } from "phosphor-react-native";
import { Container, NoItemsInfo, Text } from "./styles";
import { useTheme } from "styled-components/native";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";

export const CartListEmpty: React.FC = () => {
    const { COLORS } = useTheme();
    const navigation = useNavigation();

    function handleNavigateToHome() {
        navigation.navigate("home")
    }

    return (
        <Container>
            <NoItemsInfo>
                <ShoppingCart size={24} color={COLORS.GRAY_500} weight="fill"/>

                <Text>Seu carrinho está vazio</Text>
            </NoItemsInfo>

            <Button name="Ver catálogo" onPress={handleNavigateToHome} />
        </Container>
    );
}