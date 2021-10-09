import * as React from 'react';
import * as S from './styles'
import {RectButtonProps} from "react-native-gesture-handler";

type ButtonProps = {
    title: string;
    color?: string;
} & RectButtonProps;

function Button({ color, title, ...rest }: ButtonProps) {
    return (
        <S.Container {...rest} color={color}>
            <S.Title>{title}</S.Title>
        </S.Container>
    );
};

export default Button