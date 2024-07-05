"use server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: "mauri.monzon91@gmail.com",
    pass: "xqsnrrqvfazdcgji",
  },
});

const fromEmail = "mauri.monzon.dev@gmail.com";

const sendEmail = async (email) => {
  try {
    const mailOptions = {
      from: `Mauricio Monzon - Desarrollador Web y Mobile ${fromEmail}`,
      to: email,
      subject: "Prueba tecnica",
      text: "Gracias por ponerte en contacto conmigo. A la brevedad me estare contactando 😊. Saludos",
    };
    const info = await transporter.sendMail(mailOptions);
    console.log("Correo electrónico enviado:", info.response);
    return { success: true };
  } catch (error) {
    console.error("Error al enviar el correo electrónico:", error);
    return { success: false, error: error };
  }
};
export default sendEmail;
