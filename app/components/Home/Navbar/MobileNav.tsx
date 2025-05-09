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
  const navOpen = showNav ? "translate-x-0" : "translate-x-[100%]";

  return (
    <div>
      {/* overlay */}
      <div
        className={`fixed ${navOpen} transform transition-all duration-500 inset-0 z-[1000] bg-black opacity-40 w-full h-screen`}
      ></div>
      <div className={`fixed ${navOpen} transform transition-all duration-500 delay-300 right-0 flex flex-col pt-20 h-full w-[60%] bg-purple-200 z-[10000] space-y-6`}>
        {navLinks.map((navlink) => (
          <Link key={navlink.id} href={navlink.url}>
            <p className="nav__link text-black ml-12 pb-2">{navlink.label}</p>
          </Link>
        ))}
        {/* close icon */}
        <CgClose onClick={closeNav} className="absolute top-3 right-8 md:top-5 md:right-22 w-6 h-6 cursor-pointer" />
      </div>
    </div>
  );
};

export default MobileNav;
