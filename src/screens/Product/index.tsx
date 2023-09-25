import { HomeHeader } from "@components/HomeHeader";
import { AddToCartContainer, Container, Content, Currency, Description, ImageContainer, Info, Main, Name, OptionsListContainer, Price, ProductImage, Selection, SelectionTitle, TitleContainer, Value } from "./styles";
import Animated, { Easing, FadeInUp, FadeOut, FadeOutDown, SharedTransition, SlideInRight, SlideInUp, SlideOutDown, withSpring } from 'react-native-reanimated';
import { IconButton } from "@components/IconButton";
import { ShoppingCart } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { Tag } from "@components/Tag";
import { Text, View } from "react-native";

import irlandesImg from '@assets/coffee.png'
import SmokeImg from '@assets/smoke_4.svg'
import { Option } from "@components/Option";
import { Button } from "@components/Button";
import { Counter } from "@components/Counter";
import { Footer } from "@components/Footer";
import { useState } from "react";
import { MessageItemAddedToCart } from "@components/MessageItemAddedToCart";
import { useNavigation } from "@react-navigation/native";
import { useCart } from "@hooks/index";
import Toast from "react-native-toast-message";

const AnimatedContainer = Animated.createAnimatedComponent(Container)

export function Product() {
    const [hasBeenAddedToCart, setHasBeenAddedToCart] = useState(false);
    const navigation = useNavigation();


    function handleAddToCart() {
        setHasBeenAddedToCart(true);

        Toast.show({
            type: 'info',
        })

        setTimeout(() => {navigation.goBack();}, 700);
    }

    return (
        <AnimatedContainer exiting={FadeOut}>
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
                {
                    !hasBeenAddedToCart && (
                        <Animated.View 
                            style={{gap: 20}} 
                            exiting={FadeOut.duration(900).easing(Easing.out(Easing.ease))}
                        >
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
                                <Counter showBorders={false} />

                                <Button style={{flex: 1}} name="Adicionar" onPress={() => handleAddToCart()} />
                            </AddToCartContainer>
                        </Animated.View>
                    )
                }

                
            </Footer>
        </AnimatedContainer>
    )
}