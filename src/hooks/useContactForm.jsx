import sendEmail from "@/utils/sendEmail";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export const useContactForm = () => {
  const [messageState, setMessageState] = useState({
    status: "",
    message: "",
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await sendEmail(formData.email);

        setMessageState({
          status: "ok",
          message: "¡Mensaje enviado con éxito! 😊🎉",
        });
        setFormData({ name: "", email: "", message: "" });
      } catch (error) {
        console.error("Error al enviar el correo electrónico:", error);
        setMessageState({
          status: "failed",
          message: "Hubo un error al enviar el correo electrónico 😢.",
        });
      }
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

  const showToast = () => {
    if (messageState.status === "ok") {
      toast.success(messageState.message);
    } else if (messageState.status === "failed") {
      toast.error(messageState.message);
    }
  };

  useEffect(() => {
    if (messageState.message) {
      showToast();
    }
  }, [messageState.message]);

  return {
    messageState,
    handleChange,
    handleSubmit,
    formData,
    errors,
    showToast,
  };
};
