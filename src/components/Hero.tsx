import { ArrowRight, Check, ChevronRight, Play } from "lucide-react";
import { ProductMockup } from "./ProductMockup";
import type { Locale } from "../data/content";
import { content } from "../data/content";

export function Hero({ locale }: { locale: Locale }) {
  const copy = content[locale].hero;

  return (
    <section id="main" className="hero-section relative overflow-hidden pb-16 pt-10 md:pb-24 md:pt-16">
      {/* grid + gradients — referencia Nexora */}
      <div className="hero-grid absolute inset-0 -z-20" aria-hidden="true" />
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(54,38,206,0.13),transparent_26%),radial-gradient(circle_at_84%_18%,rgba(20,184,166,0.10),transparent_26%),linear-gradient(180deg,#fff,rgba(248,250,252,0.65))] dark:bg-[radial-gradient(circle_at_18%_12%,rgba(99,102,241,0.20),transparent_26%),radial-gradient(circle_at_84%_18%,rgba(20,184,166,0.10),transparent_26%),linear-gradient(180deg,#020617,#0f172a)]"
        aria-hidden="true"
      />
      {/* orbs & gem — sutiles, como referencia */}
      <div className="hero-orb hero-orb-1" aria-hidden="true" />
      <div className="hero-orb hero-orb-2" aria-hidden="true" />
      <div className="hero-gem" aria-hidden="true" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-6 lg:grid-cols-[1.02fr_1.08fr] lg:gap-8 lg:px-8">
        <div className="min-w-0">
          {/* pill NEW — fiel a referencia con tag */}
          <a href="#cta" className="pill group inline-flex items-center gap-2 !py-1.5 !pr-2 !pl-2.5 text-[0.78rem] !font-semibold hover:border-brand/30">
            <span className="rounded-md bg-brand px-1.5 py-0.5 text-[0.62rem] font-black tracking-[0.06em] text-white">{locale === "es" ? "NUEVO" : "NEW"}</span>
            <span className="font-semibold tracking-tight">{copy.badge}</span>
            <ChevronRight size={14} className="opacity-60 transition group-hover:translate-x-0.5 group-hover:opacity-100" aria-hidden="true" />
          </a>

          <h1 className="mt-5 text-balance text-[2.05rem] font-extrabold leading-[1.06] tracking-[-0.03em] text-slate-950 sm:text-5xl lg:text-[3.45rem] dark:text-white">
            {copy.title} <span className="text-brand dark:text-indigo-300">{copy.accent}</span>
          </h1>

          <p className="mt-4 max-w-[480px] text-base leading-7 text-slate-500 sm:text-[1.04rem] dark:text-slate-300">{copy.lead}</p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3.5">
            <a className="btn-primary group w-full justify-center !gap-3 !px-3 !py-3 text-[0.95rem] sm:w-auto sm:!pl-6 sm:!pr-3" href="#cta">
              <span>{copy.primary}</span>
              <span className="grid h-7 w-7 place-items-center rounded-full bg-white text-brand shadow-sm transition group-hover:translate-x-0.5" aria-hidden="true">
                <ArrowRight size={14} strokeWidth={2.7} />
              </span>
            </a>
            <a className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full px-5 text-sm font-semibold text-slate-600 transition hover:text-brand sm:w-auto dark:text-slate-300 dark:hover:text-white" href="#how">
              <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-brand text-brand dark:border-indigo-300 dark:text-indigo-200" aria-hidden="true">
                <Play size={14} fill="currentColor" className="ml-0.5" />
              </span>
              {copy.secondary}
            </a>
          </div>

          <div className="mt-7 flex flex-wrap gap-4 sm:gap-5">
            {copy.checks.map((check) => (
              <span key={check} className="flex items-center gap-2 text-[0.84rem] font-medium text-slate-600 dark:text-slate-300">
                <span className="grid h-[18px] w-[18px] place-items-center rounded-full bg-brand text-white" aria-hidden="true">
                  <Check size={11} strokeWidth={3} />
                </span>
                {check}
              </span>
            ))}
          </div>

          {/* métricas visibles también en móvil, como referencia bottom row */}
          <div className="mt-9 grid max-w-xl grid-cols-3 gap-4 sm:gap-6">
            {copy.metrics.map((metric) => (
              <div key={metric.label} className="border-l-[3px] border-brand/20 pl-3 sm:pl-4">
                <b className="block text-[1.22rem] font-extrabold tracking-[-0.02em] text-slate-950 sm:text-2xl dark:text-white">{metric.value}</b>
                <span className="mt-1 block text-[11px] font-semibold leading-4 text-slate-500 dark:text-slate-400">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[600px] lg:ml-auto lg:max-w-[640px]">
          {/* perspectiva mockup referencia */}
          <div className="hero-mockup-wrap">
            <ProductMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
