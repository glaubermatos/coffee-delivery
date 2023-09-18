import { CoffeeCardSizeProps } from "@components/CoffeeCard/styles";
import styled, { DefaultTheme, css } from "styled-components/native";

export type TagColorStyleProps = "primary" | "secondary";

type Props = {
    color?: TagColorStyleProps;
    size: CoffeeCardSizeProps;
}

const containerVariantSizeStyle = (size: CoffeeCardSizeProps, theme: DefaultTheme) => {
    return {
        DEFAULT: css`
            border-radius: 80px;
            font-size: 8px;
            padding: 3px 6px;
        `,
        FOCUSED: css`
            border-radius: 100px;
            font-size: ${theme.FONT_SIZE.ROBOTO.TAG}px;
            padding: 4px 8px;
        `,
    }[size]
}

export const Container = styled.Text<Props>`
    ${({ theme, color = 'primary'}) => css`
        background-color: ${theme.COLORS.PURPLE_LIGHT};

        text-transform: uppercase;

        font-family: ${theme.FONT_FAMILY.ROBOTO.BOLD};
        color: ${theme.COLORS.PURPLE};
    `}

    ${({size, theme}) => containerVariantSizeStyle(size, theme)};
`;