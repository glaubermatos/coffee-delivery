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

const AnimatedContainer = Animated.createAnimatedComponent(Container);

type Props = {
    index: number;
}

export const CartItem: React.FC<Props> = ({index}) => {
    const { COLORS } = useTheme();

    return (
        <Container>
            <ProductImage source={irlandesImg} />

            <Info>
                <About>
                    <Title>
                        <Name>Irlandês</Name>

                        <Size>227ml</Size>
                    </Title>

                    <ItemValue>R$ 9,90</ItemValue>
                </About>

                <Actions>
                    <Counter showBorders />

                    <TrashButton>
                        <Trash size={20} color={COLORS.PURPLE} weight="regular" />
                    </TrashButton>
                </Actions>
            </Info>
        </Container>
    );
}