import { ImageSourcePropType, TouchableOpacityProps } from "react-native";
import { Container, Content, Currency, Description, Image, Info, Name, Price, Value } from "./styles";

import irlandesImg from '@assets/irlandes.png'

type Props = TouchableOpacityProps & {
    id: string;
    tag: string;
    name: string;
    price: number;
    image: ImageSourcePropType;
    description: string;
};

export function CoffeeItem({id, tag, name, price, image, description, ...rest}: Props) {
    return (
        <Container key={id} {...rest}>
            <Image
                source={image}
            />

            <Content>
                <Info>
                    <Name>{name}</Name>
                    <Description>
                        {description}
                    </Description>
                </Info>

                <Price>
                    <Currency>R$</Currency>
                    <Value>{price}</Value>
                </Price>
            </Content>
        </Container>
    );
}