import React from "react";
import SectionHeading from "../Helper/SectionHeading";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <div className="pt-20 bg-gray-100" id="contact">
      <SectionHeading>Let&apos;s Work Together!</SectionHeading>
      <div className="grid grid-cols-1 xl:grid-cols-2 w-[80%] md:w-[60%] mx-auto items-center gap-14 mt-10">
        {/* Contact form */}
        <div>
          <ContactForm />
        </div>
        {/* Contact Info */}
        <div>
          <ContactInfo />
        </div>
      </div>
      <footer className="text-center pt-30 md:pt-50 pb-6 text-xs text-gray-700">
        &copy; 2024 Amlan | All Rights Reserved
      </footer>
    </div>
  );
};

export default Contact;
