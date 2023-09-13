import { useTheme } from "styled-components/native";
import { Container, TextInput } from "./styles";
import { TextInputProps } from "react-native";
import { MagnifyingGlass } from "phosphor-react-native";

type Props = TextInputProps & {}

export function SearchInput({...rest}: Props) {
    const { COLORS } = useTheme()
    
    return (
        <Container>
            <MagnifyingGlass size={16} color={COLORS.GRAY_400}/>

            <TextInput
                placeholderTextColor={COLORS.GRAY_400} 
                {...rest}
            />
        </Container>
    );
}