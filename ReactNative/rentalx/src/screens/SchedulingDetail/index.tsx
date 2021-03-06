import * as React from 'react';
import * as S from './styles'
import {useTheme} from "styled-components/native";
import {Accessory, BackButton, Button, ImageSlider} from "../../components";
import speedSvg from "../../assets/speed.svg";
import accelerationSvg from "../../assets/acceleration.svg";
import forceSvg from "../../assets/force.svg";
import gasolineSvg from "../../assets/gasoline.svg";
import exchangeSvg from "../../assets/exchange.svg";
import peopleSvg from "../../assets/people.svg";
import {Feather} from "@expo/vector-icons";
import {RFValue} from "react-native-responsive-fontsize";
import {useNavigation} from "@react-navigation/native";

function SchedulingDetail() {
    const theme = useTheme();
    const navigation = useNavigation();
    function handleConfirm() {
        // @ts-ignore
        navigation.navigate('SchedulingComplete')
    }
    return (
        <S.Container>
            <S.Header>
                <BackButton onPress={() => {}} />
            </S.Header>
            <S.CardImages>
                <ImageSlider imagesUrl={[
                    'https://e7.pngegg.com/pngimages/889/300/png-clipart-audi-sportback-concept-car-audi-a3-2018-audi-a5-coupe-audi-compact-car-sedan.png',
                    'https://e7.pngegg.com/pngimages/889/380/png-clipart-audi-sportback-concept-car-audi-a3-2018-audi-a5-coupe-audi-compact-car-sedan.png'
                ]} />
            </S.CardImages>
            <S.Content>
                <S.Details>
                    <S.Description>
                        <S.Brand>Lamborghini</S.Brand>
                        <S.Name>Huracan</S.Name>
                    </S.Description>
                    <S.Rent>
                        <S.Period>Ao dia</S.Period>
                        <S.Price>R$ 580,00</S.Price>
                    </S.Rent>
                </S.Details>
                <S.Accessories>
                    <Accessory name="380Km/h" icon={speedSvg} />
                    <Accessory name="3.2s" icon={accelerationSvg} />
                    <Accessory name="800 HP" icon={forceSvg} />
                    <Accessory name="Gasolina" icon={gasolineSvg} />
                    <Accessory name="Auto" icon={exchangeSvg} />
                    <Accessory name="2 Pessoas" icon={peopleSvg} />
                </S.Accessories>
                <S.RentalPeriod>
                    <S.CalendarIcon>
                        <Feather
                            name="calendar"
                            size={RFValue(24)}
                            color={theme.colors.shape}
                        />
                    </S.CalendarIcon>
                    <S.DateInfo>
                        <S.DateTitle>DE</S.DateTitle>
                        <S.DateValue>10/10/2021</S.DateValue>
                    </S.DateInfo>
                    <Feather
                        name="chevron-right"
                        size={RFValue(10)}
                        color={theme.colors.text}
                    />
                    <S.DateInfo>
                        <S.DateTitle>AT??</S.DateTitle>
                        <S.DateValue>11/10/2021</S.DateValue>
                    </S.DateInfo>
                </S.RentalPeriod>
                <S.RentalPrice>
                    <S.RentalPriceLabel>TOTAL</S.RentalPriceLabel>
                    <S.RentalPriceDetails>
                        <S.RentalPriceQuota>R$ 580,00 x 3 di??rias</S.RentalPriceQuota>
                        <S.RentalPriceTotal>R$ 2.900,00</S.RentalPriceTotal>
                    </S.RentalPriceDetails>
                </S.RentalPrice>
            </S.Content>
            <S.Footer>
                <Button
                    title="Confirmar"
                    color={theme.colors.success}
                    onPress={handleConfirm}
                />
            </S.Footer>
        </S.Container>
    );
}

export default SchedulingDetail