import styled, {css} from "styled-components/native";
import {RFValue} from "react-native-responsive-fontsize";

export const Container = styled.View`
    ${({ theme }) => css`
        flex: 1;
        background-color: ${ theme.colors.header};
        padding-top: 96px;
    `}   
`

export const Content = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding-bottom: 80px;
`

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${RFValue(30)}px;
        font-family: ${theme.fonts?.family.archivo.semibold};
        color: ${theme.colors.shape};
        margin-top: 40px;
    `}
`

export const Message = styled.Text`
    ${({ theme }) => css`
        font-size: ${RFValue(15)}px;
        font-family: ${theme.fonts?.family.inter.regular};
        color: ${theme.colors.shape};
        text-align: center;
        margin-top: 16px;
        line-height: 25px;
    `}
`

export const Footer = styled.View`
    width: 100px;
    align-items: center;
    margin: 80px 0;
`