import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.COLORS.GRAY_800};
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_700};
    padding: 16px 16px 13px 8px;
    /* margin: 0 32px; */

    border-radius: 6px 36px 6px 36px;

    flex-direction: row;
    gap: 12px;

`;

export const Image = styled.Image`
    margin-top: -32px;
    height: 96px;
    width: 96px;
`;  

export const Content = styled.View`
    flex: 1;
    gap: 8px;
`;

export const Info = styled.View`
    gap: 4px;
`;

export const Name = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BALOO_2.BOLD};
        font-size: ${theme.FONT_SIZE.BALOO_2.SM}px;
        color: ${theme.COLORS.GRAY_200};
    `}
`;

export const Description = styled.Text`
    ${({ theme }) => css`
        text-align: left;
        font-family: ${theme.FONT_FAMILY.ROBOTO.REGULAR};
        color: ${theme.COLORS.GRAY_400};
        font-size: ${theme.FONT_SIZE.ROBOTO.XS}px;
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
        color: ${theme.COLORS.YELLOW_DARK};
        font-size: ${theme.FONT_SIZE.ROBOTO.SM}px;
    `}
`;

export const Value = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BALOO_2.BOLD};
        color: ${theme.COLORS.YELLOW_DARK};
        font-size: ${theme.FONT_SIZE.BALOO_2.MD}px;
    `}
`;