import React from "react";
import {StatusBar} from "react-native";
import Logo from "../../assets/logo.svg";
import {RFValue} from "react-native-responsive-fontsize";

import * as S from './styles'

export function Home() {
    return (
        <S.Container>
            <StatusBar
                barStyle="light-content" backgroundColor="transparent" translucent
            />
            <S.Header>
                <S.HeaderContent>
                    <Logo
                        width={RFValue(108)}
                        height={RFValue(12)}
                    />
                    <S.TotalCar>Total de 12 carros</S.TotalCar>
                </S.HeaderContent>
            </S.Header>
        </S.Container>
    )
}