import { Dimensions } from "react-native";
import styled, { css } from "styled-components/native";

const dimensions = Dimensions.get('window')

export const Container = styled.Pressable`
    width: 100%;
    padding: 28px 32px 32px 32px;

    background-color: ${({ theme }) => theme.COLORS.WHITE} ;
`;

export const Content = styled.View`
    flex-direction: row;
    gap: 20px;
    justify-content: space-between;
    align-items: center;
`;

export const CartIconContainer = styled.View`
    background-color: ${({ theme }) => theme.COLORS.GRAY_500} ;
    border-radius: 6px;
    padding: 8px;
`;

export const Message = styled.Text`
  ${({ theme }) => css` 
      max-width: 250px;
      font-family: ${theme.FONT_FAMILY.ROBOTO.REGULAR};
      color: ${theme.COLORS.GRAY_400};
      font-size: ${theme.FONT_SIZE.ROBOTO.SM}px;
  `}
`;

export const Highlight = styled.Text`
  ${({ theme }) => css`
      font-family: ${theme.FONT_FAMILY.ROBOTO.BOLD};
      color: ${theme.COLORS.GRAY_400};
      font-size: ${theme.FONT_SIZE.ROBOTO.SM}px;
  `}
`;

export const ShowCartButtonLink = styled.TouchableOpacity`
    flex-direction: row;
    gap: 4px;
`;



export const Label = styled.Text`
  ${({ theme }) => css` 
      font-family: ${theme.FONT_FAMILY.ROBOTO.BOLD};
      color: ${theme.COLORS.PURPLE};
      font-size: ${theme.FONT_SIZE.ROBOTO.XS}px;
  `}
`;