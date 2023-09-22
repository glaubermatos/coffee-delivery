import { css, styled } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_900};
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};

  padding-bottom: 328px;

`;

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.ROBOTO.BOLD};
    font-size: ${theme.FONT_SIZE.ROBOTO.MD}px;
  `}
`;

export const Info = styled.View`
  margin: 12px 32px 0 32px;
  align-items: flex-start ;
`;

export const Main = styled.View`
  flex-direction: row;

  align-items: flex-end;
`;

export const TitleContainer = styled.View`
  flex: 1;
  gap: 12px;
  align-items: flex-start ; 
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BALOO_2.BOLD};
    font-size: ${theme.FONT_SIZE.ROBOTO.LG}px;
  `}
`;

export const Price = styled.View`
    flex-direction: row;
    align-items: baseline;
    gap: 4px;
`;

export const Currency = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.ROBOTO.REGULAR};
        color: ${theme.COLORS.YELLOW};
        font-size: ${theme.FONT_SIZE.ROBOTO.SM}px;
    `}
`;

export const Value = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BALOO_2.BOLD};
        color: ${theme.COLORS.YELLOW};
        font-size: ${theme.FONT_SIZE.BALOO_2.XL}px;
    `}
`;

export const Description = styled.Text`
    ${({ theme }) => css`
        margin-top: 20px;
        text-align: justify;
        font-family: ${theme.FONT_FAMILY.ROBOTO.REGULAR};
        color: ${theme.COLORS.GRAY_500};
        font-size: ${theme.FONT_SIZE.ROBOTO.SM}px;
    `}
`;  

export const ImageContainer = styled.View`
  margin-top: -220px;
  align-items: center;
  position: relative;
`;

export const ProductImage = styled.Image`
  margin-bottom: -40px;
  z-index: 1;
`;

export const Selection = styled.View`
  gap: 8px;
`;

export const SelectionTitle = styled.Text`
  ${({ theme }) => css`
      font-family: ${theme.FONT_FAMILY.ROBOTO.REGULAR};
      color: ${theme.COLORS.GRAY_400};
      font-size: ${theme.FONT_SIZE.ROBOTO.SM}px;
  `}
`;

export const OptionsListContainer = styled.View`
  flex-direction: row;
  gap: 8px; 
`;

export const AddToCartContainer = styled.View`
  border-radius: 6px;
  padding: 8px;

  flex-direction: row;
  gap: 16px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;