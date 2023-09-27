import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './app-routes';
import Toast, {} from 'react-native-toast-message';
import { MessageItemAddedToCart } from '@components/MessageItemAddedToCart';

export function Routes() {
    return (
        <NavigationContainer>                  
            <AppRoutes />

            <Toast 
                config={{
                    info: ({ text1, text2 }) =>  <MessageItemAddedToCart 
                            quantity={Number(text1?.split(',')[0])} 
                            size={text1?.split(',')[1]!} 
                            productName={text2!} 
                        />
                }}
                
                position='bottom'
                bottomOffset={0}
                visibilityTime={2800}
            />
        </NavigationContainer>
    );
}