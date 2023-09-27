import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageCartItemProps } from '@storage/dtos/storageCartItemProps';
import { CART_COLLECTION } from '@storage/storageConfig';
import { cartStorageGetAll } from './CartStorageGetAll';

export const cartStorageRemoveItem = async (productId: string) => {
  try {
    const stored = await cartStorageGetAll();

    const productsUpdated = stored.filter(product => product.id !== productId);
    await AsyncStorage.setItem(CART_COLLECTION, JSON.stringify(productsUpdated));

    return productsUpdated;
    
  } catch (error) {
    throw error;
  }
}