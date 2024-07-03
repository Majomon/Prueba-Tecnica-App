import user from "@/data/user";
import Image from "next/image";
import React from "react";
import style from "./Headboard.module.css";

export const Headboard = () => {
  return (
    <div className={style.container}>
      <h1 className={style.h1}>
        {user.firstName} {user.lastName}
      </h1>
      <Image
        src="/profile.webp"
        alt="Imagen de perfil"
        width={1000}
        height={700}
        className={style.img}
      />
    </div>
  );
};
