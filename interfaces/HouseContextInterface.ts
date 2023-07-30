import { HouseDataInterface } from "./HouseDataInterface";

export interface HouseContextInterface {
    houses: HouseDataInterface[]; 
    loading: boolean;
    country: string;
    setCountry: (country: string) => void;
    countries: string[];
    property: string;
    setProperty: (property: string) => void;
    properties: string[];
    price: string;
    setPrice: (price: string) => void;
    handleClick: () => void;
};

