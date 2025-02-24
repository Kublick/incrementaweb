import React from "react";

const CheckoutForm = () => {
  return (
    <div className="container mx-auto">
      <div className="mx-auto flex items-center space-x-4">
        <div>
          <img
            src="/incrementa_logo_transparente.webp"
            alt="logo incrementa tu consulta"
            className="mx-auto w-36 py-2"
            width="356"
          />
        </div>
        <div className="w-full md:py-6">
          <h2 className="text-xl font-bold">MÉTODO INCREMENTA TU CONSULTA</h2>
          <p className="text-xs">
            Autor: <span>Berenice Bastidas</span>
          </p>
          <h2 className="text-xl font-bold text-blue">$20,404.00</h2>
          <p className="text-xs text-blue">
            o en 12 cuotas de $2,048.60 * en la tarjeta de crédito
          </p>
        </div>
      </div>
      <div className="h-[1px] bg-gray-300 px-4" />
      <div className="mb-2 p-2">
        <div className="flex flex-col space-y-4">
          <label className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Tu Nombre Completo
          </label>
          <input
            className="border-input bg-background ring-offset-background file:text-foreground placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            placeholder="introduce tu nombre completo"
          />
          <label className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Tu Email
          </label>
          <input
            className="border-input bg-background ring-offset-background file:text-foreground placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            placeholder="introduce tu email"
          />
          <label className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Confirma tu email
          </label>
          <input
            className="border-input bg-background ring-offset-background file:text-foreground placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            placeholder="introduce nuevamnete tu email"
          />
          <label className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Telefono
          </label>
          <input
            className="border-input bg-background ring-offset-background file:text-foreground placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            placeholder="+52 222 123 4567"
          />
          <div className="flex flex-col space-y-4 border border-slate-200 p-2">
            <label className="pt-2 text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Numero de tarjeta
            </label>
            <input
              className="border-input bg-background ring-offset-background file:text-foreground placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              placeholder="introduce solo numeros"
            />
            <label className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Nombre del titular
            </label>
            <input
              className="border-input bg-background ring-offset-background file:text-foreground placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              placeholder="nombre del titular"
            />

            <label className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              CVC
            </label>
            <input
              className="border-input bg-background ring-offset-background file:text-foreground placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              placeholder="cvc"
            />
            <p className="text-xs text-gray-600">OPCIONES DE PAGO</p>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
