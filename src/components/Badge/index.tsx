import { Container, Label } from "./styles";

type Props = {
    value: string | number;
}

export const Badge: React.FC<Props> = ({value}) => {
    return (
        <Container>
            <Label>{value}</Label>
        </Container>
    );
}