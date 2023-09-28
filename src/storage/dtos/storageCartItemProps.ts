import { ImageSourcePropType } from "react-native";

type StorageCartItemProps = {
    id: string;
    productId: string
    name: string;
    size: string;
    quantity: number;
    image: ImageSourcePropType;
    price: number;
}

export {StorageCartItemProps}