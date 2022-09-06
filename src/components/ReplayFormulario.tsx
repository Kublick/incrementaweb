import { useState } from "react";
import { z } from "zod";
import { countries } from "../data/countries";

const User = z.object({
  fullname: z
    .string({ required_error: "El Nombre es requerido" })
    .min(3, { message: "El nombre necesita al menos 3 caracteres" }),
  email: z
    .string({ required_error: "El Email es requerido" })
    .email({ message: "El email no es valido" }),
  whatsapp: z
    .string()
    .min(12, { message: "Ingrese un numero de 12 digitos sin simbolos" }),
});

const ReplayFormulario = () => {
  const [email, setEmail] = useState("");
  const [fullname, setFullName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [hasError, setHasError] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    setIsSending(true);

    const check = User.safeParse({
      fullname,
      email,
      whatsapp,
    });

    if (!check.success) {
      setErrorMessage(check.error.issues[0].message);
      setHasError(true);

      setTimeout(() => {
        setHasError(false);
        setIsSending(false);
      }, 2000);
      return;
    }

    const formData = new FormData(e.target);

    // const url = "https://psicologaberenicebastidas.activehosted.com/proc.php";
    // fetch(url, {
    //   method: "POST",
    //   body: formData,
    //   mode: "no-cors",
    // })
    //   .then((response) => {
    //     if (response.status === 200) {
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // setTimeout(() => {
    //   window.location.href = "/gracias";
    // }, 2000);
  };

  return (
    <div>
      <h1 className="text-xl text-white md:text-2xl">
        Completa el formulario y confirma tu asistencia
      </h1>
      <form onSubmit={handleSubmit}>
        {hasError ? (
          <p className="text-center bg-red-600 text-white">{errorMessage}</p>
        ) : null}
        <div className="mt-2">
          <label className="block mb-2 text-sm font-medium text-white">
            Nombre:
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nombre"
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
        </div>

        <div className="mt-2">
          <label className="block mb-2 text-sm font-medium text-white">
            Correo
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Correo"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-2">
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-white"
          >
            Selecciona un país
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            className="block mb-2 text-sm font-medium text-white"
          >
            Whatsapp:
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                fill="#6b7280"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375 z" />
              </svg>
            </div>
            <input
              type="text"
              id="whatsapp"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Numero Whatsapp"
              onChange={(e) => setWhatsapp(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="text-2xl bg-primary text-white px-8 py-4 mt-8 hover:bg-primary-dark"
          >
            Confirmar mi asistencia ahora
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReplayFormulario;
