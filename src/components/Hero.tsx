import { ArrowRight, Check, Play, Sparkles } from "lucide-react";
import { ProductMockup } from "./ProductMockup";
import type { Locale } from "../data/content";
import { content } from "../data/content";

export function Hero({ locale }: { locale: Locale }) {
  const copy = content[locale].hero;

  return (
    <section id="main" className="relative overflow-hidden pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(54,38,206,0.14),transparent_26%),radial-gradient(circle_at_80%_20%,rgba(20,184,166,0.12),transparent_26%),linear-gradient(180deg,#fff,rgba(248,250,252,0.8))] dark:bg-[radial-gradient(circle_at_20%_10%,rgba(99,102,241,0.22),transparent_26%),radial-gradient(circle_at_80%_20%,rgba(20,184,166,0.12),transparent_26%),linear-gradient(180deg,#020617,#0f172a)]" />
      <div className="absolute left-1/2 top-10 -z-10 h-[520px] w-[900px] -translate-x-1/2 rounded-full border border-brand/10 opacity-70" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <span className="pill">
            <Sparkles size={15} />
            {copy.badge}
          </span>
          <h1 className="mt-6 text-balance text-4xl font-black leading-[1.04] tracking-normal text-slate-950 sm:text-6xl lg:text-7xl dark:text-white">
            {copy.title}
          </h1>
          <p className="mt-5 max-w-xl text-xl font-semibold leading-8 text-brand dark:text-indigo-200">{copy.accent}</p>
          <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">{copy.lead}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a className="btn-primary" href="#cta">
              {copy.primary}
              <ArrowRight size={19} />
            </a>
            <a className="btn-secondary" href="#how">
              <Play size={18} />
              {copy.secondary}
            </a>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            {copy.checks.map((check) => (
              <span key={check} className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                <Check size={15} className="text-emerald-500" />
                {check}
              </span>
            ))}
          </div>

          <div className="mt-10 hidden max-w-xl grid-cols-3 gap-3 sm:grid">
            {copy.metrics.map((metric) => (
              <div key={metric.label} className="border-l-2 border-brand/30 pl-4">
                <b className="block text-2xl font-black text-slate-950 dark:text-white">{metric.value}</b>
                <span className="mt-1 block text-xs font-bold leading-5 text-slate-500 dark:text-slate-400">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>

        <ProductMockup />
      </div>
    </section>
  );
}
