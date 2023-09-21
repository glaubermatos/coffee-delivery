import styled, { css } from "styled-components/native";

export const Container = styled.Pressable`
    border-radius: 6px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};

    height: 40px;
    flex: 1;

    align-items: center;
    justify-content: center;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
      font-family: ${theme.FONT_FAMILY.ROBOTO.REGULAR};
      color: ${theme.COLORS.GRAY_300};
      font-size: ${theme.FONT_SIZE.ROBOTO.SM}px;
  `}
`;