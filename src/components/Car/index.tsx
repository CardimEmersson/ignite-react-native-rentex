import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { CarDTO } from "../../dtos/CarDTO";

import Gasoline from "../../assets/gasoline.svg";
import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  CarImage,
} from "./styles";
import { getAccessotyIcon } from "../../utils/getAccessoryIcon";

export interface CarData {
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
  };
  thumbnail: string;
}

interface CarProps extends RectButtonProps {
  data: CarDTO;
}

export function Car({ data, ...rest }: CarProps) {
  const MotorIcon = getAccessotyIcon(data.fuel_type);

  return (
    <Container {...rest}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Rent>
            <Period>{data.rent.period}</Period>
            <Price>R$ ${data.rent.price}</Price>
          </Rent>

          <Type>
            <MotorIcon />
          </Type>
        </About>
      </Details>

      <CarImage source={{ uri: data.thumbnail }} resizeMode="contain" />
    </Container>
  );
}
