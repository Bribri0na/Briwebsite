import Contact from "@/components/Contact";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";

export const metadata = { title: "Contacts — Brianna" };

const socials = [
  {
    href: "https://www.linkedin.com/in/briannastrand",
    icon: FaLinkedinIn,
    label: "LinkedIn",
  },
  { href: "https://github.com/Bribri0na", icon: FaGithub, label: "GitHub" },
];

export default function ContactsPage() {
  return (
    <main className="mx-auto max-w-[1000px] px-6 py-12">
      <h1 className="mb-3 font-mono text-4xl font-semibold text-white">
        <span className="text-accent">/</span>Let&apos;s Connect
      </h1>
      <p className="mb-6 text-lg text-gray-400">
        Have a project, a role, or just want to say hi? Drop me a line.
      </p>

      <div className="mb-12 flex gap-5">
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

      <Contact />
    </main>
  );
}