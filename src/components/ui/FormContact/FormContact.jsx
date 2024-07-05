"use client";
import React, { useState } from "react";
import styles from "./FormContact.module.css";
import { IoSendOutline } from "react-icons/io5";
import { titleFont } from "@/config/fonts";

export const FormContact = ({ setSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSuccess(true);
    }
  };

  const validateForm = () => {
    let valid = true;


    if (formData.name.length < 2 || formData.name.length > 20) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "El nombre debe tener entre 2 y 20 caracteres.",
      }));
      valid = false;
    }


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "El email no tiene un formato válido.",
      }));
      valid = false;
    }


    if (formData.message.length < 20 || formData.message.length > 255) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: "El mensaje debe tener entre 20 y 255 caracteres.",
      }));
      valid = false;
    }

    return valid;
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.box}>
        <label className={styles.label}>Nombre:</label>
        <input
          className={`${titleFont.className} ${styles.valueInput}`}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Juan"
        />
        {errors.name && <p className={styles.error}>{errors.name}</p>}
      </div>
      <div className={styles.box}>
        <label className={styles.label}>Email:</label>
        <input
          className={`${titleFont.className} ${styles.valueInput}`}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="juan@juan.com"
        />
        {errors.email && <p className={styles.error}>{errors.email}</p>}
      </div>
      <div className={styles.box}>
        <label className={styles.label}>Mensaje:</label>
        <textarea
          className={`${titleFont.className} ${styles.valueInput}`}
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={10}
          placeholder="Ingresá tu mensaje"
        />
        {errors.message && <p className={styles.error}>{errors.message}</p>}
      </div>
      <button type="submit" className={styles.buttonSend}>
        <IoSendOutline color="black" size={20} />
        Enviar
      </button>
    </form>
  );
};
