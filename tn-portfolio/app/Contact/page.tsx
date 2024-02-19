"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Inter } from "next/font/google";
import styles from "./Contact.module.css";
const inter = Inter({ subsets: ["latin"] });

const ContactUs = () => {
  const form = useRef(null);

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID &&
      form.current
    ) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        )
        .then(
          (result) => {
            alert('Successfully')
          },
          (error) => {
            alert(error.text);
          }
        );
    }
  };

  return (
    <>
      <p className="font-semibold text-[30px] py-9">Contact Us</p>
      <div className={`${styles.main} ${inter.className}`}>
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="user_name">
              Name
            </label>
            <input type="text" id="user_name" name="user_name" required />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="message">
              Message
            </label>
            <textarea rows={8} id="message" name="message" required />
          </div>
          <button className={styles.button} type="submit">
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
