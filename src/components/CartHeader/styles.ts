import styled, { css } from "styled-components/native";

export const Container = styled.View`
    padding: 28px 32px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_900};

    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_700};

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        flex: 1;
        text-align: center;
        color: ${theme.COLORS.GRAY_200};
        font-size: ${theme.FONT_SIZE.BALOO_2.SM}px;
        font-family: ${theme.FONT_FAMILY.BALOO_2.BOLD};

        margin-left: 4px;
    `}
`;
