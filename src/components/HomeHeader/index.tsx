import { ArrowLeft, ArrowLineLeft, ArrowsClockwise, MapPin, ShoppingCart } from "phosphor-react-native";
import { City, Container, Location } from "./styles";
import { useTheme } from "styled-components/native";
import { IconButton } from "@components/IconButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated, { AnimateProps, FadeInRight, FadeOutRight, FadeOutUp, SharedValue, SlideInLeft, SlideInRight, SlideInUp, SlideOutRight, StyleProps, interpolate, interpolateColor, useAnimatedStyle } from "react-native-reanimated";
import { TouchableOpacity, ViewProps } from "react-native";
import { ReactNode } from "react";
import { Badge } from "@components/Badge";
import { useNavigation } from "@react-navigation/native";
import { useCart } from "@hooks/index";

const ContainerAnimated = Animated.createAnimatedComponent(Container);
const CityTextAnimated = Animated.createAnimatedComponent(City);

type Props = Animated.AnimateProps<ViewProps> & {
    style?: StyleProps;
    introContainerPosition?: SharedValue<number>
    shownBackButton?: boolean;
}

export function HomeHeader({style, introContainerPosition = undefined, shownBackButton = false}: Props) {
    const { cart } = useCart();
    const { COLORS } = useTheme();
    const navigation = useNavigation()

    const insets = useSafeAreaInsets();
    const paddingTop = insets.top + 32;

    const cityTextAnimatedStyles = useAnimatedStyle(() => {
      return {
        color: introContainerPosition && interpolateColor(introContainerPosition.value, [0, -180], [COLORS.GRAY_900, COLORS.GRAY_200]),
      }
    })

    function handleNavigateToCart() {
        navigation.navigate('cart')
    }

    return (
        <ContainerAnimated 
            style={[style, {paddingTop}]}
        >
            {
                shownBackButton ? (
                        // <Animated.View 
                        //     entering={SlideInLeft.duration(400).delay(250)}
                        //     exiting={FadeOutRight.duration(200)}
                        // >
                            <IconButton 
                                onPress={navigation.goBack}
                                icon={ArrowLeft} 
                                size={24} 
                                color={COLORS.WHITE} 
                                weight="regular"
                            />
                        // </Animated.View>
                    ) : (
                        <Location>
                            <MapPin weight="fill" size={20} color={COLORS.PURPLE} />
            
                            <CityTextAnimated style={cityTextAnimatedStyles}>
                                Santa Inês, BA
                            </CityTextAnimated>
                        </Location>
                    )
            }

            <Animated.View sharedTransitionTag="headerHeightAnimateTag">
                <IconButton
                    icon={ShoppingCart} 
                    size={20} 
                    color={shownBackButton ? COLORS.WHITE : COLORS.YELLOW_DARK} 
                    onPress={handleNavigateToCart}
                >
                    {
                        cart.length > 0 && <Badge value={cart.length} /> 
                    }
                </IconButton>
            </Animated.View>
        </ContainerAnimated>
    );
} 