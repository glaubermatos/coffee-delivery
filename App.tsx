import { Home } from '@screens/Home';
import defaultTheme from '@theme/defaultTheme';
import { ThemeProvider } from 'styled-components';

import { useFonts, Baloo2_400Regular, Baloo2_700Bold } from '@expo-google-fonts/baloo-2';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { ActivityIndicator, View } from 'react-native';

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
    <ThemeProvider theme={defaultTheme}>
      <Home />
    </ThemeProvider>
  );
}
