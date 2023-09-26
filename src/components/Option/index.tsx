import { PressableProps } from "react-native";
import { Container, Label } from "./styles";
import { forwardRef } from "react";
import Animated, { StyleProps } from "react-native-reanimated";

const AnimatedContainer = Animated.createAnimatedComponent(Container);

type Props = PressableProps & {
    name: string,
    isActive?: boolean,
}

export const Option: React.FC<Props> = ({ name, isActive = false, ...rest }) => {
  // const OptionBase: React.ForwardRefRenderFunction<any, Props> = ({ name, isActive = false, ...rest }, ref) => {
    return (
        <AnimatedContainer
          isActive={isActive}
        //   overflow="hidden"
        //   isPressed={isActive}
        //   _pressed={{
        //     borderColor: "green.500",
        //     borderWidth: 1
        //   }}

          {...rest}
        >
          <Label isActive={isActive}>
            {name}
          </Label>
        </AnimatedContainer>
    );
}

// export const Option = forwardRef(OptionBase);