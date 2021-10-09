import styled, {css} from "styled-components/native";
import {RFValue} from "react-native-responsive-fontsize";

export const Container = styled.View`
    ${({ theme }) => css`
        width: 100%;
        height: 92px;
        background-color: ${theme.colors.background_primary};
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 16px;
        margin-bottom: 8px;
    `}
`

export const Name = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.fonts.family.inter.medium};
        font-size: ${RFValue(12)}px;
        color: ${theme.colors.text};
        margin-top: 2px;
    `}
`