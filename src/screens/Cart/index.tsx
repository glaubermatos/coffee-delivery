import { CartHeader } from "@components/CartHeader";
import { Container, SwipeableCard, SwipeableRemoveContainer } from "./styles";
import { Order } from "@components/Order";
import { Alert, FlatList, ListRenderItemInfo, ScrollView, StyleSheet, Text, View } from "react-native";
import { CartItem } from "@components/CartItem";
import Swipeable, { SwipeableProps } from "react-native-gesture-handler/Swipeable";
import React, { useRef, useState } from "react";
import { useTheme } from "styled-components/native";
import THEME from '@theme/defaultTheme'
import { ShoppingCart, Trash } from "phosphor-react-native";
import Animated, { FadeInDown, FadeOut, FadeOutDown, Layout, SlideInRight, SlideOutRight } from "react-native-reanimated";
import { Button } from "@components/Button";
import { CartListEmpty } from "@components/CartListEmpty";
import { StorageCartItemProps } from "@storage/dtos/storageCartItemProps";
import { useCart } from "@hooks/index";
import { cartStorageGetAll } from "@storage/cart/CartStorageGetAll";
import { cartStorageRemoveItem } from "@storage/cart/CartStorageRemoveItem";
import { BorderlessButton } from "react-native-gesture-handler";

export const Cart: React.FC = () => {
    const { cart } = useCart();

    const swipeableRefs = useRef<Swipeable[]>([]);

    function closeSwipeable(index: number) {
        swipeableRefs.current?.[index].close();
    }

    async function remove(id: string, index: number) {
        await cartStorageRemoveItem(id);
    }
  
    function handleRemove(id: string, index: number) {
        remove(id, index)
    //   Alert.alert(
    //     'Remover',
    //     'Deseja remover do carrinho?',
    //     [
    //       {
    //         text: 'Sim', onPress: () => remove(id, index)
    //       },
    //       { text: 'Não', style: 'cancel', onPress: () => closeSwipeable(index)}
    //     ]
    //   );
  
    }

    function renderItem({item, index}: ListRenderItemInfo<StorageCartItemProps>) {
        return (
            <Animated.View 
                entering={FadeInDown.delay(index * 50).duration(200)}
                exiting={SlideOutRight}
                layout={Layout.springify()}    
            >
                <SwipeableCard
                    ref={(ref) => {
                        if (ref) {
                            swipeableRefs.current.push(ref)
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
                    onSwipeableOpen={() => handleRemove(item.id, index)}
                    renderRightActions={() => null}
                >
                    <CartItem 
                        data={item} 
                        index={index}
                        onRemoveProduct={() => handleRemove(item.id, index)}
                    />
                </SwipeableCard>
            </Animated.View>
        )
    }

    function renderListEmpty() {
        return (
            <Animated.View
                entering={FadeInDown.delay(200).duration(300)}
            >
                <CartListEmpty />
            </Animated.View>
        );
    }

    return (
        <Container>
            <CartHeader />

            {
                cart.length > 0 ? (
                    <View style={{flex: 1}}>
                    <ScrollView
                        style={{flex: 1}}
                        showsVerticalScrollIndicator={false}
                    >
                        {
                            cart.map((item, index) => (
                                <Animated.View 
                                    key={item.id}
                                    entering={FadeInDown.delay(index * 50).duration(200)}
                                    exiting={SlideOutRight}
                                    // layout={Layout.springify()}    
                                >
                                    <SwipeableCard
                                        ref={(ref) => {
                                            if (ref) {
                                                swipeableRefs.current.push(ref)
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
                                        onSwipeableOpen={() => handleRemove(item.id, index)}
                                        renderRightActions={() => null}
                                    >
                                        <CartItem 
                                            data={item} 
                                            index={index}
                                            onRemoveProduct={() => handleRemove(item.id, index)}
                                        />
                                    </SwipeableCard>
                                </Animated.View>                                
                            ))
                        }
                    </ScrollView>

                    <Animated.View
                        entering={FadeInDown.delay(500).duration(300)}
                        exiting={FadeOutDown}
                    >
                        <Order />
                    </Animated.View>
                </View>
                ) : (
                    <Animated.View
                        entering={FadeInDown.duration(300)}
                    >
                        <CartListEmpty />
                    </Animated.View>
                )
            }
            
            {/* {
                cart.length > 0 ? (
                    <View style={{flex: 1}}>
                        <FlatList
                            data={cart}
                            keyExtractor={(item) => String(item.id)}
                            renderItem={(props) => renderItem(props)}
                            // contentContainerStyle={{backgroundColor: 'orange'}}
                            // ListEmptyComponent={() => renderListEmpty()} //a ação de voltar para o catalogo de produtos não funciona
                        />
                        <Animated.View
                            entering={FadeInDown.delay(500).duration(300)}
                            exiting={FadeOutDown}
                        >
                            <Order />
                        </Animated.View>
                    </View>
                ) : (
                    <Animated.View
                        entering={FadeInDown.duration(300)}
                    >
                        <CartListEmpty />
                    </Animated.View>
                )
            } */}
        </Container>
    );
}