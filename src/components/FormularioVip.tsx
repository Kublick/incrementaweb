import { useState } from "react";
import { z } from "zod";
import { countries } from "../data/countries";
import { ErrorResult, validateForm } from "../utils/utils";
import type * as React from "react";

const User = z.object({
  fullname: z
    .string({ required_error: "El Nombre es requerido" })
    .min(3, { message: "El nombre necesita al menos 3 caracteres" }),
  email: z
    .string({ required_error: "El Email es requerido" })
    .email({ message: "El email no es valido" }),
  phone: z.string({ required_error: "Este campo es requerido" }),
  pregunta: z
    .string({ required_error: "Este campo es requerido" })
    .min(6, { message: "Ingrese una sentencia en este campo" }),
  preguntados: z
    .string({ required_error: "Este campo es requerido" })
    .min(1, { message: "Ingrese una sentencia en este campo" }),
});

type User = z.infer<typeof User>;

const formNumber = "49";
const formId = "e5e27720c608848b1c84feecf9f68ed6";

function FormularioVip() {
  const [errorMessage, setErrorMessage] = useState({} as ErrorResult);
  const [hasError, setHasError] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    setIsSending(true);

    const formData = new FormData(e.target);
    const { errors } = validateForm<typeof User>(formData, User);

    const field2 = formData.get("pregunta");
    const field3 = formData.get("preguntados");

    if (errors) {
      setHasError(true);
      setErrorMessage(errors);

      setTimeout(() => {
        setHasError(false);
        setIsSending(false);
      }, 3000);

      return;
    }
    setHasError(false);

    formData.append("field[2]", field2!);
    formData.append("field[3]", field3!);

    formData.delete("pregunta");
    formData.delete("preguntados");

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
      window.location.href = "/graciasvip";
    }, 2000);
  };

  return (
    <div className=" my-4 rounded-lg p-4">
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="u" value={formNumber} />
        <input type="hidden" name="f" value={formNumber} />
        <input type="hidden" name="s" />
        <input type="hidden" name="c" value="0" />
        <input type="hidden" name="m" value="0" />
        <input type="hidden" name="act" value="sub" />
        <input type="hidden" name="v" value="2" />
        <input type="hidden" name="or" value={formId} />

        <div className="mt-2 ">
          <label className="mb-2 block text-sm font-medium ">Nombre:</label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5 text-gray-500 dark:text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="fullname"
              name="fullname"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Nombre"
            />
          </div>
        </div>
        {hasError && (
          <div className="mx-4 mt-4">
            <p className=" mr-2 rounded bg-white px-2.5 py-0.5 text-sm font-semibold text-red-800 dark:bg-red-200 dark:text-red-900">
              {errorMessage.fullname}
            </p>
          </div>
        )}

        <div className="mt-2">
          <label className="mb-2 block text-sm font-medium ">Correo</label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                aria-hidden="true"
                className="h-5 w-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
            <input
              type="text"
              id="email"
              name="email"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Correo"
            />
          </div>

          {hasError ? (
            <div className="mx-4 mt-4">
              <p className=" mr-2 rounded bg-white px-2.5 py-0.5 text-sm font-semibold text-red-800 dark:bg-red-200 dark:text-red-900">
                {errorMessage.email}
              </p>
            </div>
          ) : null}
        </div>
        <div className="mt-2">
          <label
            htmlFor="countries"
            className="mb-2 block text-sm font-medium "
          >
            Selecciona un país
          </label>
          <select
            id="countries"
            name="field[1]"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            defaultValue={"MX"}
          >
            {countries.map((country) => (
              <option key={country.value} value={country.value}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-2">
          <label
            htmlFor="email-address-icon"
            className="mb-2 block text-sm font-medium "
          >
            Whatsapp:
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                fill="#6b7280"
                className="h-5 w-5 text-gray-500 dark:text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375 z" />
              </svg>
            </div>
            <input
              type="text"
              name="phone"
              id="phone"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  "
              placeholder="Numero Whatsapp"
            />
          </div>
          {hasError ? (
            <div className="mx-4 mt-4">
              <p className=" mr-2 rounded bg-white px-2.5 py-0.5 text-sm font-semibold text-red-800 dark:bg-red-200 dark:text-red-900">
                {errorMessage.phone}
              </p>
            </div>
          ) : null}
        </div>
        <div className="mt-2">
          <label
            htmlFor="email-address-icon"
            className="mb-2 block text-sm font-medium "
          >
            ¿Por qué quieres ser parte de Incrementa Tu Consulta?
          </label>
          <div className="relative">
            <input
              type="text"
              name="pregunta"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  "
              placeholder="Escribe aquí"
            />
          </div>
          {hasError ? (
            <div className="mx-4 mt-4">
              <p className=" mr-2 rounded bg-white px-2.5 py-0.5 text-sm font-semibold text-red-800 dark:bg-red-200 dark:text-red-900">
                {errorMessage.pregunta}
              </p>
            </div>
          ) : null}
        </div>

        <div className="mt-2">
          <label
            htmlFor="email-address-icon"
            className="mb-2 block text-sm font-medium "
          >
            ¿Estarías dispuesto a invertir en ti mismo, ya que es un programa
            que tiene un valor por encima de $1,000 dólares?
          </label>
          <div className="relative">
            <input
              type="text"
              name="preguntados"
              id="preguntados"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  "
              placeholder="Escribe aquí"
            />
          </div>
          {hasError ? (
            <div className="mx-4 mt-4">
              <p className=" mr-2 rounded bg-white px-2.5 py-0.5 text-sm font-semibold text-red-800 dark:bg-red-200 dark:text-red-900">
                {errorMessage.preguntados}
              </p>
            </div>
          ) : null}
        </div>

        <div className="flex justify-center">
          {!isSending ? (
            <button
              type="submit"
              className={`mt-8 w-full rounded-lg bg-green-600 px-8 py-4 font-coolvetica text-2xl font-black text-white hover:bg-green-500 md:text-4xl`}
              disabled={isSending}
            >
              ¡ Quiero ser VIP !
            </button>
          ) : (
            <button
              type="submit"
              className={`mt-8 flex w-full justify-center gap-4 rounded-lg bg-green-600 px-8 py-4 text-2xl text-white`}
              disabled={isSending}
            >
              <span>Confirmando Registro</span>
              <svg
                aria-hidden="true"
                className="mr-2 h-8 w-8 animate-spin fill-green-800  text-gray-200"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default FormularioVip;
