import Link from "next/link";
import React from "react";
import { FaPhone } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="flex items-center xl:justify-center">
      <div className="">
        <Link
          href="tel:+8801794599197"
          className="flex items-center space-x-8 mb-8"
        >
          <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-purple-500 to-purple-800 flex flex-col items-center justify-center">
            <FaPhone className="w-4 h-4 md:w-7 md:h-7 text-white" />
          </div>
          <div>
            <h1 className="font-semibold">Phone</h1>
            <p className="text-sm text-gray-600">+8801794599197</p>
          </div>
        </Link>
        <Link
          href="mailto:amlanckb123@gmail.com"
          className="flex items-center space-x-8 mb-8"
        >
          <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-purple-500 to-purple-800 flex flex-col items-center justify-center">
            <FaPhone className="w-4 h-4 md:w-7 md:h-7 text-white" />
          </div>
          <div>
            <h1 className="font-semibold">Email</h1>
            <p className="text-sm text-gray-600">amlanckb123@gmail.com</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ContactInfo;
