import { ArrowUpRight, DollarSign, PackageCheck, TrendingUp, Wallet } from "lucide-react";

export function DashboardCard({
  label,
  value,
  change,
  trend,
  icon
}: {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: "revenue" | "products" | "orders" | "profit";
}) {
  const iconMap = {
    revenue: DollarSign,
    products: PackageCheck,
    orders: TrendingUp,
    profit: Wallet
  };

  const Icon = iconMap[icon];

  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm text-slate-500">{label}</span>
        <div className="rounded-xl bg-white p-2 text-brand-600">
          <Icon size={18} />
        </div>
      </div>

      <div className="mb-2 text-2xl font-bold text-slate-900">{value}</div>

      <div
        className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium ${
          trend === "up" ? "bg-success-100 text-success-600" : "bg-danger-100 text-danger-600"
        }`}
      >
        <ArrowUpRight size={12} />
        {change}
      </div>
    </div>
  );
}
