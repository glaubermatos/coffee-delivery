import styled, { DefaultTheme, css } from "styled-components/native";

export type CoffeeCardSizeProps = "DEFAULT" | "FOCUSED";

type Props = {
    size: CoffeeCardSizeProps
}

let SIZE: CoffeeCardSizeProps = 'DEFAULT'

const containerVariantSizeStyle = (size: CoffeeCardSizeProps) => {
    SIZE = size;

    return {
        DEFAULT: css`
            padding: 72px 12px 16px 12px;
            border-radius: 4.8px 28.8px;
            width: 196.4px;
        `,
        FOCUSED: css`
            padding: 96px 16px 20px 16px;
            border-radius: 6px  36px;
            width: 238px;
        `,
    }[size]
}

export const Container = styled.Pressable<Props>`
    /* height: 270px; */

    /* box-shadow: 0px 1.6px 6.4px 0px rgba(0, 0, 0, 0.05); */
    background-color: ${({ theme }) => theme.COLORS.GRAY_800};

    position: relative;

    ${({size}) => containerVariantSizeStyle(size)};
`;

const contentVariantSizeStyle = (size: CoffeeCardSizeProps) => {
    return {
        DEFAULT: css`
            gap: 12px;
        `,
        FOCUSED: css`
            gap: 14px;
        `,
    }[size]
}

export const Content = styled.View`
    align-items: center;
    /* margin-top: -10px; */

    ${() => contentVariantSizeStyle(SIZE)}
`;

const infoVariantSizeStyle = (size: CoffeeCardSizeProps) => {
    return {
        DEFAULT: css`
            gap: 3.2px;
            padding-bottom: 3.2px;
        `,
        FOCUSED: css`
            gap: 4px;
            padding-bottom: 4px;
        `,
    }[size]
}

export const Info = styled.View`

    ${() => infoVariantSizeStyle(SIZE)}
`;

const nameVariantSizeStyle = (size: CoffeeCardSizeProps, theme: DefaultTheme) => {
    return {
        DEFAULT: css`
            font-size: ${theme.FONT_SIZE.BALOO_2.XS}px;
        `,
        FOCUSED: css`
            font-size: ${theme.FONT_SIZE.BALOO_2.MD}px;
        `,
    }[size]
}

export const Name = styled.Text`
    ${({ theme }) => css`
        text-align: center;
        font-family: ${theme.FONT_FAMILY.BALOO_2.BOLD};
        color: ${theme.COLORS.GRAY_200};
    `}

    ${({theme}) => nameVariantSizeStyle(SIZE, theme)}
`;

export const Description = styled.Text`
    ${({ theme }) => css`
        text-align: center;
        font-family: ${theme.FONT_FAMILY.ROBOTO.REGULAR};
        color: ${theme.COLORS.GRAY_400};
        font-size: ${SIZE === 'DEFAULT'
            ? theme.FONT_SIZE.ROBOTO.TAG 
            : theme.FONT_SIZE.ROBOTO.XS}px;
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
        font-size: ${ SIZE === 'DEFAULT' 
            ? theme.FONT_SIZE.ROBOTO.TAG 
            : theme.FONT_SIZE.ROBOTO.SM}px;
    `}
`;

export const Value = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BALOO_2.BOLD};
        color: ${theme.COLORS.YELLOW_DARK};
        font-size: ${SIZE === 'DEFAULT' 
            ? theme.FONT_SIZE.BALOO_2.MD 
            : theme.FONT_SIZE.BALOO_2.LG}px;
    `}
`;

const imageVariantSizeStyle = (size: CoffeeCardSizeProps) => {
    return {
        DEFAULT: css`
            height: 64px;
            width: 64px;
            top: -82px
        `,
        FOCUSED: css`
            height: 120px;
            width: 120px;
            top: -136px
        `,
    }[size]
}

export const Image = styled.Image`
    position: absolute;

    ${() => imageVariantSizeStyle(SIZE)}
`;