import styled, { css } from "styled-components/native";

export type CounterStyleProps = {
    showBorders?: boolean; // default = false
}

type Props = CounterStyleProps;

export const Container = styled.View<Props>`
    border-radius: 6px;
    flex-direction: row;

    align-items: center;
    gap: 4px;
    
    border: 1px solid ${({ theme, showBorders = false }) => showBorders ? theme.COLORS.GRAY_600 : 'transparent'};
`;

export const CounterValue = styled.Text`
 ${({ theme }) => css`
      width: 20px;
      text-align: center;
      font-family: ${theme.FONT_FAMILY.ROBOTO.REGULAR};
      color: ${theme.COLORS.GRAY_100};
      font-size: ${theme.FONT_SIZE.ROBOTO.MD}px;
  `}
`;