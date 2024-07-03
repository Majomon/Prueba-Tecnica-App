import user from "@/data/user";
import React from "react";

export const Interests = () => {
  return (
    <section id="interests">
      <h2>Intereses</h2>
      <ul>
        {user.interests.map((interest, index) => (
          <li key={index}>
            <p>{interest}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
