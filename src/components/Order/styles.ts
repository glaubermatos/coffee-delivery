import styled, { css } from "styled-components/native";

export const Container = styled.View`
    padding: 28px 32px 40px 32px;

    background-color: ${({ theme }) => theme.COLORS.WHITE};

    gap: 20px;
`;

export const Row = styled.View`
    flex-direction: row;
    gap: 4px;
    align-items: center;
`;

export const Label = styled.Text`
    ${({ theme }) => css`
        flex: 1;
        color: ${theme.COLORS.GRAY_200};
        font-size: ${theme.FONT_SIZE.ROBOTO.MD}px;
        font-family: ${theme.FONT_FAMILY.ROBOTO.REGULAR};
    `}
`;

export const Value = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_200};
        font-size: ${theme.FONT_SIZE.BALOO_2.MD}px;
        font-family: ${theme.FONT_FAMILY.ROBOTO.BOLD};
    `}
`;

