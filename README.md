# 🎨 Snehal’s Creative Corner

A modern and responsive portfolio website showcasing mandala art, sketches, and creative designs. Built with React and Tailwind CSS, this project highlights artwork through an interactive gallery, videos, and a fully functional contact system.

---

## ✨ Features

- 🎨 Beautiful Hero Section with aesthetic background
- 🖼️ Gallery with category-based filtering
- 🔍 Clickable images with full preview modal
- 🎥 Video section with embedded YouTube content
- 📱 Fully responsive design (mobile, tablet, desktop)
- 📩 Contact form with EmailJS integration
- 💌 Auto-reply email system for users
- 🌙 Smooth UI with modern styling (Tailwind CSS)

---

## 🚀 Live Website

👉 https://artPorfolio.vercel.app

---

## 🛠️ Tech Stack

- **Frontend:** React.js
- **Styling:** Tailwind CSS
- **Routing:** React Router
- **Icons:** React Icons / Heroicons
- **Email Service:** EmailJS
- **Deployment:** Vercel

---


---

## 📩 Contact Form (EmailJS Integration)

This project uses EmailJS to send emails directly without a backend.

### 🔧 Setup Instructions:

1. Create an account on EmailJS  
2. Add an Email Service (Gmail recommended)  
3. Create two templates:
   - **Template 1:** Send message to you  
   - **Template 2:** Auto-reply to user  

---

### 📌 Example Code

  ```js
  emailjs.send(
    "YOUR_SERVICE_ID",
    "YOUR_TEMPLATE_ID",
    {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    },
    "YOUR_PUBLIC_KEY"
  );``

### Author
 Snehal Dattatray Kumbhar



