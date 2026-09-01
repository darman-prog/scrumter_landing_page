import { ArrowUp } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { CTA } from "./components/CTA";
import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Pricing } from "./components/Pricing";
import { ScaleSection } from "./components/ScaleSection";
import { Testimonials } from "./components/Testimonials";
import { TrustLogos } from "./components/TrustLogos";
import { content, type Currency, type Locale, type Theme } from "./data/content";

function getInitialLocale(): Locale {
  const stored = localStorage.getItem("scrumter-lang");
  return stored === "en" || stored === "es" ? stored : "es";
}

function getInitialTheme(): Theme {
  const stored = localStorage.getItem("scrumter-theme");
  if (stored === "dark" || stored === "light") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [locale, setLocale] = useState<Locale>(getInitialLocale);
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [currency, setCurrency] = useState<Currency>("cop");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollState, setScrollState] = useState({ scrolled: false, progress: 0, showTop: false });
  const labels = useMemo(() => content[locale].nav, [locale]);

  useEffect(() => {
    document.documentElement.lang = locale;
    localStorage.setItem("scrumter-lang", locale);
  }, [locale]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("scrumter-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", menuOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [menuOpen]);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      setScrollState({
        scrolled: window.scrollY > 12,
        progress,
        showTop: window.scrollY > 620,
      });
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const scrollToTop = () => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-slate-950 antialiased dark:bg-slate-950 dark:text-white">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-gradient-to-r from-brand via-indigo-400 to-teal-400" style={{ transform: `scaleX(${scrollState.progress})` }} />

      <Header
        locale={locale}
        setLocale={setLocale}
        theme={theme}
        setTheme={setTheme}
        isScrolled={scrollState.scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        labels={labels}
      />
      <Hero locale={locale} />
      <TrustLogos locale={locale} />
      <HowItWorks locale={locale} />
      <Features locale={locale} />
      <ScaleSection locale={locale} />
      <Testimonials locale={locale} />
      <Pricing locale={locale} currency={currency} setCurrency={setCurrency} />
      <FAQ locale={locale} />
      <CTA locale={locale} />
      <Footer locale={locale} />

      <button
        type="button"
        className={`fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-brand text-white shadow-xl shadow-brand/30 transition ${
          scrollState.showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
        onClick={scrollToTop}
        aria-label={labels.toTop}
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
}
