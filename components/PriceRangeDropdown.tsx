"use client";
import React, {ReactElement, useContext, useState} from 'react';
import { RiWallet3Line , RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { HouseContext } from "./HouseContext";
import { HouseContextInterface } from "../interfaces";

const PriceRangeDropdown = (): ReactElement => {
    const { price, setPrice }: Partial<HouseContextInterface> =
      useContext(HouseContext);
  
    const [isOpen, setIsOpen] = useState(false);

    const prices = [
        {
            value: "Price range (any)",
        },
        {
            value: "100000 - 130000",
        },
        {
            value: "160000 - 190000",
        },
        {
            value: "190000 - 220000",
        },
        {
            value: "10000 - 30000",
        },
        {
            value: "30000 - 40000",
        }, 
    ]
  
    return (
      <Menu as="div" className="dropdown relative">
        <Menu.Button
          onClick={() => setIsOpen(!isOpen)}
          className="dropdown-btn w-full
              text-left"
        >
          <RiWallet3Line className="dropdown-icon-primary" />
          <div>
            <div
              className="text-[15px] font-medium
                      leading-tight"
            >
              {price}
            </div>
            <div className="text-[14px]">Select price range</div>
            {isOpen ? (
              <RiArrowUpSLine className="dropdown-icon-secondary" />
            ) : (
              <RiArrowDownSLine className="dropdown-icon-secondary" />
            )}
          </div>
        </Menu.Button>
  
        <Menu.Items className="dropdown-menu">
          {prices.map((price, index) => {
            return (
              <Menu.Item
                onClick={() => setPrice(price.value)}
                className="cursor-pointer
                              hover:text-violet-700 transition"
                as="li"
                key={index}
              >
                {price.value}
              </Menu.Item>
            );
          })}
        </Menu.Items>
      </Menu>
    );
  };
  
  export default PriceRangeDropdown;
  