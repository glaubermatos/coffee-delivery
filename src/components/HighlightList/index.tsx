import { Container } from "./styles";
import { useState } from "react";
import { CoffeeCard } from "@components/CoffeeCard";

import Carousel from 'react-native-snap-carousel'; 
import { Dimensions } from "react-native";
import Animated, { SlideInRight } from "react-native-reanimated";


const SLIDER_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = SLIDER_WIDTH * 0.55;

const ContainerAnimated = Animated.createAnimatedComponent(Container);

export function HighlightList() {
    const [coffees, setCoffees] = useState<string[]>(["Irlandês", "Café com leite", "Árabe"])

    return (
        <ContainerAnimated> 
            <Carousel
              data={coffees}
              renderItem={({item, index}) => <CoffeeCard index={index} size="FOCUSED" />}
              sliderWidth={SLIDER_WIDTH}
              itemWidth={ITEM_WIDTH}
              useScrollView={true}
              firstItem={0}
              snapToOffsets={[...Array(coffees.length)].map((item, index) => index * (SLIDER_WIDTH*0.55 ) + (index-1) )}
              snapToAlignment="start"
              inactiveSlideOpacity={1}
              inactiveSlideScale={0.7}
              activeSlideAlignment="start"
              activeSlideOffset={20}
              contentContainerCustomStyle={{paddingLeft: 16, paddingTop: 38, paddingBottom: 32}}
            />
        </ContainerAnimated>
    );
}