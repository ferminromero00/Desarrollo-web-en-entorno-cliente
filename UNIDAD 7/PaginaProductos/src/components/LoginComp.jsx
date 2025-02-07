import React from "react";
import { useForm } from "react-hook-form";

export default function LoginComp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Nombre completo</label>
      <input
        id="name"
        type="text"
        {...register("name", { required: "El nombre es obligatorio" })}
      />
      {errors.name && <p>{errors.name.message}</p>}

      <label htmlFor="mail">Correo electrónico</label>
      <input
        id="mail"
        type="email"
        {...register("mail", {
          required: "El correo electrónico es obligatorio",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            message: "Formato de correo electrónico no válido",
          },
        })}
      />
      {errors.mail && <p>{errors.mail.message}</p>}

      <label htmlFor="phone">Teléfono móvil</label>
      <input
        id="phone"
        type="tel"
        placeholder="+34"
        {...register("phone", {
          required: "El teléfono es obligatorio",
          pattern: {
            value: /^[0-9]{9}$/,
            message: "El número de teléfono debe tener 9 dígitos",
          },
        })}
      />
      {errors.phone && <p>{errors.phone.message}</p>}

      <input type="submit" />
    </form>
  );
}
