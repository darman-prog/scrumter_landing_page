import {
  Activity,
  ArrowRight,
  Bell,
  Bot,
  CalendarDays,
  ClipboardList,
  CreditCard,
  FileInput,
  FolderKanban,
  KanbanSquare,
  LayoutDashboard,
  ListChecks,
  ListTodo,
  LogOut,
  MessageSquare,
  Plus,
  Sparkles,
  User,
} from "lucide-react";

const sideSections = [
  {
    label: null as string | null,
    items: [
      { label: "Dashboard", icon: LayoutDashboard, active: true },
      { label: "Proyectos", icon: FolderKanban, active: false },
      { label: "Mis Tareas", icon: ListChecks, active: false },
    ],
  },
  {
    label: "Módulos",
    items: [
      { label: "Requerimientos", icon: ClipboardList, active: false },
      { label: "Scrum Board", icon: KanbanSquare, active: false },
      { label: "Sprints", icon: CalendarDays, active: false },
      { label: "Tablero Tareas", icon: ListTodo, active: false },
      { label: "Insumos", icon: FileInput, active: false },
      { label: "Calendario", icon: CalendarDays, active: false },
    ],
  },
  {
    label: "Inteligencia",
    items: [
      { label: "Asistente IA", icon: Bot, active: false },
      { label: "Planes", icon: CreditCard, active: false },
    ],
  },
];

const stats = [
  { label: "Mis Proyectos", value: "0", icon: FolderKanban, tone: "brand" },
  { label: "Tareas Pendientes", value: "0", icon: ListChecks, tone: "amber" },
  { label: "Sprints Activos", value: "0", icon: Activity, tone: "emerald" },
] as const;

const modules = [
  { label: "Sprints", icon: CalendarDays, tone: "brand" },
  { label: "Tablero Tareas", icon: KanbanSquare, tone: "amber" },
  { label: "Requerimientos", icon: ClipboardList, tone: "violet" },
  { label: "Insumos", icon: FileInput, tone: "orange" },
] as const;

const toneClasses = {
  brand: "bg-brand/10 text-brand dark:bg-indigo-400/12 dark:text-indigo-200",
  amber: "bg-amber-100 text-amber-700 dark:bg-amber-400/12 dark:text-amber-200",
  emerald: "bg-emerald-100 text-emerald-700 dark:bg-emerald-400/12 dark:text-emerald-200",
  violet: "bg-violet-100 text-violet-700 dark:bg-violet-400/12 dark:text-violet-200",
  orange: "bg-orange-100 text-orange-700 dark:bg-orange-400/12 dark:text-orange-200",
} as const;

