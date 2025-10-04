"use client";

import Link from "next/link";
import React from "react";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "motion/react";

const ContactInfo = () => {
  return (
    <motion.div
      className="flex items-center xl:justify-center"
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <div className="">
        <Link
          href="tel:+8801794599197"
          className="flex items-center space-x-6 md:space-x-8 mb-8"
        >
          <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-800 flex flex-col items-center justify-center">
            <FaPhone className="w-4 h-4 md:w-7 md:h-7 text-white" />
          </div>
          <div>
            <h1 className="font-semibold">Phone</h1>
            <p className="text-sm text-gray-600">+8801794599197</p>
          </div>
        </Link>
        <Link
          href="mailto:amlanckb123@gmail.com"
          className="flex items-center space-x-6 md:space-x-8 mb-8"
        >
          <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-800 flex flex-col items-center justify-center">
            <MdEmail className="w-4 h-4 md:w-7 md:h-7 text-white" />
          </div>
          <div>
            <h1 className="font-semibold">Email</h1>
            <p className="text-sm text-gray-600">amlanckb123@gmail.com</p>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
