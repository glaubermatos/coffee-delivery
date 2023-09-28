import { CartHeader } from "@components/CartHeader";
import { Container, SwipeableCard, SwipeableRemoveContainer } from "./styles";
import { Order } from "@components/Order";
import { ListRenderItemInfo, View } from "react-native";
import { CartItem } from "@components/CartItem";
import Swipeable from "react-native-gesture-handler/Swipeable";
import React, { useRef } from "react";
import THEME from '@theme/defaultTheme'
import { Trash } from "phosphor-react-native";
import Animated, { FadeInDown, FadeOutDown, Layout, SlideOutRight } from "react-native-reanimated";
import { CartListEmpty } from "@components/CartListEmpty";
import { StorageCartItemProps } from "@storage/dtos/storageCartItemProps";
import { useCart } from "@hooks/index";

export const Cart: React.FC = () => {
    const { cart, removeProductCart } = useCart();

    const swipeableRefs = useRef<Swipeable[]>([]);

    function closeSwipeable(index: number) {
        swipeableRefs.current?.[index].close();
    }

    async function remove(item: StorageCartItemProps, index: number) {
        await removeProductCart(item.id);
    }
  
    function handleRemove(item: StorageCartItemProps, index: number) {
        remove(item, index)
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
                    onSwipeableOpen={() => handleRemove(item, index)}
                    renderRightActions={() => null}
                >
                    <CartItem 
                        data={item} 
                        index={index}
                        onRemoveProduct={() => handleRemove(item, index)}
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
                        <Animated.ScrollView
                            style={{flex: 1}}
                            showsVerticalScrollIndicator={false}
                            layout={Layout.springify()}   
                        >
                            {
                                cart.map((item, index) => (
                                    <Animated.View 
                                        key={String(item.id+item.size)}
                                        // entering={FadeInDown.delay(index * 150).duration(200)}
                                        exiting={SlideOutRight}
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
                                            onSwipeableOpen={() => handleRemove(item, index)}
                                            renderRightActions={() => null}
                                        >
                                            <CartItem 
                                                data={item} 
                                                index={index}
                                                onRemoveProduct={() => handleRemove(item, index)}
                                            />
                                        </SwipeableCard>
                                    </Animated.View>                                
                                ))
                            }
                        </Animated.ScrollView>

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