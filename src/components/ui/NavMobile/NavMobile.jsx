"use client";
import user from "@/data/user";
import Image from "next/image";
import style from "./NavMobile.module.css";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import navLinks from "@/data/navLinks";
import Link from "next/link";

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
        width={40}
        height={40}
        className={style.img}
      />
      <h1 className={style.h1}>
        {user.firstName} {user.lastName}
      </h1>
      <button className={style.button} onClick={handleClick}>
        {showModal ? <IoCloseOutline size={30} /> : <IoMenuOutline size={30} />}
      </button>

      <ul
        className={`${style.modalBackdrop} ${showModal ? style.showModal : ""}`}
        onClick={handleClick}
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
