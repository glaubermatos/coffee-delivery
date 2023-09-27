import { IconButton } from "@components/IconButton";
import { Container, CounterStyleProps, CounterValue } from "./styles";
import { Minus, Plus } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { useState } from "react";

type Props = CounterStyleProps & {
    quantity: number;
    onDecrement: () => void;
    onIncrement: () => void;
    disabled?: boolean;
};

export const Counter: React.FC<Props> = ({quantity, showBorders = false, onDecrement, onIncrement, disabled = false}) => {
    const {  COLORS } = useTheme();

    return (
        <Container
            showBorders={showBorders}
        >
            <IconButton 
                icon={Minus}
                disabled={disabled}
                size={20} 
                weight="bold" 
                color={COLORS.PURPLE} 
                onPress={onDecrement}
            />

            <CounterValue>
                {quantity}
            </CounterValue>

            <IconButton 
                icon={Plus} 
                disabled={disabled}
                size={20} 
                weight="bold" 
                color={COLORS.PURPLE} 
                onPress={onIncrement}
            />
        </Container>
    );
}