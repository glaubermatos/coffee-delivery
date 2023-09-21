import { PressableProps } from "react-native";
import { Container, Label } from "./styles";

type Props = PressableProps & {
    name: string;
};

export function Button({name, ...rest}: Props) {
    return (
        <Container
            {...rest}
        >
            <Label>
                {name}
            </Label>
        </Container>
    );
}