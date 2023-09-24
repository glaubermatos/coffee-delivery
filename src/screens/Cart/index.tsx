import { CartHeader } from "@components/CartHeader";
import { Container } from "./styles";
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
                entering={FadeInDown.delay(300 + index * 75).duration(300)}
                exiting={FadeOut}
                layout={Layout.springify()}    
            >
                <Swipeable
                    ref={(ref) => {
                        if (ref) {
                            swipeableRefs.current.push(ref.props)
                        }
                    }}
                    overshootRight={false}
                    overshootLeft={false}
                    containerStyle={styles.swipeableContainer}
                    leftThreshold={10}
                    // onSwipeableOpen={() => handleRemove(item.id, index)}
                    renderRightActions={() => null}
                    renderLeftActions={() => (
                    <View
                        style={styles.swipeableRemove}
                        // onPress={() => handleRemove(item.id, index)}
                    >
                        <Trash
                            size={32}
                            color={THEME.COLORS.RED_DARK}
                        />
                    </View>
                    )}
                >
                    <CartItem index={index} />
                </Swipeable>
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

export const styles = StyleSheet.create({
    swipeableContainer: {
      width: '100%',
      backgroundColor: THEME.COLORS.RED_LIGHT, 
      borderRadius: 6,
    },
    swipeableRemove: {
      width: 90,
      borderRadius: 6,
      backgroundColor: THEME.COLORS.RED_LIGHT,
      alignItems: 'center',
      justifyContent: 'center',
    }
  
  });