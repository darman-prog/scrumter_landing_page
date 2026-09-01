import { ArrowRight, Loader2, Mail } from "lucide-react";
import { useId, useState, type FormEvent } from "react";
import { content, type Locale } from "../data/content";

export function CTA({ locale }: { locale: Locale }) {
  const copy = content[locale].cta;
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"error" | "success" | "">("");
  const [loading, setLoading] = useState(false);
  const inputId = useId();
  const helpId = `${inputId}-help`;
  const msgId = `${inputId}-msg`;

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (loading) return;
    const trimmed = email.trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
    if (!valid) {
      setMessage(copy.error);
      setMessageType("error");
      return;
    }
    setLoading(true);
    setMessage("");
    setMessageType("");
    // Simula POST /api/leads — reemplazar por fetch real en fullstack
    window.setTimeout(() => {
      setLoading(false);
      setEmail("");
      setMessage(copy.success);
      setMessageType("success");
    }, 900);
  }

  return (
    <section id="cta" className="px-5 pb-20 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand via-[#4f46e5] to-[#7c3aed] px-6 py-14 text-center text-white shadow-2xl shadow-brand/30 sm:px-10 md:py-20">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white">
          <Mail size={25} aria-hidden="true" />
        </div>
        <h2 className="mx-auto mt-6 max-w-3xl text-balance text-3xl font-black md:text-5xl">{copy.title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-indigo-100">{copy.subtitle}</p>

        <form className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 rounded-3xl bg-white p-2 sm:flex-row" noValidate onSubmit={onSubmit} aria-busy={loading}>
          <label htmlFor={inputId} className="sr-only">
            {copy.placeholder}
          </label>
          <input
            id={inputId}
            className={`min-h-14 flex-1 rounded-2xl px-5 text-base font-semibold text-slate-950 outline-none placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 ${
              messageType === "error" ? "ring-2 ring-rose-400" : ""
            }`}
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder={copy.placeholder}
            autoComplete="email"
            inputMode="email"
            required
            aria-invalid={messageType === "error"}
            aria-describedby={`${helpId} ${msgId}`}
            disabled={loading}
          />
          <button
            className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-white px-6 text-sm font-black text-brand shadow-lg transition hover:bg-indigo-50 disabled:cursor-not-allowed disabled:opacity-60"
            type="submit"
            disabled={loading}
            aria-busy={loading}
          >
            {loading ? <Loader2 size={18} className="animate-spin" aria-hidden="true" /> : <ArrowRight size={18} aria-hidden="true" />}
            {loading ? (locale === "es" ? "Enviando…" : "Sending…") : copy.button}
          </button>
        </form>

        <p id={helpId} className="sr-only">
          {copy.note}
        </p>
        <p
          id={msgId}
          className={`mt-4 min-h-6 text-sm font-bold ${
            messageType === "error" ? "text-rose-200" : messageType === "success" ? "text-emerald-200" : "text-indigo-100"
          }`}
          role={messageType === "error" ? "alert" : "status"}
          aria-live={messageType === "error" ? "assertive" : "polite"}
        >
          {message || copy.note}
        </p>
      </div>
    </section>
  );
}
