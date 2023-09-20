import { MapPin } from "phosphor-react-native";
import { City, Container, Location } from "./styles";
import { useTheme } from "styled-components/native";
import { IconButton } from "@components/IconButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated, { AnimatedStyleProp, StyleProps } from "react-native-reanimated";

const ContainerAnimated = Animated.createAnimatedComponent(Container);

type Props = {
    style: StyleProps
}

export function HomeHeader({style}: Props) {
    const { COLORS } = useTheme();

    const insets = useSafeAreaInsets();

    const paddingTop = insets.top + 32;

    return (
        <ContainerAnimated style={[style, {paddingTop}]}>
            <Location>
                <MapPin weight="fill" size={20} color={COLORS.PURPLE} />

                <City>
                    Santa Inês, BA
                </City>
            </Location>

            <IconButton />
        </ContainerAnimated>
    );
} 