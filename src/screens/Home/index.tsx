import { Horse } from 'phosphor-react-native';

import { Container, Text, Text2 } from "./styles";

export function Home() {
    return (
        <Container>
            <Horse color='white' size={32} />
            <Text>Teste</Text>
            <Text2>Home screen</Text2>
        </Container>
    )
}