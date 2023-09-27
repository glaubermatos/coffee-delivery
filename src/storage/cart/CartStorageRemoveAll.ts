import AsyncStorage from '@react-native-async-storage/async-storage';
import { CART_COLLECTION } from '@storage/storageConfig';

export const cartStorageRemoveAll = async () => {
  try {
    await AsyncStorage.removeItem(CART_COLLECTION);

  } catch (error) {
    throw error;
  }
}