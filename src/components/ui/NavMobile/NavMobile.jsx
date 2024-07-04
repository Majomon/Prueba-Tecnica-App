"use client";
import navLinks from "@/data/navLinks";
import user from "@/data/user";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import style from "./NavMobile.module.css";

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
      <h2 className={style.h2}>
        {user.firstName} {user.lastName}
      </h2>
      <button className={style.button} onClick={handleClick}>
        {showModal ? <IoCloseOutline size={30} /> : <IoMenuOutline size={30} />}
      </button>

      <ul
        className={`${style.modalBackdrop} ${showModal ? style.showModal : ""}`}
      >
        {navLinks.map((link, index) => (
          <li key={index} className={style.modalContent}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
