"use client";

import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, message } = form;

    if (!name || !email || !message) {
      toast.error("Please fill out all fields.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send. Please try again.");
        console.error(data.error);
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="w-full">
      <Toaster />
      <form onSubmit={handleSubmit} className="mt-8 block w-full">
        <div className="flex flex-col items-start gap-6">
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full flex-1 bg-white placeholder:text-gray-600 text-sm p-4 rounded-md border-[1.5px] border-gray-200 outline-none"
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full flex-1 bg-white placeholder:text-gray-600 text-sm p-4 rounded-md border-[1.5px] border-gray-200 outline-none"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full flex-1 bg-white placeholder:text-gray-600 text-sm p-4 rounded-md border-[1.5px] border-gray-200 outline-none"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2.5 font-semibold text-sm md:text-base transition-all duration-200 rounded-lg mt-4 text-white bg-blue-800 hover:bg-blue-900 flex items-center space-x-2 cursor-pointer"
          >
            <span>Send Message</span>
            <IoIosSend />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
