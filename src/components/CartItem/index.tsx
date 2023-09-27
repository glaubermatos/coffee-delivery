import { Counter } from "@components/Counter";
import { About, Actions, Container, Info, ItemValue, Name, ProductImage, Size, Title, TrashButton } from "./styles";

import irlandesImg from '@assets/irlandes.png'
import { IconButton } from "@components/IconButton";
import { Trash } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import Animated, { FadeInDown, FadeInRight, FadeInUp, SlideInDown } from "react-native-reanimated";
import { useRef } from "react";
import { SwipeableProps } from "react-native-gesture-handler/lib/typescript/components/Swipeable";
import { StorageCartItemProps } from "@storage/dtos/storageCartItemProps";
import { priceFormatter } from "@utils/currencyFormater";

const AnimatedContainer = Animated.createAnimatedComponent(Container);

type Props = {
    index: number;
    data: StorageCartItemProps;
    onRemoveProduct: (id: string, index: number) => void;
}

export const CartItem: React.FC<Props> = ({data, index, onRemoveProduct}) => {
    const { COLORS } = useTheme();

    return (
        <Container>
            <ProductImage source={data.image} />

            <Info>
                <About>
                    <Title>
                        <Name>{data.name}</Name>

                        <Size>{data.size}</Size>
                    </Title>

                    <ItemValue>R$ {priceFormatter.format(data.price)}</ItemValue>
                </About>

                <Actions>
                    <Counter quantity={data.quantity} onChangeQuantity={() => {}} showBorders />

                    <TrashButton onPress={() => onRemoveProduct(data.id, index)}>
                        <Trash size={20} color={COLORS.PURPLE} weight="regular" />
                    </TrashButton>
                </Actions>
            </Info>
        </Container>
    );
}