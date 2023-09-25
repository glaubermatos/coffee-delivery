import 'react-native-gesture-handler';
import defaultTheme from '@theme/defaultTheme';
import { ThemeProvider } from 'styled-components';

import { Routes } from '@routes/index';

import { useFonts, Baloo2_400Regular, Baloo2_700Bold } from '@expo-google-fonts/baloo-2';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { ActivityIndicator, StatusBar, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useState } from 'react';
import Animated from 'react-native-reanimated';
import { CartProvider } from '@contexts/CartContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import theme from '@theme/defaultTheme'

const AnimatedStatusBar = Animated.createAnimatedComponent(StatusBar);

export default function App() {
  const [fontsLoaded] = useFonts({
    Baloo2_400Regular,
    Baloo2_700Bold,
    Roboto_400Regular,
    Roboto_700Bold
  })

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }
  

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ThemeProvider theme={defaultTheme}>

        {/* <SafeAreaProvider style={{ flex: 1, backgroundColor: theme.COLORS.GRAY_900}}> */}
          <StatusBar
              barStyle={"light-content"}
              backgroundColor='transparent'
              translucent
          />

          <CartProvider>
            <Routes />
          </CartProvider>
        {/* </SafeAreaProvider> */}

      </ThemeProvider>
    </GestureHandlerRootView>
  );
}










// import * as React from 'react';
// import { View, Button, StyleSheet } from 'react-native';
// import { NavigationContainer, NavigationProp } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import Animated from 'react-native-reanimated';

// const Stack = createNativeStackNavigator();

// function HomeScreen({ navigation }: any) {
//   return (
//     <View style={styles.container}>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//       <Animated.Image
//         source={{ uri: 'https://picsum.photos/id/39/200' }}
//         style={{ width: 300, height: 300 }}
//         sharedTransitionTag="tag"
//       />
//     </View>
//   );
// }

// function DetailsScreen({ navigation }: any) {
//   return (
//     <View style={styles.container}>
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//       <Animated.Image
//         source={{ uri: 'https://picsum.photos/id/39/200' }}
//         style={{ width: 100, height: 100 }}
//         sharedTransitionTag="tag"
//       />
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//   },
// });