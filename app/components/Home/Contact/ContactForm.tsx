import React from "react";
import { IoIosSend } from "react-icons/io";

const ContactForm = () => {
  return (
    <div className="w-full">
      <form className="mt-8 block w-full">
        <div className="flex flex-col items-start gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full flex-1 bg-white placeholder:text-gray-600 text-sm p-4 rounded-md border-[1.5px] border-gray-200 outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full flex-1 bg-white placeholder:text-gray-600 text-sm p-4 rounded-md border-[1.5px] border-gray-200 outline-none"
          />
          <textarea
            rows={5}
            placeholder="Your Message"
            style={{ resize: "vertical", overflow: "auto" }}
            className="w-full flex-1 bg-white placeholder:text-gray-600 text-sm p-4 rounded-md border-[1.5px] border-gray-200 outline-none"
          ></textarea>
          <button className="px-6 py-2.5 font-semibold text-sm md:text-base transition-all duration-200 rounded-lg mt-4 text-white bg-purple-600 hover:bg-purple-700 flex items-center space-x-2 cursor-pointer">
            <span>Send Message</span>
            <IoIosSend />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
