import styled from "styled-components/native";
import { css } from "styled-components/native";

export const Container = styled.View`
    padding: 64px;
    gap: 32px;
`;

export const NoItemsInfo = styled.View`
    align-items: center;
    gap: 12px;
`;

export const Text = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.ROBOTO.REGULAR};
        font-size: ${theme.FONT_SIZE.ROBOTO.SM}px;
        color: ${theme.COLORS.GRAY_400};
    `}
`;