import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './app-routes';
import Toast, {} from 'react-native-toast-message';
import { MessageItemAddedToCart } from '@components/MessageItemAddedToCart';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function Routes() {

    return (
        <NavigationContainer>                  
            <AppRoutes />

            <Toast 
                config={{
                    info: ({ text2 }) => <MessageItemAddedToCart />,
                }}
                
                position='bottom'
                bottomOffset={0}
                // topOffset={insets.top}
            />
        </NavigationContainer>
    );
}