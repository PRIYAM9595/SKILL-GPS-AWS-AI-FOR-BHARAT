import { CheckCircle2, Shield, Bell, Palette, User } from "lucide-react";

const settingCards = [
  {
    icon: User,
    title: "Profile Preferences",
    description: "Manage your display details and professional identity settings.",
    status: "Configured"
  },
  {
    icon: Bell,
    title: "Notification Rules",
    description: "Choose which planner and learning alerts should reach you.",
    status: "Active"
  },
  {
    icon: Shield,
    title: "Security Controls",
    description: "Session safety, account protection, and sign-in preferences.",
    status: "Healthy"
  },
  {
    icon: Palette,
    title: "Workspace Appearance",
    description: "Visual preferences for dashboard readability and focus.",
    status: "Default"
  }
];

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white p-6 md:p-10 space-y-8">
      <div>
        <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Workspace</p>
        <h1 className="text-3xl font-bold mt-1">Settings</h1>
        <p className="text-slate-400 mt-2">Tune your account and platform behavior for a consistent workflow.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {settingCards.map((card) => {
          const Icon = card.icon;
          return (
            <div key={card.title} className="rounded-2xl border border-slate-800 bg-slate-950/40 p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-cyan-300" />
                </div>
                <span className="text-xs px-2 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300">
                  {card.status}
                </span>
              </div>
              <h2 className="text-lg font-semibold mt-4">{card.title}</h2>
              <p className="text-sm text-slate-400 mt-2">{card.description}</p>
            </div>
          );
        })}
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-5 flex items-center gap-3 text-slate-300">
        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
        Settings module is connected and ready for additional controls.
      </div>
    </div>
  );
}
