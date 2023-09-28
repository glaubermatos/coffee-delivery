import bgImage from '@assets/image.png'
import { CoffeeFilterContainer, CoffeeFilterTitle, Container, IntroContainer, IntroImage, SectionTitle, Title } from "./styles";

import { SearchInput } from '@components/SearchInput';
import { HomeHeader } from '@components/HomeHeader';
import { HighlightList } from '@components/HighlightList';
import { SectionList, SectionListData, SectionListRenderItemInfo, SafeAreaView, StatusBar, View, ViewToken, TouchableOpacity, ScrollView, SectionListProps, ImageSourcePropType } from 'react-native';
import { TagFilter } from '@components/TagFilter';
import { useCallback, useEffect, useRef, useState } from 'react';
import { CoffeeItem } from '@components/CoffeeItem';
// import SectionList from 'react-native-tabs-section-list';

import Animated, { Easing, Extrapolate, interpolate, useAnimatedStyle, useSharedValue, SlideInUp, interpolateColor, withSpring, runOnJS, withTiming, SlideOutDown, SlideInDown, FadeInDown } from 'react-native-reanimated';
import { useTheme } from 'styled-components/native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

const AnimatedCoffeeFilterContainer = Animated.createAnimatedComponent(CoffeeFilterContainer);
const AnimatedSectionList = Animated.createAnimatedComponent<SectionListProps<Product, SectionListDataProps>>(SectionList);

import { SharedTransition } from 'react-native-reanimated';
import { IconButton } from '@components/IconButton';
import { ShoppingCart } from 'phosphor-react-native';
import { MessageItemAddedToCart } from '@components/MessageItemAddedToCart';
import { useCart } from '@hooks/index';

import { PRODUCTS } from '../../data/products';
import { TAGS } from '../../data/tags';

export type Product = {
    id: string;
    tag: string;
    name: string;
    price: number;
    image: ImageSourcePropType;
    description: string;
}

type SectionListDataProps = {
    title: string;
    data: Product[];
}

const TabHeader: React.FC<{tabs: Array<string>, activeTab: number, onPressTab: (index: number) => void}> = ( {tabs, activeTab, onPressTab } ) => (
    <ScrollView
        horizontal
    >
        {tabs.map((tab, index) => (
            <TagFilter 
                key={index}
                name={tab}
                isActive={activeTab === index}
                onPress={() => onPressTab(index)}
            />
        ))}
  </ScrollView>
);

