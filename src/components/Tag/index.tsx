import { CoffeeCardSizeProps } from "@components/CoffeeCard/styles";
import { Container } from "./styles";

type Props = {
    name: string;
    size?: CoffeeCardSizeProps
}

export function Tag({ name, size = 'DEFAULT' }: Props) {
    return (
        <Container size={size}>
            {name}
        </Container>
    );
}