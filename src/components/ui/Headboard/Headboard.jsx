import user from "@/data/user";
import Image from "next/image";
import React from "react";
import style from "./Headboard.module.css";

export const Headboard = () => {
  return (
    <div className={style.container}>
      <h2 className={style.h2}>
        {user.firstName} {user.lastName}
      </h2>
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
