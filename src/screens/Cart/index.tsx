import { CartHeader } from "@components/CartHeader";
import { Container, SwipeableCard, SwipeableRemoveContainer } from "./styles";
import { Order } from "@components/Order";
import { FlatList, ListRenderItemInfo, StyleSheet, Text, View } from "react-native";
import { CartItem } from "@components/CartItem";
import Swipeable, { SwipeableProps } from "react-native-gesture-handler/Swipeable";
import React, { useRef, useState } from "react";
import { useTheme } from "styled-components/native";
import THEME from '@theme/defaultTheme'
import { Trash } from "phosphor-react-native";
import Animated, { FadeInDown, FadeOut, FadeOutDown, Layout, SlideInRight } from "react-native-reanimated";
import { Button } from "@components/Button";
import { CartListEmpty } from "@components/CartListEmpty";

export const Cart: React.FC = () => {
    // const [cart, setCart] = useState([])
    const [cart, setCart] = useState(["café 1", "café 2", "café 3"])

    const {COLORS} = useTheme();
    const swipeableRefs = useRef<SwipeableProps[]>([]);

    function renderItem({item, index}: ListRenderItemInfo<string>) {
        return (
            <Animated.View 
                entering={FadeInDown.delay(200 + index * 50).duration(200)}
                exiting={FadeOut}
                layout={Layout.springify()}    
            >
                <SwipeableCard
                    ref={(ref) => {
                        if (ref) {
                            swipeableRefs.current.push(ref.props)
                        }
                    }}
                    overshootRight={false}
                    overshootLeft={false}
                    leftThreshold={10}
                    renderLeftActions={() => (
                        <SwipeableRemoveContainer>
                            <Trash
                                size={32}
                                color={THEME.COLORS.RED_DARK}
                            />
                        </SwipeableRemoveContainer>
                    )}
                    // onSwipeableOpen={() => handleRemove(item.id, index)}
                    renderRightActions={() => null}
                >
                    <CartItem index={index} />
                </SwipeableCard>
            </Animated.View>
        )
    }

    function renderListEmpty() {
        return (
            <Animated.View
                entering={FadeInDown.delay(100).duration(200)}
            >
                <CartListEmpty />
            </Animated.View>
        );
    }

    return (
        <Container>
            <CartHeader />

            <FlatList
                style={{flex: 1}}
                data={cart}
                keyExtractor={(item) => String(item)}
                renderItem={(props) => renderItem(props)}
                ListEmptyComponent={() => renderListEmpty()}
            />

            {
                cart.length > 0 && (
                    <Animated.View
                        entering={FadeInDown.delay(500).duration(300)}
                        exiting={FadeOutDown}
                    >
                        <Order />
                    </Animated.View>
                )
            }
        </Container>
    );
}