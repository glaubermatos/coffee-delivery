import { Container } from "./styles";

type Props = {
    name: string;
}

export function Tag({ name }: Props) {
    return (
        <Container>
            {name}
        </Container>
    );
}