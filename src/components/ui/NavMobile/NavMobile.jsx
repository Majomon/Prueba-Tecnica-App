"use client";
import user from "@/data/user";
import Image from "next/image";
import style from "./NavMobile.module.css";
import { IoMenuOutline } from "react-icons/io5";
import { useState } from "react";

export const NavMobile = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal);
  };

  return (
    <div className={style.container}>
      <Image
        src="/profile.webp"
        alt="Imagen de perfil"
        width={1000}
        height={700}
        className={style.img}
      />
      <h1 className={style.h1}>
        {user.firstName} {user.lastName}
      </h1>
      <button className={style.button} onClick={handleClick}>
        <IoMenuOutline size={30} />
      </button>

      {showModal && (
        <div className={style.modalBackdrop} onClick={handleClick}>
          <div className={style.modalContent}>
            <h2>Modal</h2>
            <p>Contenido del modal aquí...</p>
          </div>
        </div>
      )}
    </div>
  );
};
