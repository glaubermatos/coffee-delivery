import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageCartItemProps } from '@storage/dtos/storageCartItemProps';
import { CART_COLLECTION } from '@storage/storageConfig';
import { cartStorageGetAll } from './CartStorageGetAll';

export const cartStorageAddItem = async (productInput: StorageCartItemProps) => {
  try {
    let stored = await cartStorageGetAll();

    const productExists = stored.filter(product => product.id === productInput.id);

    if (productExists.length > 0 ) {
        stored = stored.map(product => {
        if (product.id === productExists[0].id) {
          product.quantity = Number(productExists[0].quantity) + Number(productInput.quantity)
        }

        return product;
      });

    } else {
        stored.push(productInput);
    }

    const productsUpdated = JSON.stringify(stored);
    await AsyncStorage.setItem(CART_COLLECTION, productsUpdated);

    return stored;

  } catch (error) {
    throw error;
  }
}