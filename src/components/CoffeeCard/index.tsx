import { Tag } from "@components/Tag";
import { CoffeeCardSizeProps, Container, Content, Currency, Description, Image, Info, Name, Price, Value } from "./styles";

import irlandesImg from '@assets/irlandes.png'
import { PressableProps, TouchableOpacityProps } from "react-native";
import Animated, { Easing, SlideInRight, FadeInRight, SlideInUp, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(Container)


type Props = PressableProps & {
    size?: CoffeeCardSizeProps;
    index: number;
}

export function CoffeeCard({size = "DEFAULT", index, ...rest}: Props) {
    return (
        <AnimatedTouchableOpacity 
            entering={SlideInRight.delay(600 + index * 50).duration(800).damping(15)}
            size={size} 
            {...rest}
        >
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
        </AnimatedTouchableOpacity>
    );
}