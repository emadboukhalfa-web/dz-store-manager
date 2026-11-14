import { CreditCard, PackagePlus, PlusCircle, ReceiptText, Truck } from "lucide-react";

export function QuickActions() {
  const actions = [
    { label: "Nouvelle vente", icon: CreditCard },
    { label: "Ajouter produit", icon: PackagePlus },
    { label: "Créer facture", icon: ReceiptText },
    { label: "Livraison", icon: Truck }
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-bold text-slate-900">Actions rapides</h3>
        <PlusCircle className="text-brand-600" size={18} />
      </div>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
        {actions.map(({ label, icon: Icon }) => (
          <button
            key={label}
            className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-3 text-left transition hover:border-brand-200 hover:bg-brand-50"
          >
            <div className="rounded-xl bg-brand-100 p-2 text-brand-600">
              <Icon size={16} />
            </div>
            <span className="font-medium text-slate-700">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
