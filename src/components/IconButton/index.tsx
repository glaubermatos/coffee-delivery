import { StyleProp, Text, TextProps, TouchableOpacityProps, ViewProps, ViewStyle } from "react-native";
import { Container } from "./styles";
import { IconProps, ShoppingCart, Icon, IconWeight  } from "phosphor-react-native";
import { DefaultTheme, useTheme } from "styled-components/native";
import Animated, { StyleProps } from "react-native-reanimated";
import { ReactNode } from "react";

const AnimatedContainer = Animated.createAnimatedComponent(Container);

export type IconButtonProps = (props: IconProps) => JSX.Element;

type Props = TouchableOpacityProps/*  & Animated.AnimateProps<StyleProps> */ & {
    style?: StyleProps;
    icon: IconButtonProps;
    weight?: IconWeight;
    size: number;
    color?: string;
    children?: ReactNode;
}

export const IconButton: React.FC<Props> = ({icon: Icon, size = 20, weight = 'fill', color, children, ...rest}) => {
    return (
        <Container
            activeOpacity={0.7}
            {...rest}
        >
            {children}
            <Icon weight={weight} size={size} color={color} />
        </Container>
    );
}