import { content, type Locale } from "../data/content";

export function TrustLogos({ locale }: { locale: Locale }) {
  const copy = content[locale].trust;

  return (
    <section className="border-y border-slate-200 bg-slate-50 py-10 dark:border-white/10 dark:bg-white/[0.03]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-black uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">
          {copy.eyebrow}
        </p>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {copy.logos.map((logo) => (
            <div
              key={logo}
              className="flex min-h-16 items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 text-sm font-black text-slate-400 transition hover:-translate-y-1 hover:text-slate-700 hover:shadow-lg dark:border-white/10 dark:bg-slate-950/50 dark:text-slate-500 dark:hover:text-white"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
