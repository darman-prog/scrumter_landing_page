import { ArrowRight, Mail } from "lucide-react";
import { useState, type FormEvent } from "react";
import { content, type Locale } from "../data/content";

export function CTA({ locale }: { locale: Locale }) {
  const copy = content[locale].cta;
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"error" | "success" | "">("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!valid) {
      setMessage(copy.error);
      setMessageType("error");
      return;
    }
    setEmail("");
    setMessage(copy.success);
    setMessageType("success");
  }

  return (
    <section id="cta" className="px-5 pb-20 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-14 text-center text-white shadow-2xl shadow-brand/20 sm:px-10 md:py-20 dark:bg-white dark:text-slate-950">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-indigo-200 dark:bg-brand/10 dark:text-brand">
          <Mail size={25} />
        </div>
        <h2 className="mx-auto mt-6 max-w-3xl text-balance text-3xl font-black md:text-5xl">{copy.title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300 dark:text-slate-600">{copy.subtitle}</p>

        <form className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 rounded-3xl bg-white p-2 sm:flex-row dark:bg-slate-100" noValidate onSubmit={onSubmit}>
          <input
            className="min-h-14 flex-1 rounded-2xl px-5 text-base font-semibold text-slate-950 outline-none placeholder:text-slate-400"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder={copy.placeholder}
            aria-label={copy.placeholder}
            autoComplete="email"
            inputMode="email"
            required
          />
          <button className="btn-primary justify-center" type="submit">
            {copy.button}
            <ArrowRight size={18} />
          </button>
        </form>

        <p
          className={`mt-4 min-h-6 text-sm font-bold ${
            messageType === "error" ? "text-rose-300 dark:text-rose-600" : messageType === "success" ? "text-emerald-300 dark:text-emerald-600" : "text-slate-300 dark:text-slate-500"
          }`}
          role="status"
          aria-live="polite"
        >
          {message || copy.note}
        </p>
      </div>
    </section>
  );
}
