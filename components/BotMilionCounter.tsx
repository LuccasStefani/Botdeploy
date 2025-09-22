"use client";
import { useEffect } from "react";
import { BotMilionCounter } from "@/lib/botmilion-counter";
import Image from "next/image";

const BotMilionCounterComponent: React.FC = () => {
  useEffect(() => {
    new BotMilionCounter();
  }, []);

  return (
    <div className="relative flex justify-center mt-40" id="robo">
      {/* BotApoiado acima da section */}
      <div className="absolute -top-36 z-30 pointer-events-none">
        <Image
          src="/botcontador.png"
          width={200}
          height={190}
          alt="Bot Apoiado"
        />
      </div>

      {/* Borda degradê */}
      <div className="relative rounded-[32px] md:p-2 p-1 bg-gradient-to-br from-gray-700 via-gray-500 to-cyan-800">
        {/* Section com background */}
        <section
          id="botmilion-counter"
          className="relative overflow-hidden rounded-[30px] py-20 md:px-6 px-3"
          style={{
            backgroundImage: "url('/bg-count.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Spotlight no canto direito */}
          <div className="absolute top-0 right-0 z-10 pointer-events-none">
            <Image
              src="/Vector2.png"
              width={600}
              height={500}
              alt="spotlight"
              className="opacity-100 z-99"
            />
          </div>

          {/* Conteúdo */}
          <div className="relative z-20 w-full max-w-6xl mx-auto">
            <h2 className="text-4xl linearGradientText text-center mb-2">
              Contador Bot Milion
            </h2>
            <p className="text-center text-gray-500 mb-6">
              Carteira monitorada:{" "}
              <span className="text-green-300">
                <code id="bm-walletShort">—</code>
              </span>
            </p>

            {/* Container principal */}
            <div className="md:p-6">
              {/* Label de processo primeiro */}
              <div className="w-full flex justify-between items-center text-gray-500 md:text-sm text-xs font-light uppercase tracking-widest mb-2">
                <p className="m-0">Progresso da Pré-venda</p>
                <div className="flex items-center gap-1">
                  <span
                    className="inline-block w-2 h-2 rounded-full bg-green-500"
                    id="bm-statusDot"
                  ></span>
                  <span id="bm-statusText" className="ml-15">Atualizado agora </span>:
                  <b data-el="countdown" className="ml-1 text-green-500">
                    —
                  </b>
                </div>
              </div>

              {/* Barra de progresso */}
              <div className="h-10 bg-zinc-800/40 rounded-2xl border border-zinc-600/30 overflow-hidden mb-6">
                <i
                  className="bm-bar block h-full w-0 bg-gradient-to-r from-emerald-500  to-green-300 transition-all"
                  data-el="progressBar"
                ></i>
                <Image
                  src="/foquete.svg"
                  width={50}
                  height={50}
                  alt="spotlight"
                  className="opacity-100 absolute z-99 md:right-10 right-0 -mt-14 pointer-events-none"
                />
              </div>

              {/* Boxes lado a lado */}
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 py-14 gap-4 flex items-center justify-center flex-col bg-gradient-to-br  from-slate-950/70 to-slate-950/70 rounded-[20px] border border-zinc-600/25 backdrop-blur-[1.60px]">
                  <span className="flex items-center gap-2">
                    <Image
                      src="/iconecardC1.svg"
                      width={20}
                      height={20}
                      alt="webIcon"
                    />
                    <h4 className="text-base font-semibold text-gray-500">
                      Tokens vendidos
                    </h4>
                  </span>
                  <div
                    className="text-3xl font-extrabold text-green-300"
                    data-el="soldTokens"
                  >
                    —
                  </div>
                </div>
                <div className="flex-1 py-14 gap-4 flex items-center justify-center flex-col bg-gradient-to-br from-slate-950/70 to-slate-950/70 rounded-[20px] border border-zinc-600/25 backdrop-blur-[1.60px]">
                  <span className="flex items-center gap-2">
                    <Image
                      src="/iconCard4.svg"
                      width={20}
                      height={230}
                      alt="webIcon"
                    />

                    <h4 className="text-base font-semibold text-gray-500">
                      Total arrecadado (USD)
                    </h4>
                  </span>
                  <div
                    className="text-3xl font-extrabold text-sky-600"
                    data-el="raisedUsd"
                  >
                    —
                  </div>
                </div>
              </div>

              {/* Linha de fase */}
              <div className="flex justify-between items-center gap-4 text-gray-500 text-sm mb-4 flex-wrap">
                <div className="bm-phase-line inline-block">
                  Fase atual: <b data-el="currentPhase">—</b> • Preços:{" "}
                  <span className="inline-block px-2 py-0.5 rounded-full font-bold text-blue-600 bg-blue-100 border border-blue-200">
                    Fase 1 - <span data-el="priceF1">$0.0011</span>
                  </span>{" "}
                  •{" "}
                  <span className="inline-block px-2 py-0.5 rounded-full font-bold text-green-500 bg-green-100 border border-green-200">
                    Fase 2 - <span data-el="priceF2">$0.0012</span>
                  </span>
                </div>
                <div>
                  <span data-el="progressPct">0%</span> —{" "}
                  <span data-el="soldShort">—</span> /{" "}
                  <span data-el="capTotal">—</span> tokens
                </div>
              </div>
              {/* Error box */}
              <div
                className="text-red-500 text-sm mt-2 hidden"
                data-el="errorBox"
              ></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BotMilionCounterComponent;
