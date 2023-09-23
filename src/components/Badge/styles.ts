import styled, { css } from "styled-components/native";

export const Container = styled.View`
    background-color: ${({ theme }) => theme.COLORS.PURPLE};
    border-radius: 100px;
    width: 20px;
    padding-top: 2px;

    align-items: center;
    justify-content: center;

    position: absolute;
    right: -8px;
    top: -8px

`;

export const Label = styled.Text`
  ${({ theme }) => css`
      text-align: center;
      font-family: ${theme.FONT_FAMILY.ROBOTO.REGULAR};
      color: ${theme.COLORS.WHITE};
      font-size: ${theme.FONT_SIZE.ROBOTO.XS}px;
  `}
`;
