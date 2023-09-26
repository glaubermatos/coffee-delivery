import { IconButton } from "@components/IconButton";
import { Container, CounterStyleProps, CounterValue } from "./styles";
import { Minus, Plus } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { useState } from "react";

type Props = CounterStyleProps & {};

export const Counter: React.FC<Props> = ({showBorders = false}) => {
    const [value, setValue] = useState(1);

    const {  COLORS } = useTheme();

    function handleAddItem() {
        setValue(previewState => previewState + 1);
    }

    function handleRemoveItem() {
        setValue(previewState => previewState - 1);
    }

    return (
        <Container
            showBorders={showBorders}
        >
            <IconButton 
                icon={Minus} 
                size={20} 
                weight="bold" 
                color={COLORS.PURPLE} 
                onPress={handleRemoveItem}
            />

            <CounterValue>
                {value}
            </CounterValue>

            <IconButton 
                icon={Plus} 
                size={20} 
                weight="bold" 
                color={COLORS.PURPLE} 
                onPress={handleAddItem}
            />
        </Container>
    );
}