import styled, { css } from "styled-components/native";

export type ButtonColorStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  color?: ButtonColorStyleProps;
}

export const Container = styled.Pressable<Props>`
    width: '100%';
    padding: 12px 8px;
    border-radius: 6px;
    background-color: ${({ theme, color = "PRIMARY" }) => color === "PRIMARY" ? theme.COLORS.PURPLE_DARK : theme.COLORS.YELLOW_DARK};

    align-items: center;
    justify-content: center;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
      font-family: ${theme.FONT_FAMILY.ROBOTO.BOLD};
      color: ${theme.COLORS.WHITE};
      font-size: ${theme.FONT_SIZE.ROBOTO.BUTTON}px;
      text-transform: uppercase;
  `}
`;