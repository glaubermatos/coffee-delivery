import { Tag } from "@components/Tag";
import { CoffeeCardSizeProps, Container, Content, Currency, Description, Image, Info, Name, Price, Value } from "./styles";

import irlandesImg from '@assets/irlandes.png'
import { PressableProps, TouchableOpacityProps } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

const AnimatedTouchableOpacity= Animated.createAnimatedComponent(Container)


type Props = PressableProps & {
    size?: CoffeeCardSizeProps;
}

export function CoffeeCard({size = "DEFAULT", ...rest}: Props) {
    const scale = useSharedValue(1);

    const animatedScaleStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value}]
        }
    })

    function onPressIn() {
        scale.value = withTiming(1.3, { duration: 200 })
    }

    function onPressOut() {
        scale.value = withTiming(1, { duration: 200 })
    }

    return (
        <Container size={size} {...rest}>
            <Content>
                <Image 
                    source={irlandesImg}
                    width={64}
                    height={64}
                />

                <Tag
                    size={size}
                    name="Especial"
                />

                <Info>
                    <Name>
                        Irlandês
                    </Name>

                    <Description>
                        Bebida a base de café, uísque irlandês, açúcar e chantilly
                    </Description>
                </Info>

                <Price>
                    <Currency>
                        R$
                    </Currency>

                    <Value>
                        9,90
                    </Value>
                </Price>
            </Content>
        </Container>
    );
}