import Image from 'next/image'
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeContent from "./HomeContent";

export default function Home() {
    return (
        <div className="max-w-[1440px] mx-auto bg-white">
            <Header/>
            <HomeContent/>
            <Footer/>
        </div>
    )
}
