import { useState } from "react";
import { z } from "zod";
import CountdownTimer from "./CountdownTimer";

const User = z.object({
  fullname: z
    .string({ required_error: "El Nombre es requerido" })
    .min(3, { message: "Al menos 3 caracteres" }),
  email: z
    .string({ required_error: "El Email es requerido" })
    .email({ message: "El email no es valido" }),
});

const formNumber = "37";
const formId = "3c856c71aedfae83927791b5fa1530f9";

const eventDate = new Date("2022-10-17");

const fifteen = 15 * 60 * 1000;
const NOW_IN_MS = new Date().getTime();

const dateTimeAfterThreeDays = NOW_IN_MS + fifteen;

export default function Formulario() {
  const [email, setEmail] = useState("");
  const [fullname, setFullName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [hasError, setHasError] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    setIsSending(true);

    console.log("click");
    const check = User.safeParse({
      fullname,
      email,
    });

    if (!check.success) {
      setErrorMessage(check.error.issues[0].message);
      setHasError(true);

      setTimeout(() => {
        setHasError(false);
        setIsSending(false);
      }, 4000);
      return;
    }

    setTimeout(() => {
      window.location.href = "/gracias";
    }, 2500);

    // const formData = new FormData(e.target);

    // const url = "https://psicologaberenicebastidas.activehosted.com/proc.php";
    // fetch(url, {
    //   method: "POST",
    //   body: formData,
    //   mode: "no-cors",
    // })
    //   .then((response) => {
    //     if (response.status === 200) {
    //       setTimeout(() => {
    //         window.location.href = "/gracias";
    //       }, 2000);
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <div className="container mx-auto max-w-3xl mt-4 md:mt-0">
      <form
        onSubmit={handleSubmit}
        className="mx-4 mt-4 flex flex-col gap-4 md:mx-24 md:mt-12"
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

        <input
          type="text"
          name="fullname"
          placeholder="Tú Nombre y Apellido"
          className="focus w-full appearance-none rounded border border-gray-400 px-3   py-3 focus:border-indigo-600 focus:outline-none active:border-indigo-600 active:outline-none "
          onChange={(e) => setFullName(e.target.value)}
        />

        <input
          type="email"
          name="email"
          placeholder="Tu mejor correo"
          className="focus w-full appearance-none rounded border border-gray-400 px-3 py-3 focus:border-indigo-600 focus:outline-none active:border-indigo-600 active:outline-none"
          onChange={(e) => setEmail(e.target.value)}
        />
        {hasError && <p className="text-sm text-red-500">{errorMessage}</p>}
        <div className="mt-8 flex items-center flex-col">
          <div className="relative group ">
            <div className="animate-pulse absolute  bg-primary rounded-lg blur -inset-0.5 opacity-90 group-hover:opacity-100" />

            <button
              disabled={isSending}
              className={`relative px-7 py-4 rounded-lg leading-none bg-secondary text-white hover:font-semibold ${
                isSending && "bg-green-600 cursor-not-allowed"
              } `}
              type="submit"
            >
              <span className="text-xl lg:text-2xl">
                {!isSending
                  ? "Quiero tener más pacientes"
                  : "Registrandote al webinar"}
              </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
