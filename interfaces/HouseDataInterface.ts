import { StaticImageData } from "next/image";

export interface HouseDataInterface {
    id: number;
    type: string;
    name: string;
    description: string;
    image: StaticImageData; 
    imageLg: StaticImageData; 
    country: string;
    address: string;
    bedrooms: string;
    bathrooms: string;
    surface: string;
    year: string;
    price: string;
    agent: {
      image: StaticImageData;
      name: string;
      phone: string;
    };
};
  