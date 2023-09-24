import { PressableProps } from "react-native";
import { ButtonColorStyleProps, Container, Label } from "./styles";

type Props = PressableProps & {
    name: string;
    color?: ButtonColorStyleProps;
};

export function Button({name, color, ...rest}: Props) {
    return (
        <Container
            color={color}
            {...rest}
        >
            <Label>
                {name}
            </Label>
        </Container>
    );
}