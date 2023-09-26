import { HomeHeader } from "@components/HomeHeader";
import { AddToCartContainer, Container, Content, Currency, Description, ImageContainer, Info, Main, Name, OptionsListContainer, Price, ProductImage, Selection, SelectionTitle, TitleContainer, Value } from "./styles";
import Animated, { Easing, FadeInUp, FadeOut, FadeOutDown, SharedTransition, SlideInRight, SlideInUp, SlideOutDown, interpolate, interpolateColor, runOnJS, useAnimatedStyle, useSharedValue, withSequence, withSpring, withTiming } from 'react-native-reanimated';
import { IconButton } from "@components/IconButton";
import { ShoppingCart } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { Tag } from "@components/Tag";
import { Text, View } from "react-native";
import { Audio } from 'expo-av'

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

const AnimatedContainer = Animated.createAnimatedComponent(Container);
const AnimatedSelectionTitle = Animated.createAnimatedComponent(SelectionTitle);
// const AnimatedOption = Animated.createAnimatedComponent(Option);


type ProductSize = {
    id: number;
    value: string
}

const DATA = [
    {id: 1, value: "114ml"},
    {id: 2, value: "140ml"},
    {id: 3, value: "227ml"},
]

export function Product() {
    const [hasBeenAddedToCart, setHasBeenAddedToCart] = useState(false);
    const [productSizes, setProductSizes] = useState<ProductSize[]>(DATA);
    const [productSizeSelected, setProductSizeSelected] = useState(0);

    const { COLORS } = useTheme();

    const errorSize = useSharedValue(0);

    const navigation = useNavigation();

    async function playSound(isCorrect: boolean) {
      const file = isCorrect ? require('@assets/sounds/item-added-cart.mp3') : require('@assets/sounds/error.mp3')
  
      const { sound } = await Audio.Sound.createAsync(file, { shouldPlay: true});
  
      await sound.setPositionAsync(0)
      await sound.playAsync();
    }


    async function handleAddToCart() {
        if (productSizeSelected === 0) {
            await playSound(false);
            
            errorAnimation()
            return;
        }

        setHasBeenAddedToCart(true);

        await playSound(true);

        Toast.show({
            type: 'info',
        })

        setTimeout(() => {navigation.goBack();}, 700);
    }

    async function errorAnimation() {
        // await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
        errorSize.value = withSequence(
            withTiming(1, { duration: 500, easing: Easing.linear  }), 
            withTiming(0, { duration: 3500, easing: Easing.out(Easing.back())}, (finished) => {
                'worklet';
                if (finished) {
                    // runOnJS(setShowErrorFeedback)(false);
                }
            })
        )
    }

    const selectSizeTextAnimatedStyle = useAnimatedStyle(() => {
      return {
        color: interpolateColor(errorSize.value, [0, 1], [COLORS.GRAY_400, COLORS.RED_DARK])
      }
    });

    const selectSizeOptionAnimatedStyle = useAnimatedStyle(() => {
      return {
          borderWidth: interpolate(errorSize.value, [0, 1], [0, 1]),
          borderColor: interpolateColor(errorSize.value, [0, 1], [productSizeSelected > 0 ? COLORS.PURPLE : 'transparent', COLORS.RED_DARK]),
      }
    });

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
                {
                    !hasBeenAddedToCart && (
                        <Animated.View 
                            style={{gap: 20}} 
                            exiting={FadeOut.duration(400).easing(Easing.out(Easing.ease))}
                        >
                            <Selection>
                                <AnimatedSelectionTitle style={selectSizeTextAnimatedStyle}>
                                    Selecione o tamanho:
                                </AnimatedSelectionTitle>

                                <OptionsListContainer>
                                    {
                                        productSizes.map((size) => (
                                            <Animated.View
                                                style={
                                                    [selectSizeOptionAnimatedStyle, {
                                                        flex: 1,
                                                        height: 42, 
                                                        borderRadius: 6,
                                                    }]
                                                }
                                                key={size.id} 
                                            >
                                                <Option
                                                    name={size.value}
                                                    isActive={productSizeSelected === size.id}
                                                    onPress={() => setProductSizeSelected(size.id)}
                                                />
                                            </Animated.View>
                                        ))
                                    }
                                </OptionsListContainer>
                            </Selection>

                            <AddToCartContainer>
                                <Counter showBorders={false} />

                                <Button 
                                    style={{
                                        flex: 1,
                                        opacity: productSizeSelected > 0 ? 1 : 0.4,
                                    }} 
                                    name="Adicionar" 
                                    onPress={() => handleAddToCart()}
                                />
                            </AddToCartContainer>
                        </Animated.View>
                    )
                }

                
            </Footer>
        </AnimatedContainer>
    )
}