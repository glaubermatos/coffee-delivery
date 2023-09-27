import { Text, TouchableOpacity, View } from "react-native";
import { CartIconContainer, Container, Content, Highlight, Label, Message, ShowCartButtonLink } from "./styles";
import Animated, { Easing, FadeInUp, SlideOutDown } from "react-native-reanimated";
import { ArrowRight, ShoppingCart } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { Badge } from "@components/Badge";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import { useCart } from "@hooks/index";

type Props = {
    quantity: number;
    productName: string;
    size: string;
}


export const MessageItemAddedToCart: React.FC<Props> = ({quantity, productName, size}) => {
    const { cart } = useCart();

    const { COLORS } = useTheme();
    const navigation = useNavigation();

    function handleNavigateToCart() {
        navigation.navigate('cart');
        Toast.hide();
    }

    return (
        <Container
            onPress={handleNavigateToCart}
        >
            <Content>
                <CartIconContainer>
                    <ShoppingCart size={20} color={COLORS.WHITE} weight="fill" />
                    <Badge value={cart.length} />
                </CartIconContainer>

                <Message>
                    {`${quantity} caf${quantity > 1 ? 'és' : 'é'} `} 
                    <Highlight>{productName}</Highlight> 
                    {` de `} 
                    <Highlight>{size}</Highlight>
                    {` adicionado ao carrinho`} 
                </Message>

                <ShowCartButtonLink
                    onPress={handleNavigateToCart}
                >
                    <Label>VER</Label>
                    <ArrowRight style={{marginLeft: 4}} color={COLORS.PURPLE} size={16} />
                </ShowCartButtonLink>

            </Content>
        </Container>
    );
}