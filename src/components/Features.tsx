import { ArrowUpRight } from "lucide-react";
import { content, iconMap, type Locale } from "../data/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Features({ locale }: { locale: Locale }) {
  const copy = content[locale].features;

  return (
    <section id="features" className="border-y border-slate-200 bg-slate-50 py-24 md:py-28 dark:border-white/10 dark:bg-white/[0.03]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={copy.eyebrow} title={copy.title} accent={copy.accent} subtitle={copy.subtitle} />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {copy.items.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <Reveal key={item.title} delay={index * 60}>
                <article className="feature-card group h-full">
                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-white text-brand shadow-sm ring-1 ring-slate-200 transition group-hover:bg-brand group-hover:text-white dark:bg-slate-950 dark:ring-white/10">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-6 text-xl font-black text-slate-950 dark:text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.text}</p>
                  <a className="mt-5 inline-flex items-center gap-2 text-sm font-black text-brand dark:text-indigo-200" href="#cta">
                    {locale === "es" ? "Saber mas" : "Learn more"}
                    <ArrowUpRight size={16} />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
