import Link from "next/link";
import { Building2, CreditCard, LayoutDashboard, Package, Receipt, ShoppingCart, TrendingUp, Users } from "lucide-react";

const items = [
  { label: "Tableau de bord", href: "/", icon: LayoutDashboard },
  { label: "Produits", href: "/products", icon: Package },
  { label: "POS", href: "/pos", icon: ShoppingCart },
  { label: "Factures", href: "/invoices", icon: Receipt },
  { label: "Clients", href: "/customers", icon: Users },
  { label: "Fournisseurs", href: "/suppliers", icon: Building2 },
  { label: "Rapports", href: "/reports", icon: TrendingUp }
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
        {items.map(({ label, href, icon: Icon }) => (
          <Link
            key={label}
            href={href}
            className="flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
          >
            <Icon size={18} />
            {label}
          </Link>
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
