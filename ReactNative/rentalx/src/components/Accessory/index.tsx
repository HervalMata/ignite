import * as React from 'react';
import {SvgProps} from "react-native-svg";
import * as S from './styles';

type AccessoryProps = {
    name: string;
    icon: React.FC<SvgProps>;
};

function Accessory({name, icon: Icon}: AccessoryProps) {
    return (
        <S.Container>
            <Icon width={32} height={32} />
            <S.Name>{name}</S.Name>
        </S.Container>
    );
};

export default Accessory;