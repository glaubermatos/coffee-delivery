import AsyncStorage from '@react-native-async-storage/async-storage';

import { CART_COLLECTION } from '@storage/storageConfig';
import { StorageCartItemProps } from '@storage/dtos/storageCartItemProps';

export const cartStorageGetAll = async () => {
    try {
        const storage = await AsyncStorage.getItem(CART_COLLECTION);
        const cart: StorageCartItemProps[] = storage ? JSON.parse(storage) : []
    
        return cart;
    } catch (error) {
      throw error;
    }
}