export function ProductMockup() {
  return (
    <div
      className="relative mx-auto w-full max-w-full overflow-hidden rounded-[18px] border border-slate-200 bg-white shadow-[0_34px_80px_rgba(2,6,23,0.18)] dark:border-white/[0.08] dark:bg-[#0c1a2e]"
      role="img"
      aria-label="Vista previa de Scrumter — dashboard con módulos Sprints, Tablero Tareas, Requerimientos e Insumos"
    >
      <div className="grid min-h-[480px] md:grid-cols-[220px_1fr]">
        {/* Sidebar */}
        <aside className="hidden min-w-0 border-r border-slate-200 bg-slate-50 p-3 md:block dark:border-white/[0.06] dark:bg-[#0f1f33]">
          <div className="mb-5 flex items-center gap-2 px-2 font-black text-slate-950 dark:text-white">
            <img className="h-6 w-6 rounded-lg" src="/scrumter-logo.png" alt="Scrumter" width={24} height={24} loading="lazy" decoding="async" />
            Scrumter
          </div>

          {sideSections.map((section) => (
            <div key={section.label ?? "principal"} className="mb-4">
              {section.label && (
                <p className="mb-1 px-2 text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500" aria-hidden="true">
                  {section.label}
                </p>
              )}
              <nav className="grid gap-0.5" aria-label={section.label ?? "Principal"}>
                {section.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <span
                      key={item.label}
                      className={`flex min-w-0 items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13px] font-bold ${
                        item.active ? "bg-brand text-white shadow-sm" : "text-slate-600 hover:bg-white dark:text-slate-300 dark:hover:bg-white/5"
                      }`}
                    >
                      <Icon size={15} className="shrink-0" aria-hidden="true" />
                      <span className="truncate">{item.label}</span>
                    </span>
                  );
                })}
              </nav>
            </div>
          ))}

          <div className="mt-5 grid gap-2">
            <span className="flex items-center justify-center gap-2 rounded-xl bg-brand py-2.5 text-[13px] font-black text-white">
              <Plus size={15} aria-hidden="true" />
              Nuevo proyecto
            </span>
            <span className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13px] font-bold text-slate-500 dark:text-slate-400">
              <User size={15} aria-hidden="true" />
              Perfil
            </span>
            <span className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13px] font-bold text-slate-500 dark:text-slate-400">
              <LogOut size={15} aria-hidden="true" />
              Cerrar sesión
            </span>
          </div>
        </aside>

        {/* Main */}
        <main className="min-w-0 bg-white p-4 sm:p-5 dark:bg-[#0c1a2e]">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-4 dark:border-white/[0.06]">
            <div className="mr-auto">
              <h3 className="text-lg font-black text-slate-950 dark:text-white">Dashboard</h3>
            </div>
            <span className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-300" aria-hidden="true">
              <Bell size={17} />
            </span>
            <span className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-300" aria-hidden="true">
              <MessageSquare size={17} />
            </span>
            <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-amber-400 to-rose-500 text-xs font-black text-white" aria-hidden="true">
              SM
            </span>
          </div>

          {/* Bienvenida */}
          <div className="mt-4 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:flex-row sm:items-center sm:justify-between dark:border-white/[0.06] dark:bg-[#122a4a]">
            <div>
              <h4 className="text-lg font-black text-slate-950 dark:text-white">Bienvenido</h4>
              <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-300">
                Crea tu primer proyecto y empieza a planificar con IA.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                <Sparkles size={15} className="text-brand" aria-hidden="true" />
                Crear con IA
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-black text-white">
                <Plus size={15} aria-hidden="true" />
                Nuevo proyecto
              </span>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-3">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="min-w-0 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/[0.06] dark:bg-white/[0.04]">
                  <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${toneClasses[stat.tone]}`} aria-hidden="true">
                    <Icon size={17} />
                  </div>
                  <b className="mt-4 block text-3xl font-black text-slate-950 dark:text-white">{stat.value}</b>
                  <span className="mt-1 block truncate text-xs font-bold leading-tight text-slate-500 dark:text-slate-400">{stat.label}</span>
                </div>
              );
            })}
          </div>

          {/* Módulos */}
          <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {modules.map((mod) => {
              const Icon = mod.icon;
              return (
                <div
                  key={mod.label}
                  className="min-w-0 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center transition hover:-translate-y-0.5 dark:border-white/[0.06] dark:bg-white/[0.03]"
                >
                  <span className={`mx-auto flex h-10 w-10 items-center justify-center rounded-xl ${toneClasses[mod.tone]}`} aria-hidden="true">
                    <Icon size={19} />
                  </span>
                  <span className="mt-3 block truncate px-1 text-xs font-bold leading-tight text-slate-700 dark:text-slate-200">
                    {mod.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Recientes */}
          <div className="mt-4 rounded-2xl border border-dashed border-slate-300 bg-slate-50/50 p-8 text-center dark:border-white/10 dark:bg-white/[0.02]">
            <p className="text-sm font-bold text-slate-600 dark:text-slate-300">Aún no tienes proyectos.</p>
            <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-black text-brand dark:text-indigo-200">
              Crear el primero
              <ArrowRight size={14} aria-hidden="true" />
            </span>
          </div>
        </main>
      </div>
    </div>
  );
}
