import bgImage from '@assets/image.png'
import { CoffeeFilterContainer, CoffeeFilterTitle, Container, IntroContainer, IntroImage, SectionTitle, Title } from "./styles";

import { SearchInput } from '@components/SearchInput';
import { HomeHeader } from '@components/HomeHeader';
import { HighlightList } from '@components/HighlightList';
import { SectionList, SectionListData, SectionListRenderItemInfo, SafeAreaView, StatusBar, View, ViewToken, TouchableOpacity, ScrollView } from 'react-native';
import { TagFilter } from '@components/TagFilter';
import { useCallback, useRef, useState } from 'react';
import { CoffeeItem } from '@components/CoffeeItem';
// import SectionList from 'react-native-tabs-section-list';

import Animated, { Easing, Extrapolate, interpolate, useAnimatedStyle, useSharedValue, SlideInUp, interpolateColor, withSpring, runOnJS, withTiming, SlideOutDown, SlideInDown, FadeInDown } from 'react-native-reanimated';
import { useTheme } from 'styled-components/native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const AnimatedCoffeeFilterContainer = Animated.createAnimatedComponent(CoffeeFilterContainer);
const AnimatedStatusBar = Animated.createAnimatedComponent(StatusBar);

import { SharedTransition } from 'react-native-reanimated';
import { IconButton } from '@components/IconButton';
import { ShoppingCart } from 'phosphor-react-native';
import { MessageItemAddedToCart } from '@components/MessageItemAddedToCart';
import { useCart } from '@hooks/index';

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
    const [activeTab, setActiveTab] = useState(0);
    const sectionListRef = useRef<any>(null);

    const { COLORS } = useTheme();
    const scrollY = useSharedValue(0)
    const introContainerPosition = useSharedValue(0)

    const navigation = useNavigation();

    const [coffees, setCoffees] = useState([{title: 'tradicionais', data: [
        {id: 1, name: 'Irlandês', description: 'lorem ipsum dolor'},
        {id: 2, name: 'Café com leite 1', description: 'lorem ipsum dolor'}
      ]},
      {title: 'doces', data: [
          {id: 12, name: 'Irlandês 2', description: 'lorem ipsum dolor'},
          {id: 13, name: 'Árabe 6', description: 'lorem ipsum dolor'},
      ]},
      {title: 'especiais', data: [
          {id: 14, name: 'Café com leite7', description: 'lorem ipsum dolor'},
          {id: 3, name: 'Árabe', description: 'lorem ipsum dolor'},
          {id: 4, name: 'Café com leite 2', description: 'lorem ipsum dolor'},
          {id: 5, name: 'Árabe 2', description: 'lorem ipsum dolor'},
          {id: 6, name: 'Café com leite 3', description: 'lorem ipsum dolor'},
          {id: 7, name: 'Árabe 3', description: 'lorem ipsum dolor'},
          {id: 8, name: 'Café com leite 4', description: 'lorem ipsum dolor'},
          {id: 9, name: 'Árabe 4', description: 'lorem ipsum dolor'},
          {id: 10, name: 'Café com leite 5', description: 'lorem ipsum dolor'},
          {id: 11, name: 'Árabe 5', description: 'lorem ipsum dolor'},
    ]}])


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

      const renderItem = ({ item }: SectionListRenderItemInfo<{
        id: number;
        name: string;
        description: string;
    }, {
        title: string;
        data: ({
            id: number;
            name: string;
            description: string;
        } | undefined)[];
    }>) => (
          <CoffeeItem onPress={() => handleNavigateToProduct(1)} />
      );

  const renderSectionHeader = ({ section }: {
    section: SectionListData<{
        id: number;
        name: string;
        description: string;
    }, {
        title: string;
        data: ({
            id: number;
            name: string;
            description: string;
        } | undefined)[];
    }>}) => (
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
            const sectionIndex = coffees.findIndex((section) => section.title === viewableItems[0].section.title);
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
        setActiveTab(index);
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
    .activateAfterLongPress(100)
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

    function handleNavigateToProduct(productId: number) {
        navigation.navigate('product')
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
                                    tabs={['tradicionais', 'doces', 'especiais']}
                                    activeTab={activeTab}
                                    onPressTab={(index) => handleTabPress(index)}
                                />
                            </AnimatedCoffeeFilterContainer>

                            <SectionList
                                ref={sectionListRef}
                                sections={coffees}
                                keyExtractor={(item, index) => String(item?.id)}
                                renderItem={(props) => renderItem(props)}
                                contentContainerStyle={{gap: 32, paddingTop: 8, paddingHorizontal: 32, paddingBottom: 80, backgroundColor: COLORS.GRAY_900}}
                                renderSectionHeader={(data) => renderSectionHeader(data)}
                                stickySectionHeadersEnabled={false} // Desativar seções pegajosas
                                initialNumToRender={20} // Ajuste conforme necessário
                                maxToRenderPerBatch={10} // Ajuste conforme necessário
                                windowSize={10} // Ajuste conforme necessário
                                removeClippedSubviews={true}
                                onViewableItemsChanged={(items) => onViewableItemsChanged(items)}
                                onEndReachedThreshold={0.1}
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