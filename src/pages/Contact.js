import React, { useEffect, useRef } from 'react';
import { AiOutlineMail, AiOutlineHome, AiOutlinePhone } from "react-icons/ai";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef(null);

  useEffect(() => {
    document.title = "Contact Page";
  }, []);

  const handelSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_5rph4ng',
        'template_me1mz4v',
        form.current,
        'F3fNSsg3WbGPaV_7l'
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 px-6 py-12">
      {/* Contact Info */}
      <div className="border border-slate-300 rounded-lg shadow-lg w-full lg:w-1/2 p-6 lg:p-12 text-center">
        <h2 className="text-2xl font-bold text-orange-600 mb-6">Contact Information</h2>
        <div className="space-y-6 text-base">
          <div>
            <AiOutlinePhone className="mx-auto text-3xl text-sky-600 mb-2" />
            <p>7278159888 / 7686885164</p>
          </div>
          <div>
            <AiOutlineMail className="mx-auto text-3xl text-sky-600 mb-2" />
            <p>panjasourav03@gmail.com</p>
          </div>
          <div>
            <AiOutlineHome className="mx-auto text-3xl text-sky-600 mb-2" />
            <p>Hide Road, Kolkata, West Bengal<br />Pin - 700043</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="border border-slate-300 rounded-lg shadow-lg w-full lg:w-1/2 p-6 lg:p-12">
        <h2 className="text-2xl font-bold text-orange-600 mb-6 text-center">Send a Message</h2>
        <form ref={form} onSubmit={handelSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full px-4 py-2 border border-slate-400 rounded-md focus:outline-none text-black focus:ring-2 focus:ring-sky-500"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full px-4 py-2 border border-slate-400 rounded-md focus:outline-none text-black focus:ring-2 focus:ring-sky-500"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full px-4 py-2 border border-slate-400 rounded-md focus:outline-none text-black focus:ring-2 focus:ring-sky-500 resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 bg-sky-600 text-white font-bold rounded-lg hover:bg-sky-700 transition duration-300 shadow-md"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
