import { css, styled } from "styled-components/native";

export const Container = styled.View`
    flex: 1;

    justify-content: center;
    align-items: center;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.ROBOTO.BOLD};
    font-size: ${theme.FONT_SIZE.ROBOTO.MD}px;
  `}
`;