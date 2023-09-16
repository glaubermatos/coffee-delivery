import bgImage from '@assets/image.png'

import { Container, IntroContainer, IntroImage, Title } from "./styles";

import { SearchInput } from '@components/SearchInput';
import { HomeHeader } from '@components/HomeHeader';
import { CoffeeCard } from '@components/CoffeeCard';
import { useState } from 'react';
import { FlatList } from 'react-native';

export function Home() {
    const [coffees, setCoffees] = useState<string[]>(["Irlandês", "Café com leite", "Árabe"])

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

            <FlatList 
                style={{marginTop: -80}}
                data={coffees}
                keyExtractor={(item) => item}
                renderItem={({item}) => (
                    <CoffeeCard 
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingVertical: 30.5,
                    paddingHorizontal: 32, 
                    gap: 32,
                    maxHeight: 323
                }}
            />

        </Container>
    )
}   