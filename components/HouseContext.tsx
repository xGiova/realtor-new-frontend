"use client";

import React, { useState, useEffect, createContext } from "react";
import { ReactElement } from "react";

import { housesData } from "../data";
import { HouseContextInterface, HouseDataInterface } from "../interfaces";

// create context
// @ts-ignore
export const HouseContext = createContext<HouseContextInterface>();

const HouseContextProvider = ({ children }: any): ReactElement => {
  const [houses, setHouses] = useState<HouseDataInterface[]>(housesData);
  const [country, setCountry] = useState("Location (any)");
  const [countries, setCountries] = useState<string[]>([]);
  const [property, setProperty] = useState("Property type (any)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Price range (any)");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const allCountries = houses.map((house) => house.country);
    console.log({ allCountries });
    const uniqueCountries: string[] = Array.from(new Set(allCountries));

    console.log({ uniqueCountries });
    setCountries(uniqueCountries);
  }, []);

  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        houses,
        loading,
      }}
    >
      {" "}
      {children}{" "}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
