import { Container, Highlight } from "./styles";
import { useState } from "react";
import { CoffeeCard } from "@components/CoffeeCard";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { CoffeeCardFocused } from "@components/CoffeeCardFocused";

const AnimatedList = Animated.createAnimatedComponent(Highlight)

export function HighlightList() {
    const [coffees, setCoffees] = useState<string[]>(["Irlandês", "Café com leite", "Árabe"])

    return (
        <Container>
            <AnimatedList
                data={coffees}
                horizontal
                // keyExtractor={(item) => item}
                renderItem={({item, index}) => {

                    if (index === 0) {
                        return <CoffeeCard size="FOCUSED" />
                    }

                    return (
                        <CoffeeCard />
                    )
                }}
                scrollEventThrottle={16}
                decelerationRate={0}
                showsHorizontalScrollIndicator={false}
            />

            {/* <Highlight
                data={coffees}
                // keyExtractor={(item) => item}
                renderItem={({item}) => (
                    <CoffeeCard />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
            /> */}

            {/* <FlatList 
                data={coffees}
                keyExtractor={(item) => item}
                renderItem={({item}) => (
                    <CoffeeCard />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    // paddingVertical: 30.5,
                    // paddingHorizontal: 32, 
                    gap: 32,
                    maxHeight: 323
                }}
            /> */}
        </Container>
    );
}