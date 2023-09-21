import { MapPin } from "phosphor-react-native";
import { City, Container, Location } from "./styles";
import { useTheme } from "styled-components/native";
import { IconButton } from "@components/IconButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated, { SharedValue, StyleProps, interpolate, interpolateColor, useAnimatedStyle } from "react-native-reanimated";

const ContainerAnimated = Animated.createAnimatedComponent(Container);
const CityTextAnimated = Animated.createAnimatedComponent(City);

type Props = {
    style: StyleProps;
    introContainerPosition: SharedValue<number>
}

export function HomeHeader({style, introContainerPosition}: Props) {
    const { COLORS } = useTheme();

    const insets = useSafeAreaInsets();

    const paddingTop = insets.top + 32;

    const cityTextAnimatedStyles = useAnimatedStyle(() => {
      return {
        color: interpolateColor(introContainerPosition.value, [0, -180], [COLORS.GRAY_900, COLORS.GRAY_200]),
      }
    })

    return (
        <ContainerAnimated style={[style, {paddingTop}]}>
            <Location>
                <MapPin weight="fill" size={20} color={COLORS.PURPLE} />

                <CityTextAnimated style={cityTextAnimatedStyles}>
                    Santa Inês, BA
                </CityTextAnimated>
            </Location>

            <IconButton />
        </ContainerAnimated>
    );
} 