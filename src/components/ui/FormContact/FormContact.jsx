"use client";
import React, { useState } from "react";
import styles from "./FormContact.module.css";
import { IoSendOutline } from "react-icons/io5";

export const FormContact = ({ setSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.box}>
        <label className={styles.label}>Nombre:</label>
        <input
          className={styles.valueInput}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Juan"
        />
      </div>
      <div className={styles.box}>
        <label className={styles.label}>Email:</label>
        <input
          className={styles.valueInput}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="juan@juan.com"
        />
      </div>
      <div className={styles.box}>
        <label className={styles.label}>Mensaje:</label>
        <textarea
          className={styles.valueInput}
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={10}
          placeholder="Ingresá tu mensaje"
        />
      </div>
      <button type="submit" className={styles.buttonSend}>
        <IoSendOutline color="black" size={20}/>
        Enviar
      </button>
    </form>
  );
};
