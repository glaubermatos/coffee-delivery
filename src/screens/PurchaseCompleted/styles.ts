import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_900};
`;

export const Content = styled.View`
    margin-top: 76px;
    padding-top: 68px;
    padding-bottom: 80px;
    
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
      margin-top: 46px;
      font-family: ${theme.FONT_FAMILY.BALOO_2.BOLD};
      color: ${theme.COLORS.YELLOW_DARK};
      font-size: ${theme.FONT_SIZE.BALOO_2.LG}px;
  `}
`;

export const Text = styled.Text`
  ${({ theme }) => css`
      margin-top: 8px;
      margin-bottom: 64px;
      max-width: 260px;

      text-align: center;
      font-family: ${theme.FONT_FAMILY.ROBOTO.REGULAR};
      color: ${theme.COLORS.GRAY_200};
      font-size: ${theme.FONT_SIZE.ROBOTO.SM}px;
  `}
`;