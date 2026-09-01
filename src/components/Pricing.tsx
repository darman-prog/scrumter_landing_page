import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { content, type Currency, type Locale } from "../data/content";
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

  return (
    <section id="pricing" className="bg-slate-50 py-24 md:py-28 dark:bg-white/[0.03]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={copy.eyebrow} title={copy.title} accent={copy.accent} subtitle={copy.subtitle} />

        <div className="mb-8 flex justify-center">
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
              className={`rounded-full px-5 py-2.5 text-sm font-black transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 ${
                currency === "cop" ? "bg-brand text-white shadow-lg shadow-brand/20" : "text-slate-500 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
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
              className={`rounded-full px-5 py-2.5 text-sm font-black transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 ${
                currency === "usd" ? "bg-brand text-white shadow-lg shadow-brand/20" : "text-slate-500 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
              }`}
            >
              {copy.toggleUsd}
            </button>
          </div>
        </div>

        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 -mx-5 px-5 sm:mx-0 sm:px-0 lg:grid lg:grid-cols-3 lg:gap-5 xl:grid-cols-5 lg:overflow-visible lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {copy.plans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 60} className="min-w-[88vw] snap-center sm:min-w-[340px] lg:min-w-0 shrink-0 lg:shrink">
              <article
                className={`relative flex h-full min-h-[420px] flex-col rounded-3xl border p-6 transition hover:-translate-y-1 ${
                  plan.highlighted
                    ? "border-brand bg-slate-950 text-white shadow-2xl shadow-brand/20 dark:border-indigo-300 dark:bg-white dark:text-slate-950"
                    : "border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-slate-950"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute right-5 top-5 rounded-full bg-brand px-3 py-1 text-xs font-black text-white dark:bg-slate-950 max-w-[42%] truncate">
                    {copy.popular}
                  </span>
                )}
                <h3 className="pr-24 text-xl font-black leading-tight">{plan.name}</h3>
                <p className={`mt-3 min-h-12 text-sm leading-6 ${plan.highlighted ? "text-slate-300 dark:text-slate-600" : "text-slate-500 dark:text-slate-400"}`}>
                  {plan.description}
                </p>
                <div className="mt-6 flex items-baseline gap-2">
                  <b className="text-4xl font-black">{plan.price[currency]}</b>
                  {!["A medida", "Custom"].includes(plan.price[currency]) && (
                    <span className={`text-sm font-bold ${plan.highlighted ? "text-slate-300 dark:text-slate-500" : "text-slate-500 dark:text-slate-400"}`}>
                      {copy.monthly}
                    </span>
                  )}
                </div>
                <ul className="mt-7 grid gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2 text-sm font-bold leading-6">
                      <Check size={17} className={plan.highlighted ? "mt-1 shrink-0 text-emerald-300 dark:text-emerald-600" : "mt-1 shrink-0 text-emerald-500"} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  className={`mt-auto flex min-h-12 items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-black transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 ${plan.highlighted ? "bg-white text-brand hover:bg-indigo-50 dark:bg-slate-950 dark:text-white" : "border border-slate-200 text-slate-800 hover:border-brand hover:text-brand dark:border-white/10 dark:text-white"}`}
                  href={`#cta`}
                  data-plan={plan.name}
                  aria-label={`${plan.cta} — ${plan.name}`}
                >
                  {plan.cta}
                  {plan.highlighted && <ArrowRight size={17} aria-hidden="true" />}
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-8 flex max-w-2xl items-center justify-center gap-2 text-center text-sm font-bold text-slate-500 dark:text-slate-400">
          <ShieldCheck size={17} className="text-emerald-500" />
          {copy.wompi}
        </p>
      </div>
    </section>
  );
}
