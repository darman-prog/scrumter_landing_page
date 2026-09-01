import { ArrowRight, ChevronDown, Globe2, Menu, Moon, Sun, X } from "lucide-react";
import type { Locale, Theme } from "../data/content";

type HeaderProps = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isScrolled: boolean;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  labels: {
    features: string;
    how: string;
    pricing: string;
    resources: string;
    signIn: string;
    cta: string;
    language: string;
    theme: string;
    openMenu: string;
    closeMenu: string;
  };
};

const navLinks = [
  ["#features", "features"],
  ["#how", "how"],
  ["#pricing", "pricing"],
  ["#faq", "resources"],
] as const;

export function Header({
  locale,
  setLocale,
  theme,
  setTheme,
  isScrolled,
  menuOpen,
  setMenuOpen,
  labels,
}: HeaderProps) {
  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <>
      <header
        className={`sticky top-0 z-40 border-b transition-all duration-300 ${
          isScrolled
            ? "border-slate-200/80 bg-white/86 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/82"
            : "border-transparent bg-white/74 backdrop-blur-xl dark:bg-slate-950/64"
        }`}
      >
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
          <a href="#main" className="group flex items-center gap-3 font-black text-slate-950 dark:text-white">
            <img className="h-9 w-9 rounded-xl object-contain" src="/scrumter-logo.png" alt="" />
            <span className="text-xl tracking-normal">Scrumter</span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map(([href, key]) => (
              <a
                key={href}
                href={href}
                className="text-sm font-semibold text-slate-600 transition hover:text-brand dark:text-slate-300 dark:hover:text-white"
              >
                {labels[key]}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitch locale={locale} setLocale={setLocale} label={labels.language} />
            <button
              type="button"
              className="icon-button"
              onClick={() => setTheme(nextTheme)}
              aria-label={labels.theme}
              aria-pressed={theme === "dark"}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a className="px-2 text-sm font-bold text-slate-700 hover:text-brand dark:text-slate-200" href="#cta">
              {labels.signIn}
            </a>
            <a className="btn-primary" href="#cta">
              {labels.cta}
              <ArrowRight size={18} />
            </a>
          </div>

          <button
            type="button"
            className="icon-button lg:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label={labels.openMenu}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <Menu size={21} />
          </button>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-50 bg-slate-950/45 backdrop-blur-sm transition lg:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      <aside
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        className={`fixed right-0 top-0 z-50 flex h-dvh w-[min(360px,88vw)] flex-col border-l border-slate-200 bg-white p-5 shadow-2xl transition-transform duration-300 lg:hidden dark:border-white/10 dark:bg-slate-950 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <a href="#main" className="flex items-center gap-3 font-black text-slate-950 dark:text-white">
            <img className="h-9 w-9 rounded-xl object-contain" src="/scrumter-logo.png" alt="" />
            Scrumter
          </a>
          <button type="button" className="icon-button" onClick={() => setMenuOpen(false)} aria-label={labels.closeMenu}>
            <X size={20} />
          </button>
        </div>

        <div className="mt-8 grid gap-2">
          {navLinks.map(([href, key]) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="rounded-2xl px-4 py-3 font-bold text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/8"
            >
              {labels[key]}
            </a>
          ))}
        </div>

        <div className="mt-7 rounded-3xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5">
          <div className="flex items-center justify-between gap-3">
            <span className="flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-slate-300">
              <Globe2 size={17} />
              {labels.language}
            </span>
            <LanguageSwitch locale={locale} setLocale={setLocale} label={labels.language} compact />
          </div>
          <div className="mt-4 flex items-center justify-between gap-3">
            <span className="text-sm font-bold text-slate-600 dark:text-slate-300">{labels.theme}</span>
            <button
              type="button"
              className="theme-toggle"
              onClick={() => setTheme(nextTheme)}
              aria-pressed={theme === "dark"}
              aria-label={labels.theme}
            >
              <span className={theme === "dark" ? "translate-x-7" : "translate-x-0"}>
                {theme === "dark" ? <Moon size={14} /> : <Sun size={14} />}
              </span>
            </button>
          </div>
        </div>

        <div className="mt-auto grid gap-3 pt-6">
          <a className="btn-primary justify-center" href="#cta" onClick={() => setMenuOpen(false)}>
            {labels.cta}
            <ArrowRight size={18} />
          </a>
          <a className="text-center text-sm font-bold text-slate-600 dark:text-slate-300" href="#cta">
            {labels.signIn}
          </a>
        </div>
      </aside>
    </>
  );
}

function LanguageSwitch({
  locale,
  setLocale,
  label,
  compact = false,
}: {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  label: string;
  compact?: boolean;
}) {
  return (
    <div className={`flex items-center rounded-full border border-slate-200 bg-slate-100 p-1 dark:border-white/10 dark:bg-white/8 ${compact ? "" : "gap-1"}`}>
      {(["es", "en"] as Locale[]).map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLocale(option)}
          aria-label={`${label}: ${option.toUpperCase()}`}
          className={`flex min-h-9 items-center gap-1.5 rounded-full px-3 text-xs font-black transition ${
            locale === option
              ? "bg-white text-brand shadow-sm dark:bg-slate-900 dark:text-white"
              : "text-slate-500 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
          }`}
        >
          <span>{option === "es" ? "ES" : "EN"}</span>
          {!compact && <ChevronDown size={13} className="opacity-55" />}
        </button>
      ))}
    </div>
  );
}
