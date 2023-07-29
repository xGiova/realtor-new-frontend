"use client";

import React, {useState, useEffect, createContext} from "react";
import {ReactElement} from "react";

import { housesData } from "../data";

// create context
// @ts-ignore
export const HouseContext = createContext();

const HouseContextProvider = ({children} : any): ReactElement => {
    return <HouseContext.Provider value={console.log("this is the context")}> {children} </HouseContext.Provider>
};

export default HouseContextProvider;