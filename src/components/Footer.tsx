import { content, type Locale } from "../data/content";

export function Footer({ locale }: { locale: Locale }) {
  const copy = content[locale].footer;

  return (
    <footer className="border-t border-slate-200 bg-white py-12 dark:border-white/10 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <a href="#main" className="flex items-center gap-3 font-black text-slate-950 dark:text-white">
              <img className="h-10 w-10 rounded-xl object-contain" src="/scrumter-logo.png" alt="" />
              <span className="text-xl">Scrumter</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-600 dark:text-slate-300">{copy.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {copy.columns.map((column) => (
              <div key={column.title}>
                <b className="text-sm text-slate-950 dark:text-white">{column.title}</b>
                <div className="mt-4 grid gap-3">
                  {column.links.map((link) => (
                    <a key={link} className="text-sm font-semibold text-slate-500 transition hover:text-brand dark:text-slate-400 dark:hover:text-white" href="#main">
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm font-semibold text-slate-500 sm:flex-row sm:items-center sm:justify-between dark:border-white/10 dark:text-slate-400">
          <span>{copy.rights}</span>
          <span>{copy.made}</span>
        </div>
      </div>
    </footer>
  );
}
