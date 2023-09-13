import { TouchableOpacityProps } from "react-native";
import { Container } from "./styles";
import { ShoppingCart } from "phosphor-react-native";
import { useTheme } from "styled-components/native";

type Props = TouchableOpacityProps & {}

export function IconButton({...rest}: Props) {
    const { COLORS } = useTheme();

    return (
        <Container
            activeOpacity={0.7}
            {...rest}
        >
            <ShoppingCart weight="fill" size={20} color={COLORS.YELLOW_DARK} />
        </Container>
    );
}