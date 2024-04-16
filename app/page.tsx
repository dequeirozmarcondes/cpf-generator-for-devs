"use client";

import { useState } from "react";
import { generateCPF } from "./components/generatorCPF";
import { Button } from "./ui/button";

export default function Home() {
  const [cpf, setCpf] = useState("000.000.000-00");

  const handleGenerateCPF = () => {
    const newCPF = generateCPF(); // Gera um novo CPF
    setCpf(newCPF); // Atualiza o estado com o novo CPF
  };

  return (
    <div className="container mx-auto flex flex-col min-h-screen justify-center items-center px-4 py-8 sm:px-6 md:px-8 lg:px-12">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-7">
        Gerador de Cpf & Cnpj for{" "}
        <i className="font-normal">
          <u>Devs</u>
        </i>
      </h1>
      <p className="text-emerald-700 font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-center">
        {cpf}
      </p>
      <Button
        className="bg-lime-600 hover:bg-lime-500 w-auto px-10 sm:px-16 py-3 rounded-md text-white font-medium mt-7"
        onClick={handleGenerateCPF}
      >
        Gerar CPF
      </Button>
    </div>
  );
}
