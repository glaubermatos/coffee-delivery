import { Button } from "@components/Button";
import { Container, Content, Text, Title } from "./styles";

import DeliveryImg from '@assets/delivery-illustration.svg';
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated, { BounceInLeft, Easing, FadeIn, FadeInDown, SlideInLeft } from "react-native-reanimated";

export const PurchaseCompleted: React.FC = () => {
    const navigation = useNavigation();

    const insets = useSafeAreaInsets();
    const paddingTop = insets.top + 76;

    function handleNavigateToHome() {
        navigation.navigate('home');
    }

    return (
        <Container style={{paddingTop}}>
            <Content>
                <Animated.View 
                    entering={BounceInLeft.delay(300).duration(700)}
                >
                    <DeliveryImg />
                </Animated.View>

                <Animated.View
                    entering={FadeInDown.delay(300)}    
                >
                    <Title>Uhu! Pedido confirmado</Title>

                    <Text>Agora é só aguardar que logo o café chegará até você!</Text>
                </Animated.View>

                <Animated.View
                    entering={FadeIn.delay(700).duration(400)}
                >
                    <Button
                        style={{width: 248}}
                        name="Ir para a Home" 
                        onPress={handleNavigateToHome}
                    />
                </Animated.View>
            </Content>
        </Container>
    );
}