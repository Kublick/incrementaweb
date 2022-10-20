import { DateTime } from "luxon";
import { useEffect, useRef, useState } from "react";

const InscripcionCta = () => {
  const [show, setShow] = useState(false);
  const ref = useRef<any>(null);

  const local = DateTime.fromISO("2022-10-20T19:45:00-07:00");

  const eventDate = local.valueOf();

  useEffect(() => {
    const check = setInterval(() => {
      let currentDate = Date.now();
      if (new Date(currentDate) > new Date(eventDate)) {
        setShow(true);
      }
    }, 6000);

    return () => {
      clearInterval(check);
    };
  }, []);

  if (show) {
    console.log("scroll");
    ref.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div ref={ref}>
      {show && (
        <div className="flex justify-center bg-mango py-6 w-3/4 mx-auto my-4 rounded lg:mb-12">
          <a
            href="/inscripciones-abiertas"
            className="flex bg-primary py-4 px-8 items-center rounded-full gap-4 md:text-2xl text-white font-bold shadow-lg hover:bg-green animate-none mx-4 text-center"
          >
            Quiero Incrementar Mi Consulta
          </a>
        </div>
      )}
    </div>
  );
};

export default InscripcionCta;
