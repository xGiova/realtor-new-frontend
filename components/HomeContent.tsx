"use client";
import { ReactElement } from "react";
import Banner from "./Banner";
import HouseList from "./HouseList";

const HomeContent = (): ReactElement => {
  return (
    <div className="min-h-[1800px]">
      <Banner />
      <HouseList />
    </div>
  );
};

export default HomeContent;
