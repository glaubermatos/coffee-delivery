import { IconButton } from "@components/IconButton";
import { Container, CounterStyleProps, CounterValue } from "./styles";
import { Minus, Plus } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { useState } from "react";

type Props = CounterStyleProps & {
    onChangeQuantity: React.Dispatch<React.SetStateAction<number>>;
    quantity: number;
};

export const Counter: React.FC<Props> = ({onChangeQuantity, quantity, showBorders = false}) => {

    const {  COLORS } = useTheme();

    function handleAddItem() {
        onChangeQuantity(previewState => previewState + 1);
    }

    function handleRemoveItem() {
        onChangeQuantity(previewState => previewState - 1);
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
                {quantity}
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