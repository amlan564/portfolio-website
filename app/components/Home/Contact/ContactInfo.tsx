import { contactInfo } from "@/data/data";
import React from "react";

const ContactInfo = () => {
  return (
    <div className="flex items-center xl:justify-center">
      <div className="">
        {contactInfo.map((info) => (
          <div key={info.id} className="flex items-center space-x-8 mb-8">
            <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-purple-500 to-purple-800 flex flex-col items-center justify-center">
              <info.icon className="w-4 h-4 md:w-7 md:h-7 text-white" />
            </div>
            <div>
              <h1 className="font-semibold">{info.title}</h1>
              <p className="text-sm text-gray-600">{info.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
