import { HomeHeader } from "@components/HomeHeader";
import { AddToCartContainer, Container, Content, Currency, Description, ImageContainer, Info, Main, Name, OptionsListContainer, Price, ProductImage, Selection, SelectionTitle, TitleContainer, Value } from "./styles";
import Animated, { Easing, FadeInUp, FadeOut, FadeOutDown, SharedTransition, SlideInRight, SlideInUp, SlideOutDown, interpolate, interpolateColor, runOnJS, useAnimatedStyle, useSharedValue, withSequence, withSpring, withTiming } from 'react-native-reanimated';
import { IconButton } from "@components/IconButton";
import { ShoppingCart } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { Tag } from "@components/Tag";
import { ImageSourcePropType, Text, View } from "react-native";
import { Audio } from 'expo-av'

import irlandesImg from '@assets/coffee.png'
import SmokeImg from '@assets/smoke_4.svg'
import { Option } from "@components/Option";
import { Button } from "@components/Button";
import { Counter } from "@components/Counter";
import { Footer } from "@components/Footer";
import { useEffect, useState } from "react";
import { MessageItemAddedToCart } from "@components/MessageItemAddedToCart";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import { useCart } from "@hooks/index";
import Toast from "react-native-toast-message";
import { cartStorageAddItem } from "@storage/cart/CartStorageAddItem";
import { StorageCartItemProps } from "@storage/dtos/storageCartItemProps";

const AnimatedContainer = Animated.createAnimatedComponent(Container);
const AnimatedSelectionTitle = Animated.createAnimatedComponent(SelectionTitle);
// const AnimatedOption = Animated.createAnimatedComponent(Option);

import {PRODUCTS} from '@data/products';
import { priceFormatter } from "@utils/currencyFormater";


type ProductSize = {
    id: number;
    value: string
}

const DATA = [
    {id: 1, value: "114ml"},
    {id: 2, value: "140ml"},
    {id: 3, value: "227ml"},
]

type Product = {
    id: string;
    tag: string;
    name: string;
    price: number;
    image: ImageSourcePropType;
    description: string;
} 

type RouteParamsProps = {
    productId: string;
}

export function Product() {
    const [hasBeenAddedToCart, setHasBeenAddedToCart] = useState(false);
    const [sizes] = useState<ProductSize[]>(DATA);
    const [productSizeSelected, setProductSizeSelected] = useState('');
    const [product, setProduct] = useState<Product | undefined>(undefined);
    const [quantity, setQuantity] = useState(1);

    const { COLORS } = useTheme();
    const route = useRoute();

    const errorSize = useSharedValue(0);

    const navigation = useNavigation();

    const { productId } = route.params as RouteParamsProps;

    async function playSound(isCorrect: boolean) {
      const file = isCorrect ? require('@assets/sounds/item-added-cart.mp3') : require('@assets/sounds/error.mp3')
  
      const { sound } = await Audio.Sound.createAsync(file, { shouldPlay: true});
  
      await sound.setPositionAsync(0)
      await sound.playAsync();
    }


    async function handleAddToCart(productInput: StorageCartItemProps) {
        if (productSizeSelected === '') {
            await playSound(false);
            
            errorAnimation()
            return;
        }

        setHasBeenAddedToCart(true);

        await playSound(true);

        await cartStorageAddItem(productInput);

        Toast.show({
            type: 'info',
            text1: `${quantity},${product?.name}`,
            text2: productSizeSelected
        })

        setTimeout(() => {navigation.goBack();}, 200);
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
          borderColor: interpolateColor(errorSize.value, [0, 1], [productSizeSelected !== '' ? COLORS.PURPLE : 'transparent', COLORS.RED_DARK]),
      }
    });

    useEffect(() => {
        const product = PRODUCTS.find((prod) => prod.id === productId)

        setProduct(product)
    }, [product])

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
                            <Tag name={product?.tag!} size="FOCUSED" color="secondary" />

                            <Name>{product?.name}</Name>
                        </TitleContainer>
                        
                        <Price>
                            <Currency>R$</Currency>
                            <Value>{priceFormatter.format(product?.price!)}</Value>
                        </Price>
                    </Main>

                    <Description>
                        {product?.description}
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
                                        sizes.map((size) => (
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
                                                    isActive={productSizeSelected === size.value}
                                                    onPress={() => setProductSizeSelected(size.value)}
                                                />
                                            </Animated.View>
                                        ))
                                    }
                                </OptionsListContainer>
                            </Selection>

                            <AddToCartContainer>
                                <Counter quantity={quantity} onChangeQuantity={setQuantity} showBorders={false} />

                                <Button 
                                    style={{
                                        flex: 1,
                                        opacity: productSizeSelected !== '' ? 1 : 0.4,
                                    }} 
                                    name="Adicionar" 
                                    onPress={() => handleAddToCart({
                                        id: product?.id!,
                                        name: product?.name!,
                                        image: product?.image!,
                                        price: product?.price!,
                                        quantity,
                                        size: productSizeSelected
                                    })}
                                />
                            </AddToCartContainer>
                        </Animated.View>
                    )
                }
            </Footer>
        </AnimatedContainer>
    )
}