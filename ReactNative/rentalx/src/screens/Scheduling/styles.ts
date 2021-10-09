import styled, {css} from "styled-components/native";
import {getStatusBarHeight} from "react-native-iphone-x-helper";
import {RFValue} from "react-native-responsive-fontsize";

export const Container = styled.View`
    ${({ theme }) => css`
        background-color: ${ theme.colors.background_secondary};
    `}   
`

export const Header = styled.Text`
    ${({ theme }) => css`
        width: 100%;
        height: 325px;
        padding: 25px;
        justify-content: center;
        background-color: ${ theme.colors.header};
        padding-top: ${getStatusBarHeight() +30}px;
    `}   
`

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${RFValue(34)}px;
        font-family: ${theme.fonts?.family.archivo.semibold};
        color: ${theme.colors.shape};
        margin-top: 24px;
    `}
`

export const RentalPeriod = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 32px 0;
`

export const DateInfo = styled.View`
    width: 30%;
`

export const DateTitle = styled.Text`
    ${({ theme }) => css`
        font-size: ${RFValue(10)}px;
        font-family: ${theme.fonts?.family.archivo.medium};
        color: ${theme.colors.text};
    `}
`

export const DateValue = styled.Text`
    ${({ theme }) => css`
        font-size: ${RFValue(15)}px;
        font-family: ${theme.fonts?.family.archivo.medium};
        color: ${theme.colors.text};
        border-bottom-width: 1px;
        border-bottom-color: ${theme.colors.text}
        padding-bottom: 5px;
    `}
`