import styled from "styled-components/native";

export const Container = styled.View`
    border-radius: 4px;
    padding: 12px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_200};

    flex-direction: row;
    align-items: center;
`;

export const TextInput = styled.TextInput`
    color: ${({ theme }) => theme.COLORS.GRAY_700};
    font-size: ${({ theme }) => theme.FONT_SIZE.ROBOTO.SM}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO.REGULAR};
    
    margin-left: 8px;
`;