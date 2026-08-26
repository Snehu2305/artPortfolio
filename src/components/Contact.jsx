import React, { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // handle submit
 

const handleSubmit = (e) => {
  e.preventDefault();

  emailjs
    .send(
      "service_y93uu4d",
      "template_r8ya5af",
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      "lODtHFT_Km71k2EGs"
    )
    .then(
      () => {
        {success && (
          <p className="text-green-400 text-center mt-4">
            Message sent successfully! ✨
          </p>
        )}

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      },
      (error) => {
        console.log(error);
        alert("Failed to send message ❌");
      }
    );
};

  return (
    <div className="min-h-screen bg-black text-[#E6C35C] flex flex-col items-center px-4 py-10">

      {/* Heading */}
      <h1 className="text-4xl font-bold mb-2 text-center">
        Contact Me
      </h1>

      <p className="text-lg text-[#C9A94F] mb-6 text-center">
        Let’s connect and create something beautiful ✨
      </p>

      {/* Profile Image */}
      <img
        src="/images/profile.jpeg"  // ✅ FIXED PATH
        alt="profile"
        className="w-32 h-40 object-cover rounded-2xl border-2 border-[#D4AF37] shadow-lg mb-6"
      />

      {/* Contact Info */}
      <div className="text-center mb-8 space-y-1 text-[#D4AF37]">
        <p>📩 Email: snehsujata2305@gmail.com</p>
        <p>📱 Phone: +91 7498012292</p>
        <p>📍 Kolhapur, India</p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-4 sm:space-y-5"
      >

        {/* Name */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="bg-black border border-[#D4AF37] rounded-lg px-4 py-2 text-white 
            focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="bg-black border border-[#D4AF37] rounded-lg px-4 py-2 text-white 
            focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm">Message</label>
          <textarea
            rows="4"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message..."
            required
            className="bg-black border border-[#D4AF37] rounded-lg px-4 py-2 text-white 
            focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition resize-none"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 
          bg-gradient-to-r from-[#D4AF37] to-[#E6C35C]  
          text-black font-semibold py-2 rounded-full shadow-md  
          hover:scale-105 hover:shadow-lg transition duration-300"
        >
          Send Message
          <ArrowRightIcon className="w-4 h-4" />
        </button>

      </form>
    </div>
  );
};

export default Contact;
