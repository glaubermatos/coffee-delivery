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

export function HighlightList() {
    const [coffees, setCoffees] = useState<string[]>(["Irlandês", "Café com leite", "Árabe", "Capuccino", "Expresso"]);
    const navigation = useNavigation();

    function handleNavigateToProduct(productId: number) {
        navigation.navigate('product')
    }

    return (
        <ContainerAnimated 
            entering={SlideInRight
                .delay(500)
                .duration(800)
                .easing(Easing.ease)
                .stiffness(50)
                .damping(15)
                .mass(1)}
            > 
                <Carousel
                data={coffees}
                renderItem={({item, index}) => (
                    <CoffeeCard
                        index={index} 
                        size="FOCUSED"
                        onPress={() => handleNavigateToProduct(1)}
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