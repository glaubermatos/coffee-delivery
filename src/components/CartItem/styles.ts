import styled, { css } from "styled-components/native";

export const Container = styled.View`
    padding: 16px 32px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_900};

    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_700};

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
`;

export const ProductImage = styled.Image`
    width: 64px;
    height: 64px;
`;

export const Info = styled.View`
    flex: 1;
    gap: 8px;
`;

export const About = styled.View`
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    gap: 8px;
`;

export const Title = styled.View`
    flex: 1;
    gap: 2px;
`;

export const Name = styled.Text`
  ${({ theme }) => css`
      font-family: ${theme.FONT_FAMILY.ROBOTO.REGULAR};
      color: ${theme.COLORS.GRAY_100};
      font-size: ${theme.FONT_SIZE.ROBOTO.MD}px;
  `}
`;

export const Size = styled.Text`
  ${({ theme }) => css`
      font-family: ${theme.FONT_FAMILY.ROBOTO.REGULAR};
      color: ${theme.COLORS.GRAY_400};
      font-size: ${theme.FONT_SIZE.ROBOTO.SM}px;
  `}
`;

export const ItemValue = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BALOO_2.BOLD};
        color: ${theme.COLORS.GRAY_100};
        font-size: ${theme.FONT_SIZE.BALOO_2.SM}px;
    `}
`;

export const Actions = styled.View`
    flex-direction: row;
    gap: 8px;
`;

export const TrashButton = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.COLORS.GRAY_700} ;
    padding: 8px;

    border-radius: 6px;

    align-items: center;
    justify-content: center; 
`;