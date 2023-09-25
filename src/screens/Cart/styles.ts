import { Swipeable } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_900};
    
    /* justify-content: space-between; */
`;

export const SwipeableCard = styled(Swipeable).attrs(({theme}) => ({
    containerStyle: {
        width: '100%',
        backgroundColor: theme.COLORS.RED_LIGHT, 
        borderRadius: 6,
    }
}))``;

export const SwipeableRemoveContainer = styled.View`
    width: 90px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.COLORS.RED_LIGHT};
    align-items: center;
    justify-content: center;
`;    