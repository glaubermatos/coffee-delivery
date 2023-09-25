import { Pressable, PressableProps, Text, TouchableOpacityProps } from "react-native";
import { Container, Label } from "./styles";

type Props = PressableProps & {
    name: string,
    isActive?: boolean,
}

export function TagFilter({ name, isActive = false, ...rest }: Props) {
    return (
        <Container
            // activeOpacity={0.5}
            isActive={isActive}        
          {...rest}
        >
          <Label isActive={isActive}>
            {name}
          </Label>
        </Container>
    );
}