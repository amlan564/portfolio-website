import { navLinks } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

// define props type

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ showNav, closeNav }: Props) => {
  return (
    <div>
      {/* overlay */}
      <div className="fixed inset-0 z-[1000] bg-black opacity-40 w-full h-screen"></div>
      <div className="fixed right-0 flex flex-col pt-20 h-full w-[60%] bg-purple-200 z-[10000] space-y-6">
        {navLinks.map((navlink) => (
          <Link key={navlink.id} href={navlink.url}>
            <p className="nav__link text-black ml-12 pb-2">{navlink.label}</p>
          </Link>
        ))}
        {/* close icon */}
        <CgClose className="absolute top-6 right-8 w-6 h-6" />
      </div>
    </div>
  );
};

export default MobileNav;
