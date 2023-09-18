import { Pressable, PressableProps, Text } from "react-native";
import { Container, Label } from "./styles";

type Props = PressableProps & {
    name: string,
    isActive?: boolean,
}

export function TagFilter({ name, isActive = false, ...rest }: Props) {
    return (
        <Container
            isActive={isActive}        
          {...rest}
        >
          <Label isActive={isActive}>
            {name}
          </Label>
        </Container>
    );
}