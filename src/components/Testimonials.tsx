import { Star } from "lucide-react";
import { content, type Locale } from "../data/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Testimonials({ locale }: { locale: Locale }) {
  const copy = content[locale].testimonials;

  return (
    <section className="border-y border-slate-200 bg-slate-950 py-24 text-white dark:border-white/10 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <span className="pill mx-auto border-white/10 bg-white/10 text-indigo-100">{copy.eyebrow}</span>
          <h2 className="mt-5 text-balance text-3xl font-black md:text-5xl">
            {copy.title} <span className="text-indigo-200">{copy.accent}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">{copy.subtitle}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {copy.items.map((item, index) => (
            <Reveal key={item.name} delay={index * 80}>
              <article className="h-full rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/10">
                <div className="flex gap-1 text-amber-300" aria-label={locale === "es" ? "5 estrellas" : "5 stars"} aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} size={17} fill="currentColor" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-6">
                  <p className="text-base font-semibold leading-8 text-slate-100">“{item.quote}”</p>
                  <footer className="mt-8 flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-sm font-black text-brand" aria-hidden="true">
                      {item.initials}
                    </span>
                    <cite className="not-italic">
                      <b className="block text-sm not-italic">{item.name}</b>
                      <span className="text-xs font-semibold text-slate-400">{item.role}</span>
                    </cite>
                  </footer>
                </blockquote>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
