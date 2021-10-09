import * as React from 'react';
import * as S from './styles'
import {StatusBar} from "react-native";
import {BackButton} from "../../components";
import ArrowSvg from '../../assets/arrow.svg';

function Scheduling() {
    return (
        <S.Container>
            <StatusBar
                barStyle="light-content"
                translucent
                backgroundColor="transparent" />
            <S.Header>
                <BackButton onPress={() => {}} />
                <S.Title>
                    Escolha uma{'\n'}
                    data de inicio e{'\n'}
                    fim do aluguel
                </S.Title>
                <S.RentalPeriod>
                    <S.DateInfo>
                        <S.DateTitle>DE</S.DateTitle>
                        <S.DateValue></S.DateValue>
                    </S.DateInfo>
                    <ArrowSvg />
                    <S.DateInfo>
                        <S.DateTitle>ATÉ</S.DateTitle>
                        <S.DateValue>10/10/2021</S.DateValue>
                    </S.DateInfo>
                </S.RentalPeriod>
            </S.Header>
        </S.Container>
    );
}

export default Scheduling