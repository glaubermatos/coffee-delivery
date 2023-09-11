import { css, styled } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_800};
    font-family: ${theme.FONT_FAMILY.ROBOTO.BOLD};
    font-size: ${theme.FONT_SIZE.ROBOTO.MD}px;
  `}
`;

export const Text2 = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_800};
    font-family: ${theme.FONT_FAMILY.BALOO_2.BOLD};
    font-size: ${theme.FONT_SIZE.BALOO_2.MD}px;
  `}
`;