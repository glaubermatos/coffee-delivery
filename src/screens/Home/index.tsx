import bgImage from '@assets/image.png'

import { CoffeeFilterContainer, CoffeeFilterTitle, Container, IntroContainer, IntroImage, Title } from "./styles";

import { SearchInput } from '@components/SearchInput';
import { HomeHeader } from '@components/HomeHeader';
import { HighlightList } from '@components/HighlightList';
import { FlatList } from 'react-native';
import { TagFilter } from '@components/TagFilter';
import { useState } from 'react';

export function Home() {
    const [tagSelected, setTagSelected] = useState('tradicionais') //pode melhorar

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

            <CoffeeFilterContainer>
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
            </CoffeeFilterContainer>


        </Container>
    )
}   