import { TransitionPresets, createStackNavigator } from '@react-navigation/stack';

import { Home } from '@screens/Home';
import { Product } from '@screens/Product';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {

    return (
        <Navigator screenOptions={{ headerShown: false, ...TransitionPresets.SlideFromRightIOS, }}>
            <Screen 
                name='home'
                component={Home}
            />

            <Screen 
                name='product'
                component={Product}
              
            />
        </Navigator>
    );
}