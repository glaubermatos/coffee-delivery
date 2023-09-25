import { Text, TouchableOpacity, View } from "react-native";
import { CartIconContainer, Container, Content, Highlight, Label, Message, ShowCartButtonLink } from "./styles";
import Animated, { Easing, FadeInUp, SlideOutDown } from "react-native-reanimated";
import { ArrowRight, ShoppingCart } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { Badge } from "@components/Badge";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";

const AnimatedContainer = Animated.createAnimatedComponent(Container)

export const MessageItemAddedToCart: React.FC = () => {
    const { COLORS } = useTheme();
    const navigation = useNavigation();

    function handleNavigateToCart() {
        Toast.hide();
        navigation.navigate('cart');
    }

    return (
        <Container
            // sharedTransitionTag="messageAddedItemToCart"
            // entering={FadeInUp.duration(400).easing(Easing.quad)}
            // exiting={SlideOutDown.delay(4000).duration(400)}
            onPress={handleNavigateToCart}
        >
            <Content>
                <CartIconContainer>
                    <ShoppingCart size={20} color={COLORS.WHITE} weight="fill" />
                    <Badge value={1} />
                </CartIconContainer>

                <Message>
                    {`1 café `} 
                    <Highlight>Irlandês</Highlight> 
                    {` de `} 
                    <Highlight>227ml</Highlight>
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