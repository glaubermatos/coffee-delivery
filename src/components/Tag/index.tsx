import { CoffeeCardSizeProps } from "@components/CoffeeCard/styles";
import { Container, TagColorStyleProps } from "./styles";

type Props = {
    name: string;
    size?: CoffeeCardSizeProps;
    color?: TagColorStyleProps;
}

export function Tag({ name, size = 'DEFAULT', color = 'primary' }: Props) {
    return (
        <Container 
            size={size} 
            color={color}
        >
            {name}
        </Container>
    );
}