import 'react-native-gesture-handler';
import defaultTheme from '@theme/defaultTheme';
import { ThemeProvider } from 'styled-components';

import { Routes } from '@routes/index';

import { useFonts, Baloo2_400Regular, Baloo2_700Bold } from '@expo-google-fonts/baloo-2';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { ActivityIndicator, StatusBar, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { CartProvider } from '@contexts/CartContext';


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










// import React, { useRef, useState } from 'react';
// import { View, Text, SectionList, TouchableOpacity, SectionListRenderItemInfo, SectionBase, SectionListData, ViewToken } from 'react-native';
// import Animated, { SlideInDown } from 'react-native-reanimated';

// const TabHeader: React.FC<{tabs: Array<string>, activeTab: number, onPressTab: (index: number) => void}> = ( {tabs, activeTab, onPressTab } ) => (
//     <View style={{ flexDirection: 'row', justifyContent: 'space-around', backgroundColor: 'lightgray' }}>
//     {tabs.map((tab, index) => (
//       <TouchableOpacity
//         key={index}
//         onPress={() => onPressTab(index)}
//         style={{
//           paddingVertical: 10,
//           borderBottomWidth: activeTab === index ? 2 : 0,
//           borderBottomColor: 'blue',
//         }}
//       >
//         <Text style={{ fontWeight: activeTab === index ? 'bold' : 'normal' }}>{tab}</Text>
//       </TouchableOpacity>
//     ))}
//   </View>
// );

// const App = () => {
//   const [activeTab, setActiveTab] = useState(0);
//   const sectionListRef = useRef<any>(null);

//   const [coffees, setCoffees] = useState([{title: 'tradicionais', data: [
//     {id: 1, name: 'Irlandês', description: 'lorem ipsum dolor'},
//     {id: 2, name: 'Café com leite 1', description: 'lorem ipsum dolor'}
//   ]},
//   {title: 'doces', data: [
//       {id: 12, name: 'Irlandês 2', description: 'lorem ipsum dolor'},
//       {id: 13, name: 'Árabe 6', description: 'lorem ipsum dolor'},
//   ]},
//   {title: 'especiais', data: [
//       {id: 14, name: 'Café com leite7', description: 'lorem ipsum dolor'},
//       {id: 3, name: 'Árabe', description: 'lorem ipsum dolor'},
//       {id: 4, name: 'Café com leite 2', description: 'lorem ipsum dolor'},
//       {id: 5, name: 'Árabe 2', description: 'lorem ipsum dolor'},
//       {id: 6, name: 'Café com leite 3', description: 'lorem ipsum dolor'},
//       {id: 7, name: 'Árabe 3', description: 'lorem ipsum dolor'},
//       {id: 8, name: 'Café com leite 4', description: 'lorem ipsum dolor'},
//       {id: 9, name: 'Árabe 4', description: 'lorem ipsum dolor'},
//       {id: 10, name: 'Café com leite 5', description: 'lorem ipsum dolor'},
//       {id: 11, name: 'Árabe 5', description: 'lorem ipsum dolor'},
//   ]}])

//   const renderItem = ({ item }: SectionListRenderItemInfo<{
//     id: number;
//     name: string;
//     description: string;
// }, {
//     title: string;
//     data: ({
//         id: number;
//         name: string;
//         description: string;
//     } | undefined)[];
// }>) => (
//     <View style={{ padding: 10 }}>
//       <Text>{item?.name}</Text>
//     </View>
//   );

//   const renderSectionHeader = ({ section }: {
//     section: SectionListData<{
//         id: number;
//         name: string;
//         description: string;
//     }, {
//         title: string;
//         data: ({
//             id: number;
//             name: string;
//             description: string;
//         } | undefined)[];
//     }>}) => (
//     <View style={{ backgroundColor: 'lightblue', padding: 10 }}>
//       <Text>{section.title}</Text>
//     </View>
//   );

//   const onViewableItemsChanged = ({ viewableItems }: {
//     viewableItems: ViewToken[];
//     changed: ViewToken[];
// }) => {
//     if (viewableItems.length > 0) {
//       const sectionIndex = coffees.findIndex((section) => section.title === viewableItems[0].section.title);
//       if (sectionIndex !== -1) {
//         setActiveTab(sectionIndex);
//       }
//     }
//   };  

//   const scrollToSection = (sectionIndex: number) => {
//     if (sectionListRef.current) {
//       sectionListRef.current.scrollToLocation({
//         sectionIndex,
//         itemIndex: 0,
//         viewOffset: 0,
//         animated: true,
//       });
//     }
//   };

//   const handleTabPress = (index: number) => {
//     if (activeTab !== index) {
//         scrollToSection(index);
//     }
//   };

//   return (
//     <Animated.View entering={SlideInDown.duration(500)} style={{ flex: 1, marginTop: 500 }}>
//       <TabHeader
//         tabs={['tradicionais', 'doces', 'especiais']}
//         activeTab={activeTab}
//         onPressTab={(index) => {
//           handleTabPress(index);
//         }}
//       />

//       <SectionList
//         ref={sectionListRef}
//         sections={coffees}
//         keyExtractor={(item, index) => String(item?.id)}
//         renderItem={(props) => renderItem(props)}
//         renderSectionHeader={(data) => renderSectionHeader(data)}
//         stickySectionHeadersEnabled={false} // Desativar seções pegajosas
//         initialNumToRender={20} // Ajuste conforme necessário
//         maxToRenderPerBatch={10} // Ajuste conforme necessário
//         windowSize={10} // Ajuste conforme necessário
//         removeClippedSubviews={true}
//         onViewableItemsChanged={(items) => onViewableItemsChanged(items)}
//       />
//     </Animated.View>
//   );
// };

// export default App;
