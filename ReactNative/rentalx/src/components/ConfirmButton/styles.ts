import styled, {css} from "styled-components/native";
import {RFValue} from "react-native-responsive-fontsize";
import {RectButton} from "react-native-gesture-handler";

export const Container = styled(RectButton)`
    ${({ theme }) => css`
        width: 80px;
        height: 56px;
        justify-content: center;
        align-items: center;
        background-color: ${theme.colors.shape_dark};
    `}
`

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${RFValue(15)}px;
        font-family: ${theme.fonts?.family.inter.medium};
        color: ${theme.colors.shape};
    `}
`