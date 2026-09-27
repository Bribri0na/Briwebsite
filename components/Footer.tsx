import { FaLinkedinIn, FaGithub } from "react-icons/fa6";

const socials = [
  {
    href: "https://www.linkedin.com/in/briannastrand",
    icon: FaLinkedinIn,
    label: "LinkedIn",
  },
  { href: "https://github.com/Bribri0na", icon: FaGithub, label: "GitHub" },
];

export default function Footer() {
  return (
    <footer id="contacts" className="mt-16 border-t border-gray-800">
      <div className="mx-auto max-w-[1000px] px-6">
        <div className="flex flex-col gap-6 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-1 font-mono text-white">
              <span className="mr-2 text-accent">▚</span>Brianna Strand
              <a
                href="mailto:briannatt007@gmail.com"
                className="ml-2 text-gray-300 underline hover:text-accent"
              >
                briannatt007@gmail.com
              </a>
            </p>
            <p className="font-mono text-[13px] text-gray-400">
              UI/UX Designer &amp; Frontend Developer · Stockholm, Sweden
            </p>
          </div>

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
                <s.icon size={20} />
              </a>
            ))}
          </div>
        </div>
        <p className="pb-8 text-center font-mono text-xs text-gray-500">
          © Copyright 2026. Made by Brianna
        </p>
      </div>
    </footer>
  );
}