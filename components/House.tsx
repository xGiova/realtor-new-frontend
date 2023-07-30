"use client";

import { ReactElement } from "react";
import Image from "next/image";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { HouseDataInterface } from "../interfaces";

const House = ({ house }: any): ReactElement => {
  const { image, type, country, address, bedrooms, bathrooms, surface, price } =
    house;
  return (
    <div>
      <Image src={image} alt="House Image" height={705} width={646} />
    </div>
  );
};

export default House;
