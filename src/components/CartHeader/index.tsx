import { ArrowLeft, ArrowLineLeft, ArrowsClockwise, MapPin, ShoppingCart } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { IconButton } from "@components/IconButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated, { AnimateProps, FadeInRight, FadeOutUp, SharedValue, SlideInLeft, SlideInRight, SlideInUp, SlideOutRight, StyleProps, interpolate, interpolateColor, useAnimatedStyle } from "react-native-reanimated";
import { TouchableOpacity, View, ViewProps } from "react-native";
import { ReactNode } from "react";
import { Badge } from "@components/Badge";
import { Container, Title } from "./styles";
import { useNavigation } from "@react-navigation/native";

export const CartHeader: React.FC = () => {
    const navigation = useNavigation();
    const { COLORS } = useTheme();

    const insets = useSafeAreaInsets();
    const paddingTop = insets.top + 32;

    return (
        <Container
            style={[{paddingTop}]}
        >
            {/* <Animated.View 
                entering={SlideInLeft.duration(400).delay(250)}
                exiting={SlideOutRight.duration(400)}
            > */}
                <IconButton 
                    onPress={navigation.goBack}
                    icon={ArrowLeft} 
                    size={24} 
                    color={COLORS.GRAY_100} 
                    weight="regular"
                />
            {/* </Animated.View> */}

            <Title>Carrinho</Title>

            <View style={{width: 24}} />
        </Container>
    );
} 