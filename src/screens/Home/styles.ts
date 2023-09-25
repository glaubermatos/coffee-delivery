import { SectionListProps } from 'react-native';
import { SectionListDataProp } from 'react-native-section-list-get-item-layout';
import SectionList from 'react-native-tabs-section-list';
import { css, styled } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_900};
`;

export const IntroContainer = styled.View`
  padding-bottom: 137px;
  padding: 0 32px 137px 32px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};

  position: relative;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BALOO_2.BOLD};
    font-size: ${theme.FONT_SIZE.BALOO_2.MD}px;

    margin-top: 20px;
    margin-bottom: 16px;
  `}
`;

export const IntroImage = styled.Image`
  position: absolute;
  right: 4px;
  bottom: 54px;
`;

export const CoffeeFilterContainer = styled.View`
  padding: 16px 32px;
  gap: 12px;
`;

export const CoffeeFilterTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_300};
    font-family: ${theme.FONT_FAMILY.BALOO_2.BOLD};
    font-size: ${theme.FONT_SIZE.BALOO_2.SM}px;
  `}
`;

export const SectionTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_400};
    font-family: ${theme.FONT_FAMILY.BALOO_2.BOLD};
    font-size: ${theme.FONT_SIZE.BALOO_2.XS}px;
  `}
`;