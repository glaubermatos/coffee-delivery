import styled, { css } from "styled-components/native";

export type TagColorStyleProps = "primary" | "secondary";

type Props = {
    color?: TagColorStyleProps;
}

export const Container = styled.Text<Props>`
    ${({ theme, color = 'primary'}) => css`
        background-color: ${theme.COLORS.PURPLE_LIGHT};

        border-radius: 80px;
        padding: 3px 6px;
        text-transform: uppercase;

        font-family: ${theme.FONT_FAMILY.ROBOTO.BOLD};
        font-size: 8px;
        color: ${theme.COLORS.PURPLE};
    `}
`;