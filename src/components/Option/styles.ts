import styled, { css } from "styled-components/native";

type Props = {
  isActive: boolean;
}

export const Container = styled.Pressable<Props>`
    border-radius: 6px;

    background-color: ${({ theme, isActive }) => isActive ? theme.COLORS.WHITE : theme.COLORS.GRAY_700};
    border-width: ${({ isActive }) => isActive ? 1 : 0}px;
    border-color: ${({ theme, isActive }) => isActive ? theme.COLORS.PURPLE : 'transparent'};


    height: 40px;
    flex: 1;

    align-items: center;
    justify-content: center;
`;

export const Label = styled.Text<Props>`
  ${({ theme, isActive }) => css`
      font-family: ${theme.FONT_FAMILY.ROBOTO.REGULAR};
      color: ${isActive ? theme.COLORS.PURPLE : theme.COLORS.GRAY_300};
      font-size: ${theme.FONT_SIZE.ROBOTO.SM}px;
  `}
`;