import styled, { css } from "styled-components/native";

type Props = {
    isActive?: boolean
}

export const Container = styled.Pressable<Props>`
    border-radius: 100px;
    padding: 6px 12px;

    border: 1px solid ${({theme}) => theme.COLORS.PURPLE};
    
    justify-content: center;
    align-items: center;

    margin-right: 8px;

    ${({theme, isActive}) => css`
            background-color: ${isActive ? theme.COLORS.PURPLE : theme.COLORS.WHITE};
        `
    }
`;

export const Label = styled.Text<Props>`
  text-transform: uppercase;

  ${({ theme, isActive }) => css`
    color: ${isActive ? theme.COLORS.WHITE : theme.COLORS.PURPLE};
    font-family: ${theme.FONT_FAMILY.ROBOTO.BOLD};
    font-size: ${theme.FONT_SIZE.ROBOTO.TAG}px;
  `}
`;