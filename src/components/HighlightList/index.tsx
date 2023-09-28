import { Container } from "./styles";
import { useState } from "react";
import { CoffeeCard } from "@components/CoffeeCard";

import Carousel from 'react-native-snap-carousel'; 
import { Dimensions } from "react-native";
import Animated, { Easing, SlideInRight } from "react-native-reanimated";
import { useNavigation, useRoute } from "@react-navigation/native";


const SLIDER_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = SLIDER_WIDTH * 0.55;

const ContainerAnimated = Animated.createAnimatedComponent(Container);

import { HIGHLIGHTS } from '@data/highlights';
import { StorageCartItemProps } from "@storage/dtos/storageCartItemProps";
import { Product } from "@screens/Home";

type Props = {

}

export function HighlightList() {
    const [coffees, setCoffees] = useState<Product[]>(HIGHLIGHTS);
    const navigation = useNavigation();

    function handleNavigateToProduct(productId: string) {
        navigation.navigate('product', {productId})
    }

    return (
        <ContainerAnimated 
            entering={SlideInRight
                .delay(300)
                .duration(800)
                .easing(Easing.ease)
                .stiffness(50)
                .damping(15)
                .mass(1)}
            > 
                <Carousel
                    data={coffees}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({item, index}) => (
                        <CoffeeCard
                            index={index} 
                            data={item}
                            size="FOCUSED"
                            onPress={() => handleNavigateToProduct(item.id)}
                        />
                    )}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH}
                    useScrollView={true}
                    firstItem={0}
                    snapToOffsets={[...Array(coffees.length)].map((item, index) => index * (SLIDER_WIDTH*0.55 ) + (index-1) )}
                    inactiveSlideOpacity={1}
                    inactiveSlideScale={0.7}
                    activeSlideAlignment={"start"}
                    activeSlideOffset={20}
                    contentContainerCustomStyle={{paddingLeft: 16, paddingTop: 38, paddingBottom: 32}}
                />
        </ContainerAnimated>
    );
}