import { Horse } from 'phosphor-react-native';

import ScooterImg from '@assets/scooter.svg'

import { Container, Text, Text2 } from "./styles";

export function Home() {
    return (
        <Container>
            <ScooterImg 
                width={224}
                height={288}
            />
            
            <Horse color='white' size={32} />
            <Text>Teste</Text>
            <Text2>Home screen</Text2>
        </Container>
    )
}