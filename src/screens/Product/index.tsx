import { Container, Text } from "./styles";
import Animated, { SharedTransition, withSpring } from 'react-native-reanimated';

const AnimatedContainer = Animated.createAnimatedComponent(Container)


export function Product() {
    const transition = SharedTransition.custom((values) => {
        'worklet';
        return {
          height: withSpring(values.targetHeight),
          width: withSpring(values.targetWidth),
          originX: withSpring(values.targetOriginX),
          originY: withSpring(values.targetOriginY),
        };
      });

    return (
        <AnimatedContainer
            sharedTransitionTag="tag"
            sharedTransitionStyle={transition}
        >            
            <Text>Product</Text>
        </AnimatedContainer>
    )
}