import { Bot, CheckCircle2, Clock3, KanbanSquare, MessageSquare, MoreHorizontal, Search, Sparkles } from "lucide-react";

const backlog = [
  { label: "Input", title: "Portal de pagos Wompi", tag: "Ready", color: "bg-brand" },
  { label: "Story", title: "Como PO quiero priorizar creditos", tag: "Sprint", color: "bg-emerald-500" },
  { label: "Task", title: "Validar limites diarios de IA", tag: "Review", color: "bg-amber-500" },
];

const board = [
  { title: "Backlog", count: 18, cards: ["Historias INVEST", "Criterios de aceptacion"] },
  { title: "Sprint", count: 9, cards: ["Checkout COP", "Burndown diario"] },
  { title: "Done", count: 24, cards: ["Roles RBAC", "Export PDF"] },
];

export function ProductMockup() {
  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <div className="absolute -left-4 top-8 hidden rounded-2xl border border-white/60 bg-white/90 px-4 py-3 shadow-xl backdrop-blur md:block dark:border-white/10 dark:bg-slate-900/90">
        <div className="flex items-center gap-2 text-xs font-black text-slate-500 dark:text-slate-300">
          <Sparkles size={15} className="text-brand" />
          AI proposal
        </div>
        <p className="mt-1 text-sm font-black text-slate-950 dark:text-white">12 stories generated</p>
      </div>

      <div className="absolute -right-3 bottom-10 hidden rounded-2xl border border-white/60 bg-white/90 px-4 py-3 shadow-xl backdrop-blur md:block dark:border-white/10 dark:bg-slate-900/90">
        <div className="text-xs font-bold text-slate-500 dark:text-slate-300">Sprint health</div>
        <div className="mt-2 flex items-center gap-2">
          <span className="h-2.5 w-24 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
            <span className="block h-full w-[78%] rounded-full bg-emerald-500" />
          </span>
          <b className="text-sm text-emerald-600 dark:text-emerald-300">78%</b>
        </div>
      </div>

      <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-950/14 dark:border-white/10 dark:bg-slate-950">
        <div className="grid min-h-[560px] grid-cols-1 lg:grid-cols-[170px_1fr]">
          <aside className="hidden border-r border-slate-200 bg-slate-50 p-4 lg:block dark:border-white/10 dark:bg-white/5">
            <div className="mb-6 flex items-center gap-2 font-black text-slate-950 dark:text-white">
              <img className="h-7 w-7 rounded-lg" src="/scrumter-logo.png" alt="" />
              Scrumter
            </div>
            {["Dashboard", "Inputs", "Backlog", "Sprints", "Team"].map((item, index) => (
              <div
                key={item}
                className={`mb-1 flex items-center gap-2 rounded-xl px-3 py-2.5 text-xs font-bold ${
                  index === 2 ? "bg-brand text-white shadow-lg shadow-brand/25" : "text-slate-500 dark:text-slate-300"
                }`}
              >
                {index === 2 ? <KanbanSquare size={15} /> : <span className="h-2 w-2 rounded-full bg-current opacity-50" />}
                {item}
              </div>
            ))}
            <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-3 dark:border-white/10 dark:bg-slate-950">
              <Bot size={18} className="text-brand" />
              <p className="mt-2 text-xs font-black text-slate-900 dark:text-white">AI credits</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">1,184 available</p>
            </div>
          </aside>

          <main className="min-w-0 p-4 sm:p-5">
            <div className="flex flex-wrap items-center gap-3 border-b border-slate-200 pb-4 dark:border-white/10">
              <div className="mr-auto">
                <p className="text-xs font-black uppercase text-brand">Workspace</p>
                <h3 className="text-lg font-black text-slate-950 dark:text-white">Sprint planning</h3>
              </div>
              <div className="hidden min-w-44 items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-500 sm:flex dark:border-white/10 dark:bg-white/5">
                <Search size={14} />
                Search backlog
              </div>
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-amber-400 to-rose-500 text-xs font-black text-white">
                SM
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {[
                ["Requirements", "84", "+18%"],
                ["Sprint points", "126", "42 done"],
                ["AI accuracy", "91%", "+7%"],
              ].map(([label, value, delta]) => (
                <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5">
                  <p className="text-xs font-bold text-slate-500 dark:text-slate-400">{label}</p>
                  <div className="mt-2 flex items-end justify-between gap-2">
                    <b className="text-2xl font-black text-slate-950 dark:text-white">{value}</b>
                    <span className="text-xs font-black text-emerald-600 dark:text-emerald-300">{delta}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 grid gap-4 xl:grid-cols-[1fr_0.9fr]">
              <section className="min-w-0 rounded-3xl border border-slate-200 p-4 dark:border-white/10">
                <div className="mb-4 flex items-center justify-between">
                  <b className="text-sm text-slate-950 dark:text-white">Generated backlog</b>
                  <MoreHorizontal size={18} className="text-slate-400" />
                </div>
                <div className="grid gap-3">
                  {backlog.map((item) => (
                    <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-3 dark:border-white/10 dark:bg-white/5">
                      <div className="flex items-start gap-3">
                        <span className={`mt-1 h-3 w-3 rounded-full ${item.color}`} />
                        <div className="min-w-0 flex-1">
                          <p className="text-[11px] font-black uppercase text-slate-400">{item.label}</p>
                          <p className="truncate text-sm font-black text-slate-950 dark:text-white">{item.title}</p>
                        </div>
                        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-black text-slate-600 dark:bg-white/10 dark:text-slate-200">
                          {item.tag}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="min-w-0 rounded-3xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5">
                <div className="mb-4 flex items-center justify-between">
                  <b className="text-sm text-slate-950 dark:text-white">AI assistant</b>
                  <span className="rounded-full bg-brand/10 px-2.5 py-1 text-[11px] font-black text-brand dark:text-indigo-200">
                    Live
                  </span>
                </div>
                <div className="min-w-0 rounded-2xl bg-slate-950 p-4 text-white dark:bg-black/35">
                  <p className="text-xs font-bold text-indigo-200">Prompt builder</p>
                  <p className="mt-2 text-sm font-semibold leading-6">
                    Generate INVEST stories for payment onboarding and split by sprint capacity.
                  </p>
                </div>
                <div className="mt-3 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-3 dark:border-emerald-400/20 dark:bg-emerald-400/10">
                  <CheckCircle2 size={18} className="mt-0.5 text-emerald-600 dark:text-emerald-300" />
                  <p className="text-xs font-bold leading-5 text-emerald-800 dark:text-emerald-100">
                    Proposal parsed as JSON. 9 items ready to apply.
                  </p>
                </div>
              </section>
            </div>

            <section className="mt-4 grid min-w-0 gap-3 md:grid-cols-3">
              {board.map((column) => (
                <div key={column.title} className="min-w-0 rounded-2xl border border-slate-200 bg-slate-50 p-3 dark:border-white/10 dark:bg-white/5">
                  <div className="flex items-center justify-between">
                    <b className="text-xs text-slate-700 dark:text-slate-200">{column.title}</b>
                    <span className="text-xs font-black text-slate-400">{column.count}</span>
                  </div>
                  <div className="mt-3 grid gap-2">
                    {column.cards.map((card) => (
                      <div key={card} className="rounded-xl bg-white px-3 py-2 text-xs font-bold text-slate-600 shadow-sm dark:bg-slate-950 dark:text-slate-300">
                        {card}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </section>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-bold text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <Clock3 size={14} /> Updated 3 min ago
              </span>
              <span className="flex items-center gap-1.5">
                <MessageSquare size={14} /> 12 comments
              </span>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
