import { IconButton } from "@components/IconButton";
import { Container, CounterStyleProps, CounterValue } from "./styles";
import { Minus, Plus } from "phosphor-react-native";
import { useTheme } from "styled-components/native";

type Props = CounterStyleProps & {};

export const Counter: React.FC<Props> = ({showBorders = false}) => {
    const {  COLORS } = useTheme();

    return (
        <Container
            showBorders={showBorders}
        >
            <IconButton icon={Minus} size={20} weight="bold" color={COLORS.PURPLE_DARK} />
            <CounterValue>
                1
            </CounterValue>
            <IconButton icon={Plus} size={20} weight="bold" color={COLORS.PURPLE_DARK} />
        </Container>
    );
}