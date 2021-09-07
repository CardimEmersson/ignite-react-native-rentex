import React from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation, CommonActions } from "@react-navigation/native";

import Logo from "../../assets/logo.svg";
import { Car, CarData } from "../../components/Car";
import { Container, Header, TotalCars, HeaderContent, CarList } from "./styles";

export function Home() {
  const navigation = useNavigation();

  const carData: CarData[] = [
    {
      brand: "Audi",
      name: "RS 5 Coupé",
      rent: {
        period: "Ao dia",
        price: 120,
      },
      thumbnail: "../../assets/audi-rs-5-coupe.png",
    },
    {
      brand: "Porsche",
      name: "Panamera",
      rent: {
        period: "Ao dia",
        price: 120,
      },
      thumbnail: "../../assets/porsche-panamera.png",
    },
  ];

  function handleCarDetails() {
    // navigation.navigate("CarDetails");
    navigation.dispatch(
      CommonActions.navigate({
        name: "Sheduling",
      })
    );
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>

      <CarList
        data={carData}
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item }) => (
          <Car data={carData[0]} onPress={handleCarDetails} />
        )}
      />
    </Container>
  );
}
