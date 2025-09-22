"use client";

import React from "react";
import Image from "next/image";
import { FaInstagram, FaTiktok, FaTelegramPlane } from "react-icons/fa";
import { footerContent } from "@/types/footerData";

const iconMap = {
  instagram: <FaInstagram size={22} />,
  tiktok: <FaTiktok size={22} />,
  telegram: <FaTelegramPlane size={22} />,
};

const Footer = () => {
  return (
    <footer className="w-full max-w-4xl mx-auto text-neutral-400 pb-0">
      {/* Título */}
      <h1 className="md:text-[140px] text-5xl flex justify-center text-neutral-400 font-medium font-['Inter'] leading-[1] uppercase linearGradientTextFooter">
        {footerContent.title}
        <span className="ml-2 text-5xl align-super">®</span>
      </h1>

      {/* Conteúdo */}
      <section className="w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start px-6 gap-5 mt-5">
        {/* Coluna Esquerda */}
        <div className="flex flex-col gap-4 max-w-md">
          <div className="flex items-center gap-3">
            <Image
              src={footerContent.logo.src}
              alt={footerContent.logo.alt}
              width={footerContent.logo.width}
              height={footerContent.logo.height}
            />
            <h2 className="text-white text-lg mt-4">{footerContent.title}</h2>
          </div>
          <p className="text-sm leading-relaxed text-neutral-400 md:mt-5">
            {footerContent.description}
          </p>

          {/* Ícones sociais */}
          <div className="flex gap-4 text-white">
            {footerContent.socialLinks.map((link, i) => (
              <a key={i} href={link.href} className="hover:text-white transition">
                {iconMap[link.icon]}
              </a>
            ))}
          </div>
        </div>

        {/* Coluna Direita */}
        <div className="flex flex-col gap-3 mt-5">
          <h3 className="text-white mb-2">Links Úteis</h3>
          {footerContent.usefulLinks.map((link, i) => (
            <a key={i} href={link.href} className="hover:text-white transition">
              {link.label}
            </a>
          ))}
        </div>
      </section>

      {/* Copyright */}
      <div className="mt-5 text-center text-sm text-neutral-500">
        {footerContent.copyright}
      </div>
    </footer>
  );
};

export default Footer;
