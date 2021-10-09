import styled, {css} from "styled-components/native";
import {getStatusBarHeight} from "react-native-iphone-x-helper";
import {RFValue} from "react-native-responsive-fontsize";

export const Container = styled.View`
    ${({ theme }) => css`
        background-color: ${ theme.colors.background_secondary};
    `}   
`

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-left: 24px;
    position: absolute;
    margin-top: ${getStatusBarHeight() + 18}px; 
`

export const CardImages =  styled.View`
    margin-top: ${getStatusBarHeight() + 32}px; 
`

export const Content = styled.ScrollView.attrs({
    contentContainerStyle: {
        padding: 24,
        alignItems: 'center'
    },
    showVerticalScrollIndicator: false
})``

export const Details = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 38px;
`

export const Description = styled.View``

export const Brand = styled.Text`
    ${({ theme }) => css`
        font-size: ${RFValue(10)}px;
        font-family: ${theme.fonts?.family.archivo.medium};
        color: ${theme.colors.text_detail};
        text-transform: uppercase;
    `}
`

export const Name = styled.Text`
    ${({ theme }) => css`
        font-size: ${RFValue(25)}px;
        font-family: ${theme.fonts?.family.archivo.medium};
        color: ${theme.colors.title};
    `}
`

export const Rent = styled.View``

export const Period = styled.Text`
    ${({ theme }) => css`
        font-size: ${RFValue(10)}px;
        font-family: ${theme.fonts?.family.archivo.medium};
        color: ${theme.colors.text_detail};
        text-transform: uppercase;
    `}
`

export const Price = styled.Text`
    ${({ theme }) => css`
        font-size: ${RFValue(25)}px;
        font-family: ${theme.fonts?.family.archivo.medium};
        color: ${theme.colors.main};
    `}
`

export const Accessories = styled.View`
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
`

export const Footer = styled.View`
    ${({ theme }) => css`
        width: 100%;
        background-color: ${theme.colors.background_secondary};
        padding: 24px 24px ${getStatusBarHeight() + 24}px;
    `}
`

export const RentalPeriod = styled.View`
    ${({ theme }) => css`
        width: 100%;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-top: 40px;
        border-bottom-width: 0.5px;
        border-bottom-color: ${theme.colors.line}
        padding-bottom: 16px;
    `}   
`

export const DateInfo = styled.View`
    width: 30%;
`

export const DateTitle = styled.Text`
    ${({ theme }) => css`
        font-size: ${RFValue(10)}px;
        font-family: ${theme.fonts?.family.inter.regular};
        color: ${theme.colors.text_detail};
    `}
`

export const DateValue = styled.Text`
    ${({ theme }) => css`
        font-size: ${RFValue(15)}px;
        font-family: ${theme.fonts.family.archivo.medium};
        color: ${theme.colors.text};
    `}
`

export const CalendarIcon =  styled.View`
    ${({ theme }) => css`
        width: 48px;
        height: 48px;
        background-color: ${theme.colors.main};
        align-items: center;
        justify-content: center;
    `}
`

export const RentalPrice = styled.View`
    width: 100%;
    margin-top: 16px;
`

export const RentalPriceLabel = styled.Text`
    ${({ theme }) => css`
        font-size: ${RFValue(10)}px;
        font-family: ${theme.fonts.family.inter.medium};
        color: ${theme.colors.text_detail};
    `}
`

export const RentalPriceDetails = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const RentalPriceQuota = styled.Text`
    ${({ theme }) => css`
        font-size: ${RFValue(15)}px;
        font-family: ${theme.fonts.family.inter.medium};
        color: ${theme.colors.title};
    `}
`

export const RentalPriceTotal = styled.Text`
    ${({ theme }) => css`
        font-size: ${RFValue(24)}px;
        font-family: ${theme.fonts.family.archivo.medium};
        color: ${theme.colors.success};
    `}
`