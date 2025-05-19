import { navLinks } from "@/constant/constant";
import { socialLinks } from "@/data/data";
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
      {/* nav menu */}
      <div
        className={`fixed ${navOpen} transform transition-all duration-500 delay-300 right-0 flex flex-col pt-25 h-full w-[70%] bg-gray-200 z-[10000] space-y-6`}
      >
        {navLinks.map((navlink) => (
          <Link key={navlink.id} href={navlink.url} onClick={closeNav}>
            <p className="nav__link text-sm text-black ml-10 pb-2">{navlink.label}</p>
          </Link>
        ))}
        <div className="flex items-center gap-6 ml-10 mt-8">
          {socialLinks.map((link) => (
            <div
              key={link.id}
              className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center cursor-pointer transition-all duration-200"
            >
              <a
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <link.icon size={22} />
              </a>
            </div>
          ))}
        </div>
        {/* close icon */}
        <CgClose
          onClick={closeNav}
          className="absolute top-4 right-8 md:top-5 md:right-22 w-6 h-6 cursor-pointer text-blue-800"
        />
      </div>
    </div>
  );
};

export default MobileNav;
