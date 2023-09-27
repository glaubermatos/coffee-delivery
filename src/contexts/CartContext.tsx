import { cartStorageAddItem } from "@storage/cart/CartStorageAddItem";
import { cartStorageGetAll } from "@storage/cart/CartStorageGetAll";
import { cartStorageRemoveItem } from "@storage/cart/CartStorageRemoveItem";
import { StorageCartItemProps } from "@storage/dtos/storageCartItemProps";
import { ReactNode, createContext, useEffect, useState } from "react";

type CartContextData = {
    cart: StorageCartItemProps[];
    addProductCart: (productInput: StorageCartItemProps) => Promise<void>;
    removeProductCart: (productId: string) => Promise<void>;
}

export const CartContext = createContext<CartContextData>({} as CartContextData);

type CartProviderProps = {
    children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({children}) => {
    const [cart, setCart] = useState<StorageCartItemProps[]>([]);

    async function addProductCart(productInput: StorageCartItemProps) {
        try {
          const storageResponse = await cartStorageAddItem(productInput);
          setCart(storageResponse);

          await fetchCart();

        } catch (error) {
          throw error;
        }
      }
    
      async function removeProductCart(productId: string) {
        try {
          const response = await cartStorageRemoveItem(productId);
          setCart(response);

          await fetchCart();
          
        } catch (error) {
          throw error;
        }
      }

    async function fetchCart() {
      try {
        const response = await cartStorageGetAll();
        setCart(response);
        
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
      fetchCart();
    }, [cart]);

    return (
        <CartContext.Provider
            value={{
                cart, 
                addProductCart, 
                removeProductCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
}