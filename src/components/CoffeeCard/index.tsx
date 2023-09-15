import { Container, Content, Currency, Description, Info, Name, Price, Value } from "./styles";

export function CoffeeCard() {
    return (
        <Container>
            <Content>
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