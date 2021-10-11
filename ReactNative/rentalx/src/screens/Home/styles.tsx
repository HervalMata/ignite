import styled, {css} from "styled-components/native";
import {RFValue} from "react-native-responsive-fontsize";
import {FlatList} from "react-native";

export const Container = styled.View`
    ${({ theme }) => css`
        flex: 1;
        background-color: ${ theme.colors.background_primary};
    `}
`

export const Header = styled.Text`
    ${({ theme }) => css`
        width: 100%;
        height: 113px;
        padding: 32px 24px;
        justify-content: flex-end;
        background-color: ${ theme.colors.header};
    `}
`
export const HeaderContent = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const TotalCar = styled.Text`
    ${({ theme }) => css`
        font-size: ${RFValue(15)}px;
        font-family: ${theme.fonts.family.inter.regular};
        color: ${theme.colors?.text};
    `}
`

export const CardList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 24
    },
    showsVerticalScrollIndicator: false
})``;