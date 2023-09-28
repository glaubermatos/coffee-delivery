import { useNavigation } from '@react-navigation/native';
import React, {useRef, useEffect} from 'react';
import {StyleSheet, View, useWindowDimensions} from 'react-native';
import { useTheme } from 'styled-components/native';

import VectorLogoImg from '@assets/vector-logo.svg'
import TextLogoImg from '@assets/type-logo.svg'
import Animated, { Extrapolate, interpolate, useAnimatedStyle, useSharedValue, withDelay, withSpring, withTiming } from 'react-native-reanimated';

export function SplashScreen() {
//    const backgroundFade = useRef(new Animated.Value(0)).current;
//    const logoFade = useRef(new Animated.Value(0)).current;
//    const logoMovement = useRef(new Animated.Value(0)).current;


  const CIRCLE_SIZE = useSharedValue(0);
  const CIRCLE_SIZE_MAX = 1200;
  const TEXT_LOGO_OFFSET = useSharedValue(100);
  const TEXT_LOGO_MAX_OFFSET = 100;


  const backgroundCircleAnimatedStyles = useAnimatedStyle(() => ({
    zIndex: 0,
    height: interpolate(CIRCLE_SIZE.value, [0, CIRCLE_SIZE_MAX], [0, CIRCLE_SIZE_MAX], Extrapolate.CLAMP),
    width: interpolate(CIRCLE_SIZE.value, [0, CIRCLE_SIZE_MAX], [0, CIRCLE_SIZE_MAX], Extrapolate.CLAMP),
  }));

  const opacityVectorLogoAnimatedStyles = useAnimatedStyle(() => ({
    opacity: interpolate(CIRCLE_SIZE.value, [0, CIRCLE_SIZE_MAX], [0, 1], Extrapolate.CLAMP),
    transform: [{
      translateX: interpolate(TEXT_LOGO_OFFSET.value, [TEXT_LOGO_MAX_OFFSET, 50], [0,  -40], Extrapolate.CLAMP)
    }],
  }));

  const opacityTextLogoAnimatedStyles = useAnimatedStyle(() => ({
    opacity: interpolate(TEXT_LOGO_OFFSET.value, [TEXT_LOGO_MAX_OFFSET, 0], [0, 1], Extrapolate.CLAMP),
    transform: [{
      translateX: interpolate(TEXT_LOGO_OFFSET.value, [TEXT_LOGO_MAX_OFFSET, 0], [TEXT_LOGO_MAX_OFFSET, TEXT_LOGO_MAX_OFFSET - 60], Extrapolate.CLAMP)
    }],
  }));
   
  const navigation = useNavigation();
    const { COLORS } = useTheme();

    async function backgroundCircleAnimate() {
      CIRCLE_SIZE.value = withSpring(CIRCLE_SIZE_MAX, {
          mass: 1,
          damping: 15,
          stiffness: 60,
      });
    }

    async function logoAnimate() {
      TEXT_LOGO_OFFSET.value = withSpring(0, {
          mass: 1,
          damping: 15,
          stiffness: 60,
      });
    }

   useEffect(() => {
        backgroundCircleAnimate();

        setTimeout(() => {
          logoAnimate();
        }, 800);
      
      setTimeout(() => {
        navigation.navigate('home');
      }, 2000);

   }, []);

   const styles = StyleSheet.create({
      container: {
         flex: 1,
         position: 'relative',
         flexDirection: 'row',
         gap: 16,
         alignItems: 'center',
         justifyContent: 'center',
         backgroundColor: COLORS.PURPLE_DARK,
        //  opacity: backgroundFade,
      },
      logo: {
        //  opacity: logoFade,
        //  transform: [{translateY: logoMovement}],
      },
   });

   return (
      <Animated.View style={styles.container}>

        <Animated.View style={[
            backgroundCircleAnimatedStyles, 
            {
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
                
                height: 0, 
                width: 0, 
                backgroundColor: COLORS.PURPLE,
                borderRadius: 1200,
            }]}
        />

          {/* <View style={[{
            flexDirection: 'row',
            justifyContent: 'center',
          }]}> */}
          <Animated.View style={[styles.logo, opacityVectorLogoAnimatedStyles]}>
              <VectorLogoImg />
          </Animated.View>

          <Animated.View style={[
              opacityTextLogoAnimatedStyles,
              {
                opacity: 0,
                position: 'absolute',
                transform: [{translateX: TEXT_LOGO_MAX_OFFSET}]
              },
            ]}>
              <TextLogoImg />
          </Animated.View>
          {/* </View> */}


      </Animated.View>
   );
}