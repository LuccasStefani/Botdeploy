"use client";

import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#000319] text-white px-4">
      <h1 className="text-6xl md:text-8xl font-bold mb-6">404</h1>
      <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-center">
        Ops! Página não encontrada
      </h2>
      <p className="text-gray-300 mb-8 text-center">
        A página que você está procurando não existe ou foi movida.
      </p>

      <Link
        href="/"
        className="flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition font-medium"
      >
        Voltar para a Home
      </Link>

      <div className="mt-10">
        <img
          src="/BotApoiado.png"
          alt="404"
          className="w-64 md:w-96 mx-auto"
        />
      </div>
    </div>
  );
}