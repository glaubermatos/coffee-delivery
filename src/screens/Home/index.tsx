import bgImage from '@assets/image.png'

import { CoffeeFilterContainer, CoffeeFilterTitle, Container, IntroContainer, IntroImage, SectionTitle, Title } from "./styles";

import { SearchInput } from '@components/SearchInput';
import { HomeHeader } from '@components/HomeHeader';
import { HighlightList } from '@components/HighlightList';
import { SectionList as RNSectionList, SectionListData, SectionListProps, SectionListRenderItemInfo, View, Text, FlatList, SafeAreaView, ScrollView } from 'react-native';
import { TagFilter } from '@components/TagFilter';
import { LegacyRef, MutableRefObject, useCallback, useRef, useState } from 'react';
import { CoffeeItem } from '@components/CoffeeItem';
import SectionList from 'react-native-tabs-section-list';

import Animated, { Easing, Extrapolate, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue, withSequence, withTiming, runOnJS } from 'react-native-reanimated';
import { useTheme } from 'styled-components/native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

export function Home() {
    const [tagSelected, setTagSelected] = useState('tradicionais')
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
            <CoffeeItem />
        )
    }, [coffees])
      

      const renderSectionTab = useCallback((props: SectionListData<any>) => {
        return (
            <TagFilter 
                name={props.title}
                isActive={props.isActive}
                onPress={() => onPressTitle(props.index)}
            />
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

    const headerAnimatedStyles = useAnimatedStyle(() => {
      return {
        height: interpolate(introContainerPosition.value, [0, -220], [520, 0], Extrapolate.CLAMP),
        transform: [{
            translateY: interpolate(introContainerPosition.value, [0, -220], [0, -520], Extrapolate.CLAMP)
        }],
        opacity: interpolate(introContainerPosition.value, [0, -220], [1, 0], Extrapolate.CLAMP),
        // opacity: interpolate(scrollY.value, [60, 90], [1, 0], Extrapolate.CLAMP)
      }
    })

    const onPan = Gesture
    .Pan()
    .activateAfterLongPress(90)
    .onUpdate((event) => {
        console.log(event.translationY)
        const moveToUp = event.translationY < 0;

        // if (moveToUp) {
            introContainerPosition.value = event.translationY
        // }
    })
    .onEnd((event) => {
        // if (event.translationY < CAR_SKIP_QUESTION_AREA) {
        // runOnJS(handleSkipConfirm)();
        // }

        // introContainerPosition.value = withTiming(0);
    })

    const scrollHandler = useAnimatedScrollHandler({
      onScroll: (event) => {
        scrollY.value = event.contentOffset.y;
      }
    })

    return (
        <SafeAreaView style={{flex: 1}}>
            <HomeHeader />
            <GestureDetector gesture={onPan}>

                <Container>
                    {/* <Animated.ScrollView
                        scrollEnabled={true}
                        nestedScrollEnabled
                        showsVerticalScrollIndicator={false}
                        // contentContainerStyle={styles.question}
                        // onScroll={scrollHandler}
                        scrollEventThrottle={16}
                    > */}
                        <GestureDetector gesture={onPan}>
                            <Animated.View style={headerAnimatedStyles}>
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
                    
                    <GestureDetector gesture={onPan}>
                    <CoffeeFilterContainer>
                        <CoffeeFilterTitle>
                            Nossos cafés
                        </CoffeeFilterTitle>
                    </CoffeeFilterContainer>

                    </GestureDetector>

                    <SectionList
                        nestedScrollEnabled
                        style={{ marginHorizontal: 32,  marginTop: 16}}
                        stickySectionHeadersEnabled={false}
                        ref={listRef}
                        showsVerticalScrollIndicator={false}
                        sections={coffees}
                        extraData={coffees}
                        tabBarStyle={{marginHorizontal: 32, marginBottom: 16}}
                        renderItem={(props) => renderItem(props)}
                        keyExtractor={(_, index) => index.toString()}
                        renderSectionHeader={(props) => renderSectionHeader(props)}
                        contentContainerStyle={{gap: 32, paddingBottom: 380}}
                        renderTab={(props) => renderSectionTab(props)}
                        // getItemLayout={getItemLayout}
                    />

                    {/* </Animated.ScrollView> */}
                </Container>
            </GestureDetector>
        </SafeAreaView>
    )
}   