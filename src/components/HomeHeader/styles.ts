import styled, { css } from "styled-components/native";

export const Container = styled.View`
    padding: 32px 32px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
    z-index: 1;
`;

export const Location = styled.View`
    flex-direction: row;    
`;

export const City = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_900};
        font-size: ${theme.FONT_SIZE.ROBOTO.SM}px;
        font-family: ${theme.FONT_FAMILY.ROBOTO.REGULAR};

        margin-left: 4px;
    `}
`;
