"use client";

import React, {ReactElement, useContext} from "react";

import { HouseContext } from "./HouseContext";

import House from "./House";

import Link from 'next/link';

import { ImSpinner2 } from 'react-icons/im';

const HouseList = (): ReactElement => {
    const { houses, loading } = useContext(HouseContext);

    console.log(houses);

    return(
        <section className="mb-20">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
                    {houses.map((house, index) => {
                        return (
                            <Link href={`/property/${house.id}`} key={index}
                            >
                                <House house={house}/>
                            </Link>
                        )
                    })}
                </div>
            </div>

        </section>
    );
};

export default HouseList;