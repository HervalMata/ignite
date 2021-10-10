import * as React from 'react';
import * as S from './styles'
import {useWindowDimensions} from "react-native";
import LogoSvg from "../../assets/logo.svg";
import DoneSvg from "../../assets/done.svg";
import {ConfirmButton} from "../../components";

function SchedulingComplete() {
    const { width } = useWindowDimensions();
    return (
        <S.Container>
            <LogoSvg width={width} />
            <S.Content>
                <DoneSvg width={80} height={80} />
                <S.Title>Carro Alugado!</S.Title>
                <S.Message>
                    Agora você só precisa ir {'\n'}
                    até a concessionária da RENTALX {'\n'}
                    pegar o seu automóvel
                </S.Message>
            </S.Content>
            <S.Footer>
                <ConfirmButton title="OK" onPress={() => {}} />
            </S.Footer>
        </S.Container>
    );
}

export default SchedulingComplete