import { Text, TouchableOpacity, View } from "react-native";
import { CartIconContainer, Container, Content, Highlight, Label, Message, ShowCartButtonLink } from "./styles";
import Animated, { Easing, FadeInUp } from "react-native-reanimated";
import { ArrowRight, ShoppingCart } from "phosphor-react-native";
import { useTheme } from "styled-components/native";

const AnimatedContainer = Animated.createAnimatedComponent(Container)

export const MessageItemAddedToCart: React.FC = () => {
    const { COLORS } = useTheme();

    return (
        <AnimatedContainer
            entering={FadeInUp.duration(400).easing(Easing.quad)}
        >
            <Content>
                <CartIconContainer>
                    <ShoppingCart size={20} color={COLORS.WHITE} weight="fill" />
                </CartIconContainer>

                <Message>
                    {`1 café `} 
                    <Highlight>Irlandês</Highlight> 
                    {` de `} 
                    <Highlight>227ml</Highlight>
                    {` adicionado ao carrinho`} 
                </Message>

                <ShowCartButtonLink>
                    <Label>VER</Label>
                    <ArrowRight style={{marginLeft: 4}} color={COLORS.PURPLE} size={16} />
                </ShowCartButtonLink>

            </Content>
        </AnimatedContainer>
    );
}