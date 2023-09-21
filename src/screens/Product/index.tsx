import { HomeHeader } from "@components/HomeHeader";
import { AddToCartContainer, Container, Content, Currency, Description, Footer, ImageContainer, Info, Main, Name, OptionsListContainer, Price, ProductImage, Selection, SelectionTitle, SmokeImage, Text, TitleContainer, Value } from "./styles";
import Animated, { SharedTransition, SlideInRight, withSpring } from 'react-native-reanimated';
import { IconButton } from "@components/IconButton";
import { ShoppingCart } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { Tag } from "@components/Tag";
import { View } from "react-native";

import irlandesImg from '@assets/coffee.png'
import SmokeImg from '@assets/smoke_4.svg'
import { Option } from "@components/Option";
import { Button } from "@components/Button";

const AnimatedContainer = Animated.createAnimatedComponent(Container)

export function Product() {
    const { COLORS } = useTheme();

    return (
        <AnimatedContainer>
            <Content>   
                <HomeHeader
                    shownBackButton
                    sharedTransitionTag="headerHeightAnimateTag"
                    style={{
                        height: 120,
                    }}
                />

                <Info>
                    <Main>
                        <TitleContainer>
                            <Tag name="especial" size="FOCUSED" color="secondary" />

                            <Name>Irlandês</Name>
                        </TitleContainer>
                        
                        <Price>
                            <Currency>R$</Currency>
                            <Value>9,90</Value>
                        </Price>
                    </Main>

                    <Description>
                        Bebida a base de café, uísque irlandês, açúcar e chantilly
                    </Description>

                </Info>

            </Content>

            <ImageContainer>
                <SmokeImg style={{position: "absolute", bottom: 175, zIndex: 1}} height={137} width={64} />
                <ProductImage source={irlandesImg} height={260} width={295} />
            </ImageContainer>

            <Footer>
                <Selection>
                    <SelectionTitle>
                        Selecione o tamanho:
                    </SelectionTitle>

                    <OptionsListContainer>
                        <Option name="114ml"/>
                        <Option name="140ml"/>
                        <Option name="227ml"/>
                    </OptionsListContainer>
                </Selection>

                <AddToCartContainer>
                    <Button name="Adicionar" />
                </AddToCartContainer>
            </Footer>
        </AnimatedContainer>
    )
}