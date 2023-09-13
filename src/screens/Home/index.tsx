import bgImage from '@assets/image.png'

import { Container, IntroContainer, IntroImage, Title } from "./styles";

import { SearchInput } from '@components/SearchInput';
import { HomeHeader } from '@components/HomeHeader';

export function Home() {
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
        </Container>
    )
}   