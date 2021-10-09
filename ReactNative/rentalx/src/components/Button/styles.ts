import styled, {css} from "styled-components/native";
import {RFValue} from "react-native-responsive-fontsize";
import {RectButton} from "react-native-gesture-handler";

type ContainerProps = {
    color?: string;
}

export const Container = styled(RectButton)<ContainerProps>`
    ${({ theme, color }) => css`
        width: 100%;
        background-color: ${theme.colors.main};
        justify-content: center;
        align-items: center;
        padding: 19px;
        ${!!color && css`
            background-color: ${color}
        `}
    `}
`

export const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.fonts.family.inter.medium};
        font-size: ${RFValue(15)}px;
        color: ${theme.colors.shape};
    `}
`