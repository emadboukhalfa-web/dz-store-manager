import { BarChart3, BriefcaseBusiness, PackageSearch, ShoppingBag, Users } from "lucide-react";

const items = [
  { label: "Tableau de bord", href: "#", active: true, icon: BarChart3 },
  { label: "Produits", href: "#", icon: PackageSearch },
  { label: "Ventes", href: "#", icon: ShoppingBag },
  { label: "Clients", href: "#", icon: Users },
  { label: "Fournisseurs", href: "#", icon: BriefcaseBusiness }
];

export function Sidebar() {
  return (
    <aside className="hidden w-72 shrink-0 rounded-3xl bg-slate-900 p-5 text-white lg:block">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-600 font-bold text-white">
          DZ
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Magasin</p>
          <h2 className="text-lg font-bold">Store Manager</h2>
        </div>
      </div>

      <nav className="space-y-2">
        {items.map(({ label, href, active, icon: Icon }) => (
          <a
            key={label}
            href={href}
            className={`flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium transition ${
              active ? "bg-brand-600 text-white" : "text-slate-300 hover:bg-slate-800 hover:text-white"
            }`}
          >
            <Icon size={18} />
            {label}
          </a>
        ))}
      </nav>

      <div className="mt-8 rounded-2xl bg-slate-800 p-4">
        <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Performance</p>
        <div className="mt-3 text-2xl font-bold">89%</div>
        <p className="mt-1 text-sm text-slate-300">Stock global sain</p>
      </div>
    </aside>
  );
}
