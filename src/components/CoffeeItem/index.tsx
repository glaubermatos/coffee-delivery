import { Container, Content, Currency, Description, Image, Info, Name, Price, Value } from "./styles";

import irlandesImg from '@assets/irlandes.png'

export function CoffeeItem() {
    return (
        <Container>
            <Image
                source={irlandesImg}
            />

            <Content>
                <Info>
                    <Name>Nome</Name>
                    <Description>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia cumque a explicabo eos odio temporibus.
                    </Description>
                </Info>

                <Price>
                    <Currency>R$</Currency>
                    <Value>9,90</Value>
                </Price>
            </Content>
        </Container>
    );
}