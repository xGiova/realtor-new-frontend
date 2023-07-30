import Image from 'next/image'
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeContent from "./HomeContent";
import HouseContextProvider from "../components/HouseContext";

export default function Home() {
    return (
        <HouseContextProvider>
            <div className="max-w-[1440px] mx-auto bg-white">
                <Header/>
                <HomeContent/>
                <Footer/>
            </div>
        </HouseContextProvider>
    )
}
