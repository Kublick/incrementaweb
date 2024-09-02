import { useState } from "react";
import { z } from "zod";
import { type ErrorResult, validateForm } from "../utils/utils";

const User = z.object({
  fullname: z
    .string({ required_error: "El Nombre es requerido" })
    .min(3, { message: "Ingrese al menos 3 caracteres" }),
  email: z
    .string({ required_error: "El Email es requerido" })
    .email({ message: "El email no es valido" }),
});

type FormInput = z.infer<typeof User>;

const formNumber = "53";
const formId = "e4ba819917a95a5ab7d8c47c8dd4d208";

export default function Formulario() {
  const [errorMessage, setErrorMessage] = useState({} as ErrorResult);
  const [hasError, setHasError] = useState(true);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    setIsSending(true);

    const formData = new FormData(e.target);

    const { errors } = validateForm<typeof User>(formData, User);

    if (errors) {
      setHasError(true);
      setErrorMessage(errors);

      setTimeout(() => {
        setIsSending(false);
      }, 2000);

      return;
    }
    setHasError(false);

    const url = "https://psicologaberenicebastidas.activehosted.com/proc.php";
    fetch(url, {
      method: "POST",
      body: formData,
      mode: "no-cors",
    })
      .then((response) => {
        if (response.status === 200) {
        }
      })
      .catch((error) => {
        console.log(error);
      });
    setTimeout(() => {
      window.location.href = "/gracias";
    }, 2000);
  };

  return (
    <div className="mt-4  px-2 md:mt-0">
      <form
        onSubmit={handleSubmit}
        className="mx-4 mt-4 flex flex-col gap-4 md:mt-8"
        noValidate
      >
        <input type="hidden" name="u" value={formNumber} />
        <input type="hidden" name="f" value={formNumber} />
        <input type="hidden" name="s" />
        <input type="hidden" name="c" value="0" />
        <input type="hidden" name="m" value="0" />
        <input type="hidden" name="act" value="sub" />
        <input type="hidden" name="v" value="2" />
        <input type="hidden" name="or" value={formId} />

        <div className="flex items-center gap-4 rounded border border-gray-400 bg-white px-3 py-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="rgb(156 163 175)"
            className="ml-2 h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="text"
            name="fullname"
            placeholder="Tú Nombre y Apellido"
            className="w-full text-black focus:outline-none  active:outline-none"
          />
        </div>
        {hasError && (
          <p className="bg-white px-4 text-sm text-red-500">
            {errorMessage?.fullname}
          </p>
        )}
        <div className="flex items-center gap-4 rounded border border-gray-400 bg-white px-3 py-3 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="rgb(156 163 175)"
            className="ml-2 h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>

          <input
            type="email"
            name="email"
            placeholder="Tu mejor correo"
            className="w-full text-black focus:outline-none  active:outline-none"
          />
        </div>
        {hasError && (
          <p className="bg-white px-4 text-sm text-red-500">
            {errorMessage?.email}
          </p>
        )}
        <div className="mt-8 flex flex-col items-center ">
          <button
            disabled={isSending}
            className={`w-full transform rounded-xl bg-gradient-to-t from-buttonRed to-red-500 px-7 py-5 font-bold leading-none text-white shadow-lg transition-all hover:scale-105 ${
              isSending && "cursor-not-allowed bg-green-600"
            } `}
            type="submit"
          >
            <span className="text-xl lg:text-2xl">
              {!isSending
                ? "¡Quiero tener más pacientes!"
                : "Registrandote al webinar"}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
