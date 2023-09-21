import { PressableProps } from "react-native";
import { Container, Label } from "./styles";

type Props = PressableProps & {
    name: string,
    isActive?: boolean,
}

export function Option({ name, isActive = false, ...rest }: Props) {
    return (
        <Container
        //   overflow="hidden"
        //   isPressed={isActive}
        //   _pressed={{
        //     borderColor: "green.500",
        //     borderWidth: 1
        //   }}

          {...rest}
        >
          <Label>
            {name}
          </Label>
        </Container>
    );
}