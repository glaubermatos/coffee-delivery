import { ReactNode, createContext, useState } from "react";

type CartContextData = {
    hasBeenAddedToCart: boolean;
    onAddItemToCart: () => void;
}

export const CartContext = createContext<CartContextData>({} as CartContextData);

type CartProviderProps = {
    children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({children}) => {
    const [hasBeenAddedToCart, setHasBeenAddedToCart] = useState(false);

    function handleItemAddedCart() {
        setHasBeenAddedToCart(true)
    }

    return (
        <CartContext.Provider value={{hasBeenAddedToCart, onAddItemToCart: handleItemAddedCart }}>
            {children}
        </CartContext.Provider>
    );
}