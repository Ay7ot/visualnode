'use client'

import { useEffect, useRef } from 'react';
import { useUiStore } from "@/generalAppStore"
import { useNavStore } from "@/navbarStore"
import Link from "next/link"
import { FaTimes, FaBars, FaChevronDown } from "react-icons/fa"
import { TbMessage2, TbSettings, TbSearch } from "react-icons/tb";
import { useWindowDimensions } from '../useWindowDimensions';

export default function Navbar() {

    const { navbarShown, toggleNavbar } = useUiStore()
    const { navigationState, updateNavigationState } = useNavStore()
    const navMenuRef = useRef<HTMLDivElement>(null);
    const { width } = useWindowDimensions();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent | TouchEvent) => {
            if (navMenuRef.current && !navMenuRef.current.contains(event.target as Node)) {
                toggleNavbar(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [toggleNavbar]);

    const renderNavItems = () => {
        const breakpoints = [868, 932, 1092, 1263, 1270];
        return (
            <>
                {
                    navigationState.map((navState, index) => {
                        if (index < 2 || width >= breakpoints[index - 2]) {
                            return (
                                <li
                                    key={index}
                                    className={`${navState.active ? 'text-black' : 'text-[#7c7c7c]'} text-sm cursor-pointer`}
                                >
                                    {navState.name}
                                </li>
                            );
                        }
                        return null;
                    })
                }
                <li className="text-sm text-[#7c7c7c] cursor-pointer">More</li>
            </>
        )
    };

    return (
        <nav className={`p-4 border-b-[1px] sticky top-0 bg-white`}>

            <div className={`flex items-center justify-between ${navbarShown && 'blur-sm'}`}>
                <Link href={'/'}>
                    <p className="font-bold text-[1.15rem] min-[320px]:text-[1.25rem] sm:text-[1.35rem] md:text-[1.5rem]">visualnode <span className="font-light">studio</span></p>
                </Link>

                <div className="hidden md:flex gap-4 bg-[#F7F8FA] p-2 items-center ">
                    <i><TbSearch /></i>
                    <input
                        type="text"
                        className="w-[100px] lg:w-[150px] outline-none bg-transparent"
                    />
                    <i></i>
                </div>

                <ul className="items-center gap-4 hidden md:flex">
                    {renderNavItems()}
                </ul>

                <div className={`flex items-center gap-3`}>
                    <button
                        className="text-white shadow-sm bg-black px-5 py-1 rounded-xs hidden md:flex"
                    >
                        Start<span className="hidden min-[1200px]:flex px-1">Free</span> Trial
                    </button>
                    <i

                        className="hidden md:block cursor-pointer"
                    >
                        <TbSettings />
                    </i>
                    <i

                        className="hidden md:block cursor-pointer"
                    >
                        <TbMessage2 />
                    </i>
                    <i
                        cursor-pointer
                        className="block md:hidden cursor-pointer"
                    >
                        <TbSearch />
                    </i>
                    <div className="flex items-center gap-1 cursor-pointer">
                        <p className="bg-green-500 text-white text-sm py-1 px-2">AI</p>
                        <i className="text-[12px] text-[#7C7C7C]"><FaChevronDown /></i>
                    </div>
                    <i
                        onClick={() => toggleNavbar(true)}
                        className="md:hidden"
                    >
                        <FaBars />
                    </i>
                </div>
            </div>

            {/* Mobile Nav Menu */}
            <div ref={navMenuRef} className={`md:hidden dynamicHeight absolute top-0 bg-[#333333] ${navbarShown ? 'right-0 w-[250px] blur-0' : 'right-[-250px] w-[0px]'} transition-all ease-linear duration-200 overflow-y-scroll scrollbarHidden`}>
                <div className="flex flex-col gap-5 p-4">
                    <div className="flex items-center gap-2 text-[#7C7C7C]">
                        <i onClick={() => toggleNavbar(false)}><FaTimes /></i>
                        <p>Menu</p>
                    </div>
                    <ul className="flex flex-col gap-8">
                        <div className="flex flex-col gap-2">
                            {navigationState.slice(0, 4).map((navItem, index) => {
                                return (
                                    <li
                                        className={`${navItem.active ? 'text-white' : 'text-[#7C7C7C]'}`}
                                        key={index}
                                    >
                                        {navItem.name}
                                    </li>
                                )
                            })}
                        </div>
                        <div className="flex flex-col gap-2">
                            {navigationState.slice(3).map((navItem, index) => {
                                return (
                                    <li
                                        className={`${navItem.active ? 'text-white' : 'text-[#7C7C7C]'}`}
                                        key={index}
                                    >
                                        {navItem.name}
                                    </li>
                                )
                            })}
                        </div>
                    </ul>
                </div>
            </div>
        </nav >
    )
}