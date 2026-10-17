"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { FaLinkedinIn, FaGithub, FaFigma } from "react-icons/fa6";
import Typewriter from "@/components/Typewriter";

const socials = [
  {
    href: "https://www.linkedin.com/in/briannastrand",
    icon: FaLinkedinIn,
    label: "LinkedIn",
  },
  { href: "https://github.com/Bribri0na", icon: FaGithub, label: "GitHub" },
  {
    href: "https://www.figma.com/design/dLpaMEUu6033VVmcXlaIJ7/Brianna--Portfolio-DESIGN",
    icon: FaFigma,
    label: "Figma",
  },
];

export default function Hero() {
  const [nameDone, setNameDone] = useState(false);
  const handleNameDone = useCallback(() => setNameDone(true), []);

  return (
    <section id="home" className="pt-20 pb-24 md:pt-24 md:pb-28">
      <p className="mb-6 text-lg">👋 Hi I am</p>
      <Image
        src="/images/avatar3.jpg"
        alt="Brianna Strand"
        width={64}
        height={64}
        className="mb-4 h-16 w-16 rounded-full object-cover"
        priority
      />

      <h1 className="mb-2 min-h-[1.4em] text-2xl text-white md:text-3xl">
        <Typewriter
          text="Brianna Strand"
          speed={90}
          cursor={!nameDone}
          onDone={handleNameDone}
        />
      </h1>

      <p className="mb-8 min-h-[1.6em] font-mono text-accent">
        <Typewriter
          text="Frontend Developer & Designer"
          speed={55}
          start={nameDone}
        />
      </p>

      <p className="mb-8 max-w-[1080px] text-[16px] font-mono text-gray-400">
I'm a frontend developer and UI/UX designer based in Stockholm. I've designed e-commerce, live sports, video streaming and lifestyle products, and I'm good at turning vague or incomplete input into clear, shippable work.

For several years I worked remotely as a freelance designer while travelling, collaborating with product teams across time zones in Chinese and English. Now I've settled in Stockholm, I'm studying frontend development at FutureGames, and I'm building my career here for the long term.

Looking for a frontend LIA in Stockholm, 4 January – 21 May 2027.
      </p>
       


      <div className="flex gap-5">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            aria-label={s.label}
            className="text-gray-400 transition hover:text-accent"
          >
            <s.icon size={22} />
          </a>
        ))}
      </div>
    </section>
  );
}
