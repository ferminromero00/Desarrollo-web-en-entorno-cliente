import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function LoginComp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
    

  const usuarios = [
    { name: "pepe", mail: "pepe@a.com" },
    { name: "juan", mail: "juan@a.com" },
  ];

  const onSubmit = (data) => {
    const user = usuarios.find(
      (user) => user.name === data.name && user.mail === data.mail
    );

    if (user) {
      navigate("/");
    } else {
      setErrorMessage("Usuario no encontrado");
    }
  };

  return (
    <div className="container mt-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="needs-validation"
        noValidate
      >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nombre completo
          </label>
          <input
            id="name"
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            {...register("name", { required: "El nombre es obligatorio" })}
          />
          {errors.name && (
            <div className="invalid-feedback">{errors.name.message}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="mail" className="form-label">
            Correo electrónico
          </label>
          <input
            id="mail"
            type="email"
            className={`form-control ${errors.mail ? "is-invalid" : ""}`}
            {...register("mail", {
              required: "El correo electrónico es obligatorio",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "Formato de correo electrónico no válido",
              },
            })}
          />
          {errors.mail && (
            <div className="invalid-feedback">{errors.mail.message}</div>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
      {errorMessage && (
        <div className="alert alert-danger mt-3">{errorMessage}</div>
      )}
    </div>
  );
}
