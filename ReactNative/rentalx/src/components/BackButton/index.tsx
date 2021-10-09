import * as React from 'react';
import {BorderlessButtonProps} from "react-native-gesture-handler";
import {useTheme} from "styled-components";
import * as S from './styles'
import { MaterialIcons } from '@expo/vector-icons'

type BackButtonProps = {
    color?: 'light' | 'dark';
} & BorderlessButtonProps;

function BackButton({ color = 'light', ...rest }: BackButtonProps) {
    const theme = useTheme();
    const themeColor = color === 'light' ? 'background_secondary' : 'text';
    return (
        <S.Container {...rest}>
            <MaterialIcons name="chevron-left" size={24} color={theme.colors[themeColor]}/>
        </S.Container>
    );
};

export default BackButton;