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
    <div className="fixed h-[8vh] md:h-[10vh] z-10 w-full bg-gray-100">
      <div className="flex items-center justify-between h-full w-[90%] md:w-[80%] mx-auto">
        {/* logo */}
        <h1 className="text-purple-600 text-2xl uppercase">Amlan</h1>
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((navlink) => (
            <Link key={navlink.id} href={navlink.url}>
              <p className="nav__link">{navlink.label}</p>
            </Link>
          ))}
        </div>
        {/* hamburger icon */}
        <HiBars3BottomRight
          onClick={openNav}
          className="w-8 h-8 text-purple-600 cursor-pointer lg:hidden"
        />
      </div>
    </div>
  );
};

export default Nav;
