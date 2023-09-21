import { StyleProp, Text, TextProps, TouchableOpacityProps, ViewProps, ViewStyle } from "react-native";
import { Container } from "./styles";
import { IconProps, ShoppingCart, Icon, IconWeight  } from "phosphor-react-native";
import { DefaultTheme, useTheme } from "styled-components/native";
import Animated, { StyleProps } from "react-native-reanimated";

const AnimatedContainer = Animated.createAnimatedComponent(Container);

export type IconButtonProps = (props: IconProps) => JSX.Element;

type Props = Animated.AnimateProps<StyleProps> & {
    style?: StyleProps;
    icon: IconButtonProps;
    weight?: IconWeight;
    size: number;
    // color?: string;
}

export function IconButton({icon: Icon, size = 20, weight = 'fill', color, ...rest}: Props) {
    return (
        <AnimatedContainer
            activeOpacity={0.7}
            {...rest}
        >
            <Icon weight={weight} size={size} color={color} />
        </AnimatedContainer>
    );
}