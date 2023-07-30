"use client";

import React, {ReactElement, useContext, useState} from "react";
import {HouseContextInterface} from "../interfaces";
import {HouseContext} from "./HouseContext";
import {Menu} from "@headlessui/react";
import {RiArrowDownSLine, RiArrowUpSLine, RiHome5Line} from "react-icons/ri";

const PropertyDropdown = (): ReactElement => {
    const {property, setProperty, properties}: Partial<HouseContextInterface> =
        useContext(HouseContext);

    const [isOpen, setIsOpen] = useState(false);

    console.log("properties", properties);

    return (
        <Menu as="div" className="dropdown relative">
            <Menu.Button
                onClick={() => setIsOpen(!isOpen)}
                className="dropdown-btn w-full
            text-left"
            >
                <RiHome5Line className="dropdown-icon-primary"/>
                <div>
                    <div
                        className="text-[15px] font-medium
                    leading-tight"
                    >
                        {property}
                    </div>
                    <div className="text-[13px]">Choose your place</div>
                    {isOpen ? (
                        <RiArrowDownSLine className="dropdown-icon-secondary"/>
                    ) : (
                        <RiArrowUpSLine className="dropdown-icon-secondary"/>
                    )}
                </div>
            </Menu.Button>

            <Menu.Items className="dropdown-menu">
                {properties.map((property, index) => {
                    return (
                        <Menu.Item
                            onClick={() => setProperty(property)}
                            className="cursor-pointer
                            hover:text-violet-700 transition"
                            as="li"
                            key={index}
                        >
                            {property}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
};

export default PropertyDropdown;