import { LifeBuoy, Mail, MessageSquare, BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const helpItems = [
  {
    icon: BookOpen,
    title: "Using Skill Analysis",
    desc: "Understand scoring, weakness detection, and action recommendations."
  },
  {
    icon: MessageSquare,
    title: "Planner Troubleshooting",
    desc: "Resolve scheduling, day mapping, and generated plan inconsistencies."
  },
  {
    icon: Mail,
    title: "Account & Access",
    desc: "Get help with login, session expiry, and resume upload workflow."
  }
];

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white p-6 md:p-10 space-y-8">
      <div>
        <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Support</p>
        <h1 className="text-3xl font-bold mt-1">Help Center</h1>
        <p className="text-slate-400 mt-2">Quick guidance for planning, analysis, and account workflow issues.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {helpItems.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950/40 p-5">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center">
                <Icon className="w-5 h-5 text-cyan-300" />
              </div>
              <h2 className="text-lg font-semibold mt-4">{item.title}</h2>
              <p className="text-sm text-slate-400 mt-2">{item.desc}</p>
            </div>
          );
        })}
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-3 text-slate-300">
          <LifeBuoy className="w-5 h-5 text-cyan-300" />
          Need a guided path? Continue from your planner to keep momentum.
        </div>
        <Link
          to="/app/weekly-planner"
          className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-white hover:border-slate-600"
        >
          Open Weekly Planner
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
