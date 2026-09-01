import { ArrowRight, Check, ChevronRight, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { SIGNUP_URL, content, type Currency, type Locale } from "../data/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Pricing({
  locale,
  currency,
  setCurrency,
}: {
  locale: Locale;
  currency: Currency;
  setCurrency: (currency: Currency) => void;
}) {
  const copy = content[locale].pricing;
  // hint de scroll horizontal: desaparece tras el primer gesto del usuario
  const [scrolled, setScrolled] = useState(false);

  return (
    <section id="pricing" className="bg-slate-50 py-24 md:py-28 dark:bg-white/[0.03]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={copy.eyebrow} title={copy.title} accent={copy.accent} subtitle={copy.subtitle} />

        {/* Toggle de moneda mejorado */}
        <div className="mb-10 flex justify-center">
          <div
            role="group"
            aria-label={locale === "es" ? "Moneda" : "Currency"}
            className="inline-flex rounded-full border border-slate-200 bg-white p-1 shadow-sm dark:border-white/10 dark:bg-slate-950"
          >
            <button
              type="button"
              onClick={() => setCurrency("cop")}
              aria-pressed={currency === "cop"}
              aria-selected={currency === "cop"}
              role="tab"
              className={`rounded-full px-5 py-2.5 text-sm font-black transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950 ${
                currency === "cop"
                  ? "bg-brand text-white shadow-md shadow-brand/30"
                  : "text-slate-500 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
              }`}
            >
              {copy.toggleCop}
            </button>
            <button
              type="button"
              onClick={() => setCurrency("usd")}
              aria-pressed={currency === "usd"}
              aria-selected={currency === "usd"}
              role="tab"
              className={`rounded-full px-5 py-2.5 text-sm font-black transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950 ${
                currency === "usd"
                  ? "bg-brand text-white shadow-md shadow-brand/30"
                  : "text-slate-500 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
              }`}
            >
              {copy.toggleUsd}
            </button>
          </div>
        </div>

        {/* Grid de planes — carrusel con hint sutil en móvil */}
        <div className="relative -mx-5 sm:mx-0">
          <div
            onScroll={() => {
              if (!scrolled) setScrolled(true);
            }}
            className="pricing-fade flex gap-4 overflow-x-auto snap-x snap-mandatory px-5 pb-6 sm:px-0 lg:grid lg:grid-cols-3 lg:gap-6 xl:grid-cols-5 xl:gap-5 lg:overflow-visible lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
          {copy.plans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 60} className="min-w-[82vw] snap-center sm:min-w-[340px] lg:min-w-0 shrink-0 lg:shrink">
              <article
                className={`group relative flex h-full min-h-[420px] flex-col rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
                  plan.highlighted
                    ? "border-brand bg-gradient-to-b from-slate-900 to-slate-950 text-white shadow-2xl shadow-brand/20 hover:border-brand-400 hover:from-slate-800 hover:to-slate-900 hover:shadow-brand/40 dark:border-brand-300 dark:bg-gradient-to-b dark:from-white dark:to-slate-100 dark:text-slate-950 dark:hover:border-brand-400 dark:hover:from-slate-50 dark:hover:to-white dark:hover:shadow-brand/30"
                    : "border-slate-200 bg-white shadow-sm hover:border-brand hover:shadow-xl hover:shadow-slate-200/50 dark:border-white/10 dark:bg-slate-950 dark:hover:border-brand-300 dark:hover:shadow-slate-900/50"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute right-5 top-5 w-fit max-w-[calc(100%-2.5rem)] rounded-2xl bg-brand px-3 py-1 text-center text-xs font-black leading-5 text-white shadow-lg shadow-brand/30 ring-1 ring-white/20 dark:bg-slate-950 dark:text-white dark:ring-slate-950/10">
                    {copy.popular}
                  </span>
                )}
                <h3 className="pr-24 text-xl font-black leading-tight tracking-tight">{plan.name}</h3>
                <p
                  className={`mt-3 min-h-12 text-sm leading-6 ${
                    plan.highlighted
                      ? "text-slate-300 dark:text-slate-500"
                      : "text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {plan.description}
                </p>
                <div className="mt-6 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <b className="text-4xl font-black tabular-nums tracking-tight whitespace-nowrap xl:text-3xl">
                    {plan.price[currency]}
                  </b>
                  {!["A medida", "Custom"].includes(plan.price[currency]) && (
                    <span
                      className={`text-sm font-bold whitespace-nowrap ${
                        plan.highlighted
                          ? "text-slate-300 dark:text-slate-500"
                          : "text-slate-500 dark:text-slate-400"
                      }`}
                    >
                      {copy.monthly}
                    </span>
                  )}
                </div>
                <ul className="mt-7 grid gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2 text-sm font-bold leading-6">
                      <span
                        className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          plan.highlighted
                            ? "bg-emerald-400/20 text-emerald-300 dark:bg-emerald-500/20 dark:text-emerald-600"
                            : "bg-emerald-500/10 text-emerald-500 dark:bg-emerald-500/20 dark:text-emerald-400"
                        }`}
                      >
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  className={`mt-auto flex min-h-12 items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-black transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950 ${
                    plan.highlighted
                      ? "bg-white text-brand shadow-lg shadow-brand/20 hover:bg-slate-100 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-800"
                      : "border border-slate-200 text-slate-800 hover:border-brand hover:bg-slate-50 hover:text-brand dark:border-white/10 dark:text-white dark:hover:border-brand-300 dark:hover:bg-white/5 dark:hover:text-brand-200"
                  }`}
                  href={SIGNUP_URL}
                  data-plan={plan.name}
                  aria-label={`${plan.cta} — ${plan.name}`}
                >
                  {plan.cta}
                  {plan.highlighted && (
                    <ArrowRight size={17} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
                  )}
                </a>
              </article>
            </Reveal>
          ))}
          </div>

          {/* hint minimal: chevron con nudge sutil, se oculta tras el primer scroll */}
          <span
            aria-hidden="true"
            className={`pricing-hint absolute right-3 top-1/2 z-10 flex -translate-y-1/2 items-center transition-opacity duration-300 lg:hidden ${
              scrolled ? "pointer-events-none opacity-0" : "opacity-100"
            }`}
          >
            <ChevronRight size={22} strokeWidth={2.25} className="pricing-hint-arrow text-brand dark:text-brand-200" />
          </span>
        </div>

        {/* Garantía convertida en badge/pill */}
        <div className="mt-10 flex justify-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-5 py-2.5 text-center text-sm font-bold text-emerald-700 dark:text-emerald-300">
            <ShieldCheck size={17} className="text-emerald-500" />
            {copy.wompi}
          </p>
        </div>
      </div>
    </section>
  );
}