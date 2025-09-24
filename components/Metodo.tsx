"use client";

import Image from "next/image";
import React from "react";
import ShinyText from "./ShinyText";
import { metodoContent } from "@/types/types";

const Metodo = () => {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-16" id="metodo">
      <main className="flex flex-col gap-6">
        {/* Título animado */}
        <ShinyText
          text={metodoContent.title}
          disabled={false}
          speed={3}
          className="text-sm mx-auto uppercase"
        />

        {/* Headline */}
        <h2 className="linearGradientText w-full md:max-w-[60%] mx-auto text-3xl md:text-4xl text-center leading-snug tracking-[-0.02em] pb-6">
          {metodoContent.headline}{" "}
          <Image
            src={metodoContent.headlineImage.src}
            alt={metodoContent.headlineImage.alt}
            width={metodoContent.headlineImage.width}
            height={metodoContent.headlineImage.height}
            className="inline-block ml-2 align-middle"
          />
        </h2>

        {/* Texto de introdução */}
        <p className="text-neutral-300 text-lg leading-relaxed text-justify">
          {metodoContent.intro}
        </p>

        {/* Lista de etapas */}
        <ul className="flex flex-col gap-4 mt-2">
          {metodoContent.steps.map((step, index) => (
            <li key={index} className="flex items-start gap-3">
              <Image
                src={step.icon}
                alt="Seta"
                width={20}
                height={20}
                className="mt-1"
              />
              <p className="text-neutral-300 text-lg leading-relaxed">
                {step.text}
              </p>
            </li>
          ))}
        </ul>

        {/* Texto complementar */}
        <div className="flex flex-col gap-4 mt-4">
          {metodoContent.complement.map((text, i) => (
            <p
              key={i}
              className="text-neutral-300 text-lg leading-relaxed"
              dangerouslySetInnerHTML={{ __html: text }}
            />
          ))}
        </div>
      </main>
    </section>
  );
};

export default Metodo;
