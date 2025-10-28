"use client";

import { useRef } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

export default function Contact() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        background: "rgba(0,0,0,0.8)",
        color: "white",
      });
      return;
    }

    emailjs
      .sendForm(
        "service_a0u2yqk",
        "template_co4cyrq",
        form.current,
        "eOl6sbO4NyBalOyZj"
      )
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Success...",
            text: "Message send successfully :)",
            background: "rgba(0,0,0,0.8)",
            color: "white",
          });
          form.current?.reset();
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            background: "rgba(0,0,0,0.8)",
            color: "white",
          });
        }
      );
  };

  const contacts = [
    {
      href: "tel:01147999625",
      icon: "fas fa-phone",
      label: "01147999625",
      color: "text-blue-400",
    },
    {
      href: "mailto:ekramya969@gmail.com",
      icon: "fas fa-envelope",
      label: "ekramya969@gmail.com",
      color: "text-red-400",
    },
    {
      href: "https://wa.me/201096909607?text=%D8%A3%D9%87%D9%84%D8%A7%D9%8B%20%D8%A3%D8%AD%D9%85%D8%AF%D8%8C%20%D8%B4%D9%81%D8%AA%20%D8%A7%D9%84%D8%A8%D9%88%D8%B1%D8%AA%D9%81%D9%88%D9%84%D9%8A%D9%88%20%D8%A8%D8%AA%D8%A7%D8%B9%D9%83%20%D9%88%D8%B9%D8%A7%D9%8A%D8%B2%20%D8%A3%D8%AA%D9%83%D9%84%D9%85%20%D9%85%D8%B9%D8%A7%D9%83%20%F0%9F%91%8B",
      icon: "fa-brands fa-whatsapp",
      label: "WhatsApp",
      color: "text-green-400",
    },
    {
      href: "https://www.linkedin.com/in/ahmed-ekramy-12816b25a/",
      icon: "fa-brands fa-linkedin",
      label: "LinkedIn",
      color: "text-blue-500",
    },
    {
      href: "https://github.com/AhmedEkramy24/",
      icon: "fa-brands fa-github",
      label: "GitHub",
      color: "text-gray-300",
    },
  ];

  return (
    <section className="text-white  px-3">
      <h2 className="text-3xl font-bold my-5 text-center">
        Contact Me <i className="fas fa-phone"></i>
      </h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-3 max-w-md mx-auto p-4 bg-white/10 backdrop-blur-sm rounded-lg shadow-lg"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="border border-gray-500 bg-transparent p-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border border-gray-500 bg-transparent p-2 rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          className="border border-gray-500 bg-transparent p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-[#5227FF] hover:bg-[#6544ff] cursor-pointer text-white p-2 rounded font-bold transition-all"
        >
          Send <i className="fas fa-envelope ml-2"></i>
        </button>

        <hr className="my-4 border-gray-600" />

        <div className="space-y-2">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 font-semibold hover:underline ${contact.color}`}
            >
              <i className={contact.icon}></i>
              {contact.label}
            </a>
          ))}
        </div>
      </form>
    </section>
  );
}
