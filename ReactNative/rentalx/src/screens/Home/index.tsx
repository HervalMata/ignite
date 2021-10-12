import React, {useEffect, useState} from "react";
import {StatusBar} from "react-native";
import Logo from "../../assets/logo.svg";
import {RFValue} from "react-native-responsive-fontsize";

import * as S from './styles'
import {CardCar, Loading} from "../../components";
import {useNavigation} from "@react-navigation/native";
import {ICarDTO} from "../../dtos/CarDTO";
import api from "../../services/api";

function Home() {
  const navigation = useNavigation();
  const [cars, setCars] = useState<ICarDTO[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get<ICarDTO>('/cars')
      .then(response => {
        // @ts-ignore
        setCars(response.data);
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error);
      })
      .finally(() =>  {
        setLoading(false)
      })
  }, []);



  function handleCarDetail(car: ICarDTO) {
        // @ts-ignore
        navigation.navigate('Detail', { car })
    }


  // @ts-ignore
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
          {loading ? (
            <Loading />
          ) : (
            // @ts-ignore
            <S.CardList data={cars}
                        // @ts-ignore
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                          // @ts-ignore
                          <CardCar data={ item }
                                    // @ts-ignore
                                   onPress={() => handleCarDetail(item)}
                          />
            )} />
          )}

        </S.Container>
    )
}

export default Home