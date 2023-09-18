import { Tag } from "@components/Tag";
import { Container, Content, Currency, Description, Image, Info, Name, Price, Value } from "./styles";

import irlandesImg from '@assets/irlandes.png'
import { PressableProps } from "react-native";

type Props = PressableProps & {}

export function CoffeeCardFocused({...rest}: Props) {
    return (
        <Container {...rest}>
            <Content>
                <Image 
                    source={irlandesImg}
                    width={120}
                    height={120}
                />

                <Tag name="Especial"/>

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