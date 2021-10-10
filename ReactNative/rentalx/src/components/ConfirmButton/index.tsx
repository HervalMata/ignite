import * as React from 'react';
import * as S from './styles'
import {RectButtonProps} from "react-native-gesture-handler";

type ConfirmButtonProps = {
    title: string;
} & RectButtonProps;

function ConfirmButton({ title, ...rest }: ConfirmButtonProps) {
    return (
        <S.Container { ...rest }>
            <S.Title>{title}</S.Title>
        </S.Container>
    );
}

export default ConfirmButton