export function Home() {
    const tabsHeaderName = TAGS.map(tag => tag.name);

    const sectionListData = TAGS.map(tag => {
        return {
            title: tag.name,
            data: PRODUCTS.filter(product => product.tag === tag.name),
        }
    })

    const [activeTab, setActiveTab] = useState(0);
    const sectionListRef = useRef<any>(null);

    const { COLORS } = useTheme();
    const scrollY = useSharedValue(0)
    const introContainerPosition = useSharedValue(0)

    const navigation = useNavigation();

    // const onPressTitle = useCallback((index: number) => {
    //     console.log("listRef", listRef)
    //     if (!!listRef?.current) {
    //       listRef.current.sectionList.current.scrollToLocation({
    //         sectionIndex: index,
    //         itemIndex: 0,
    //         animated: true
    //       })
    //     }
    //   }, [coffees])

      const renderItem = ({ item }: SectionListRenderItemInfo<Product, SectionListDataProps>) => (
          <CoffeeItem {...item} onPress={() => handleNavigateToProduct(item.id)} />
      );

  const renderSectionHeader = ({ section }: {
    section: SectionListData<Product, SectionListDataProps>}) => (
        <SectionTitle>
            {section.title}
        </SectionTitle>
  );
    // const renderSectionHeader = useCallback(({ section: { title } }: {
    //     section: SectionListData<any, any>;
    // }) => {
    //   return (
    //     <SectionTitle>
    //       {title}
    //     </SectionTitle>
    //   )
    // }, [coffees])

  const onViewableItemsChanged = ({ viewableItems }: {
        viewableItems: ViewToken[];
        changed: ViewToken[];
    }) => {

        if (viewableItems.length > 0) {
            const sectionIndex = sectionListData.findIndex(({title}) => title === viewableItems[0].section.title);
        if (sectionIndex !== -1) {
            setActiveTab(sectionIndex);
        }
    }
  };  

  const scrollToSection = (sectionIndex: number) => {
    if (sectionListRef.current) {

      sectionListRef.current.scrollToLocation({
        sectionIndex,
        itemIndex: 0,
        viewOffset: 0,
        animated: true
      });
    }
  };

  const handleTabPress = (index: number) => {
    if (activeTab !== index) {
        scrollToSection(index);
    }
  };


    const introContainerAnimatedStyles = useAnimatedStyle(() => {
      return {
        marginTop: interpolate(introContainerPosition.value, [0, -180], [0, -532], Extrapolate.CLAMP),
        opacity: interpolate(introContainerPosition.value, [-10, -150], [1, 0], Extrapolate.CLAMP),
      }
    })  

    const headerAnimatedStyles = useAnimatedStyle(() => {
      return {
        backgroundColor: interpolateColor(introContainerPosition.value, [0, -180], [COLORS.GRAY_100, COLORS.GRAY_900]),
        height: interpolate(introContainerPosition.value, [0, -180], [120, 96], Extrapolate.CLAMP),
        borderBottomWidth: interpolate(introContainerPosition.value, [0, -180], [0, 1], Extrapolate.CLAMP),
        borderBottomColor: interpolateColor(introContainerPosition.value, [0, -180], ['transparent', COLORS.GRAY_800]),
      }
    }) 

    const coffeeFilterContainerAnimatedStyles = useAnimatedStyle(() => {
      return {
        borderBottomWidth: interpolate(introContainerPosition.value, [0, -180], [0, 1], Extrapolate.CLAMP),
        borderBottomColor: interpolateColor(introContainerPosition.value, [0, -180], ['transparent', COLORS.GRAY_800]),
      }
    }) 

    const onPanUp = Gesture
    .Pan()
    .activateAfterLongPress(80)
    .onUpdate((event) => {
        if (event.translationY < 0) {
            introContainerPosition.value = event.translationY
        } else {
            introContainerPosition.value = scrollY.value + (event.translationY);
        }
    })
    .onEnd((event) => {
        if (event.translationY < -20) {
            introContainerPosition.value = withTiming(-220, {duration: 600, easing: Easing.inOut(Easing.quad)});
        }

        scrollY.value = event.translationY <= -220 ? -220 : event.translationY;
    })

    function handleNavigateToProduct(productId: string) {
        navigation.navigate('product', {productId})
    }

    return (
        <SafeAreaView style={{flex: 1}}>

            <HomeHeader
                sharedTransitionTag="headerHeightAnimateTag"
                style={headerAnimatedStyles} 
                introContainerPosition={introContainerPosition} 
            /> 
            
                <Container>
                    <Animated.View 
                        entering={SlideInUp.delay(10).duration(600).easing(Easing.bezierFn(0, 0.79, 0.52, 0.98))} 
                        style={[introContainerAnimatedStyles]}
                    >
                        <IntroContainer>
                            <Title>
                                Encontre o café perfeito para qualquer hora do dia
                            </Title>

                            <SearchInput placeholder='Pesquisar' />

                            <IntroImage 
                                source={bgImage}
                            />
                        </IntroContainer>

                        <HighlightList />
                    </Animated.View>

                    <GestureDetector gesture={onPanUp}>
                        <Animated.View entering={FadeInDown.delay(200).duration(300)}>
                            <AnimatedCoffeeFilterContainer style={coffeeFilterContainerAnimatedStyles}>
                                <CoffeeFilterTitle>
                                    Nossos cafés
                                </CoffeeFilterTitle>

                                <TabHeader
                                    tabs={tabsHeaderName}
                                    activeTab={activeTab}
                                    onPressTab={(index) => handleTabPress(index)}
                                />
                            </AnimatedCoffeeFilterContainer>

                            <AnimatedSectionList
                                windowSize={10} // Ajuste conforme necessário
                                ref={sectionListRef}
                                initialNumToRender={20} // Ajuste conforme necessário
                                maxToRenderPerBatch={10} // Ajuste conforme necessário
                                sections={sectionListData}
                                onEndReachedThreshold={0.1}
                                removeClippedSubviews={true}
                                stickySectionHeadersEnabled={false} // Desativar seções pegajosas
                                showsVerticalScrollIndicator={false}
                                renderItem={(props) => renderItem(props)}
                                keyExtractor={(item, index) => String(item?.id)}
                                renderSectionHeader={(data) => renderSectionHeader(data)}
                                onViewableItemsChanged={(items) => onViewableItemsChanged(items)}
                                contentContainerStyle={{
                                    gap: 32, 
                                    paddingTop: 8, 
                                    paddingHorizontal: 32, 
                                    paddingBottom: 120, 
                                    backgroundColor: COLORS.GRAY_900,
                                }}
                            />
                        </Animated.View>


                        {/* <View style={{flex: 1}}> 
                            <CoffeeFilterContainer>
                                <CoffeeFilterTitle>
                                    Nossos cafés
                                </CoffeeFilterTitle>
                            </CoffeeFilterContainer>

                        
                            <SectionList
                                style={{ paddingBottom: 8, elevation: 10}}
                                stickySectionHeadersEnabled={false}
                                ref={listRef}
                                showsVerticalScrollIndicator={false}
                                sections={coffees}
                                extraData={coffees}
                                tabBarStyle={{paddingHorizontal: 32, paddingBottom: 16, backgroundColor: COLORS.GRAY_900, borderBottomWidth: 1, borderBottomColor: COLORS.GRAY_900}}
                                renderItem={(props) => renderItem(props)}
                                keyExtractor={(_, index) => index.toString()}
                                renderSectionHeader={(props) => renderSectionHeader(props)}
                                contentContainerStyle={{gap: 32, paddingHorizontal: 32, paddingBottom: 380, backgroundColor: COLORS.GRAY_900}}
                                renderTab={(props) => renderSectionTab(props)}
                                // getItemLayout={getItemLayout}
                            />
                        </View> */}
                    </GestureDetector>
                </Container>
        </SafeAreaView>
    )
}   