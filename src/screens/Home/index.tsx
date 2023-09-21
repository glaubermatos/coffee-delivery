import bgImage from '@assets/image.png'
import { CoffeeFilterContainer, CoffeeFilterTitle, Container, IntroContainer, IntroImage, SectionTitle, Title } from "./styles";

import { SearchInput } from '@components/SearchInput';
import { HomeHeader } from '@components/HomeHeader';
import { HighlightList } from '@components/HighlightList';
import { SectionListData, SectionListRenderItemInfo, SafeAreaView, StatusBar } from 'react-native';
import { TagFilter } from '@components/TagFilter';
import { useCallback, useRef, useState } from 'react';
import { CoffeeItem } from '@components/CoffeeItem';
import SectionList from 'react-native-tabs-section-list';

import Animated, { Easing, Extrapolate, interpolate, useAnimatedStyle, useSharedValue, SlideInUp, interpolateColor, withSpring } from 'react-native-reanimated';
import { useTheme } from 'styled-components/native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const CoffeeFilterContainerAnimated = Animated.createAnimatedComponent(CoffeeFilterContainer);
const AnimatedStatusBar = Animated.createAnimatedComponent(StatusBar);

import { SharedTransition } from 'react-native-reanimated';
import { IconButton } from '@components/IconButton';
import { ShoppingCart } from 'phosphor-react-native';

export function Home() {
    const [coffees, setCoffees] = useState([{title: 'tradicionais', data: [
        {id: 1, name: 'Irlandês', description: 'lorem ipsum dolor'},
        {id: 2, name: 'Café com leite', description: 'lorem ipsum dolor'},
        {id: 3, name: 'Árabe', description: 'lorem ipsum dolor'},
    ]},
    {title: 'doces', data: [
        {id: 4, name: 'Irlandês', description: 'lorem ipsum dolor'},
        {id: 6, name: 'Árabe', description: 'lorem ipsum dolor'},
    ]},
    {title: 'especiais', data: [
        {id: 8, name: 'Café com leite', description: 'lorem ipsum dolor'},
    ]}])

    const {COLORS} = useTheme();
    let listRef = useRef<any>();
    const scrollY = useSharedValue(0)
    const introContainerPosition = useSharedValue(0)

    const onPressTitle = useCallback((index: number) => {
        console.log("listRef", listRef)
        if (!!listRef?.current) {
          listRef.current.sectionList.current.scrollToLocation({
            sectionIndex: index,
            itemIndex: 0,
            animated: true
          })
        }
      }, [coffees])

    const renderItem = useCallback(({ item, index }: SectionListRenderItemInfo<any, any>) => {
        return (
            <CoffeeItem onPress={() => handleNavigateToProduct(1)} />
        )
    }, [coffees])
      

      const renderSectionTab = useCallback((props: SectionListData<any>) => {
        return (
            <GestureDetector gesture={introContainerPosition.value < 0 ? onPanUp : onPanDown}>
                <TagFilter 
                    name={props.title}
                    isActive={props.isActive}
                    onPress={() => onPressTitle(props.index)}
                />
            </GestureDetector>
        )
    }, [coffees])

    const renderSectionHeader = useCallback(({ section: { title } }: {
        section: SectionListData<any, any>;
    }) => {
      return (
        <SectionTitle>
          {title}
        </SectionTitle>
      )
    }, [coffees])

    const introContainerAnimatedStyles = useAnimatedStyle(() => {
      return {
        marginTop: interpolate(introContainerPosition.value, [0, -180], [0, -532], Extrapolate.CLAMP),
        opacity: interpolate(introContainerPosition.value, [0, -150], [1, 0], Extrapolate.CLAMP),
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

    const onPanUp = Gesture
    .Pan()
    .activateAfterLongPress(80)
    .onUpdate((event) => {
        console.log(event.translationY);
        introContainerPosition.value = event.translationY
    })
    .onEnd((event) => {
        // if (event.translationY < CAR_SKIP_QUESTION_AREA) {
        // runOnJS(handleSkipConfirm)();
        // }

        // introContainerPosition.value = withTiming(0);

        scrollY.value = event.translationY < -220 ? -220 : event.translationY;
        // introContainerPosition.value = event.translationY;
        console.log('final position scrollY: ', scrollY.value);
    })

    const onPanDown = Gesture
    .Pan()
    .activateAfterLongPress(90)
    .onUpdate((event) => {
        console.log(event.translationY);

        const moveToUp = event.translationY < 0;
        const maxValueToUp = scrollY.value >= -220;

        const translateY = event.translationY;

        // if (maxValueToUp) {
            introContainerPosition.value = scrollY.value + (translateY);
        // } else {
        //     introContainerPosition.value = 0 - translateY;
        // }
    })
    .onEnd((event) => {
        // if (event.translationY < CAR_SKIP_QUESTION_AREA) {
        // runOnJS(handleSkipConfirm)();
        // }

        // introContainerPosition.value = withTiming(0);

        scrollY.value = event.translationY < -220 ? -220 : event.translationY;
        // introContainerPosition.value = event.translationY;
        console.log('final position scrollY: ', scrollY.value);
    })
    const navigation = useNavigation();

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
            
            <GestureDetector gesture={onPanDown}>
                <Container>
                    <GestureDetector gesture={onPanUp}>
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
                    </GestureDetector>

                    {/* <IntroContainer>
                        <HomeHeader />

                        <Title>
                            Encontre o café perfeito para qualquer hora do dia
                        </Title>

                        <SearchInput placeholder='Pesquisar' />

                        <IntroImage 
                            source={bgImage}
                        />
                    </IntroContainer>*/}

                    {/* <CoffeeFilterContainer>
                        <CoffeeFilterTitle>
                            Nossos cafés
                        </CoffeeFilterTitle>

                        <FlatList 
                            data={['tradicionais', 'doces', 'especiais']}
                            keyExtractor={(item) => item}
                            renderItem={({item, index}) => (
                                <TagFilter 
                                    name={item}
                                    isActive={String(tagSelected).toLocaleUpperCase() === item.toLocaleUpperCase()}
                                    onPress={() => setTagSelected(item)}
                                />
                            )}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{
                                gap: 8
                            }}
                            style={{
                                maxHeight: 27,
                                minHeight: 27
                            }}
                        />
                    </CoffeeFilterContainer> */}

                    <GestureDetector gesture={introContainerPosition.value < 0 ? onPanDown : onPanUp}>
                        <CoffeeFilterContainer>
                            <CoffeeFilterTitle>
                                Nossos cafés
                            </CoffeeFilterTitle>
                        </CoffeeFilterContainer>
                    </GestureDetector>

                    <SectionList
                        nestedScrollEnabled
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
                </Container>
            </GestureDetector>
        </SafeAreaView>
    )
}   