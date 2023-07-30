"use client";
import React, {ReactElement} from 'react';
import Link from 'next/link';
import Image from "next/image";
import logo from '../public/logo.svg';

const Header = (): ReactElement => {
    return (
        <header className="py-6 mb-12 border-b">
            <div className="container mx-auto flex justify-between items-center">
                {/* logo */}
                <Link href="/">
                    <Image src={logo} width={142} height={24} alt="logo"/>
                </Link>

                {/* buttons */}
                <div className="flex items-center gap-6">
                    <Link className="hover:text-violet-900" href="">Log In</Link>
                    <Link className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition" href="">Sign up</Link>
                </div>

            </div>
        </header>
)
}

export default Header;