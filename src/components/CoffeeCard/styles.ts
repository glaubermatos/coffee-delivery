import styled, { css } from "styled-components/native";

export const Container = styled.View`
    width: 200px;
    border-radius: 4.8px 28.8px;
    padding: 0 12px 16px 12px;

    
    background-color: ${({ theme }) => theme.COLORS.GRAY_800};
    `;

export const Content = styled.View`
    align-items: center;
    margin-top: -10px;
`;

export const Info = styled.View`
    gap: 4px;
    margin-top: 12px;
    margin-bottom: 12px;
    padding-bottom: 4px;
`;

export const Name = styled.Text`
    ${({ theme }) => css`
        text-align: center;
        font-size: ${theme.FONT_SIZE.BALOO_2.XS}px;
        font-family: ${theme.FONT_FAMILY.BALOO_2.BOLD};
        color: ${theme.COLORS.GRAY_200};
    `}
`;

export const Description = styled.Text`
    ${({ theme }) => css`
        text-align: center;
        font-size: ${theme.FONT_SIZE.ROBOTO.TAG}px;
        font-family: ${theme.FONT_FAMILY.ROBOTO.REGULAR};
        color: ${theme.COLORS.GRAY_400};
    `}
`;

export const Price = styled.View`
    flex-direction: row;
    align-items: baseline;
    gap: 4px;
`;

export const Currency = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.ROBOTO.TAG}px;
        font-family: ${theme.FONT_FAMILY.ROBOTO.REGULAR};
        color: ${theme.COLORS.YELLOW_DARK};
    `}
`;

export const Value = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.BALOO_2.MD}px;
        font-family: ${theme.FONT_FAMILY.BALOO_2.BOLD};
        color: ${theme.COLORS.YELLOW_DARK};
    `}
`;

export const Image = styled.Image`
    margin-bottom: 20px;
`;