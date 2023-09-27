import { ImageSourcePropType } from "react-native";

type StorageCartItemProps = {
    id: string;
    name: string;
    size: string;
    quantity: number;
    image: ImageSourcePropType;
    price: number;
}

export {StorageCartItemProps}