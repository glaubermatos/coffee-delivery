import bgImage from '@assets/image.png'

import { CoffeeFilterContainer, CoffeeFilterTitle, Container, IntroContainer, IntroImage, SectionTitle, Title } from "./styles";

import { SearchInput } from '@components/SearchInput';
import { HomeHeader } from '@components/HomeHeader';
import { HighlightList } from '@components/HighlightList';
import { FlatList, SectionListData, SectionListProps, SectionListRenderItemInfo, View, Text } from 'react-native';
import { TagFilter } from '@components/TagFilter';
import { LegacyRef, MutableRefObject, useCallback, useRef, useState } from 'react';
import { CoffeeItem } from '@components/CoffeeItem';
import SectionList from 'react-native-tabs-section-list';

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

    let listRef = useRef<any>();

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

    return (
        <Container style={{}}>
            <IntroContainer>
                <HomeHeader />

                <Title>
                    Encontre o café perfeito para qualquer hora do dia
                </Title>

                <SearchInput placeholder='Pesquisar' />

                <IntroImage 
                    source={bgImage}
                />
            </IntroContainer>

            <HighlightList />

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

            <CoffeeFilterContainer>
                <CoffeeFilterTitle>
                    Nossos cafés
                </CoffeeFilterTitle>
            </CoffeeFilterContainer>

            <SectionList
                style={{marginHorizontal: 32, marginTop: 16}}
                stickySectionHeadersEnabled={false}
                ref={listRef}
                showsVerticalScrollIndicator={false}
                sections={coffees}
                extraData={coffees}
                renderTab={(props) => renderSectionTab(props)}
                tabBarStyle={{marginHorizontal: 32, marginBottom: 16}}
                renderItem={(props) => renderItem(props)}
                keyExtractor={(_, index) => index.toString()}
                renderSectionHeader={(props) => renderSectionHeader(props)}
                contentContainerStyle={{gap: 32, paddingBottom: 60}}
                // renderSectionFooter={() => <View style={{ height: 40 }} />}
                // getItemLayout={getItemLayout}
            />


        </Container>
    )
}   