import { useState } from "react";

export const useContactForm = () => {
  const [success, setSuccess] = useState(false);

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

  return {
    success,
    handleChange,
    handleSubmit,
    formData,
    errors,
  };
};
