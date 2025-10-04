"use client";

import { navLinks } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { HiBars3BottomRight } from "react-icons/hi2";

// define props type

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  return (
    <div className="fixed h-[8vh] z-10 w-full bg-gray-50/80 backdrop-blur-md">
      <div className="flex items-center justify-between h-full w-[80%] xl:w-[70%] mx-auto">
        {/* logo */}
        <h1 className="text-xl uppercase bg-gradient-to-r from-blue-400 to-blue-800 bg-clip-text text-transparent">Amlan</h1>
        <div className="hidden lg:flex items-center space-x-10 mx-auto">
          {navLinks.map((navlink) => (
            <Link key={navlink.id} href={navlink.url}>
              <p className="nav__link text-sm">{navlink.label}</p>
            </Link>
          ))}
        </div>
        {/* hamburger icon */}
        <HiBars3BottomRight
          onClick={openNav}
          className="w-8 h-8 text-blue-800 cursor-pointer lg:hidden"
        />
      </div>
    </div>
  );
};

export default Nav;
