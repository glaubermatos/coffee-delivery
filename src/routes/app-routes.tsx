import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Cart } from '@screens/Cart';

import { Home } from '@screens/Home';
import { Product } from '@screens/Product';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {

    return (
        <Navigator screenOptions={{ 
            headerShown: false,
            animation:'slide_from_right',
            animationDuration: 250,

            statusBarStyle: 'light',
            statusBarTranslucent: true,
            statusBarColor: 'transparent'

            // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            // ...TransitionPresets.SlideFromRightIOS, 
        }}>
            <Screen 
                name='home'
                component={Home}
            />

            <Screen 
                name='product'
                component={Product}
                options={{
                    statusBarStyle: 'light',
                    statusBarTranslucent: true,
                    statusBarColor: 'transparent'
                }}
            />

            <Screen 
                name='cart'
                component={Cart}
                // options={{
                //     statusBarStyle: 'light',
                //     statusBarTranslucent: true,
                //     statusBarColor: 'transparent'
                // }}
            />
        </Navigator>
    );
}