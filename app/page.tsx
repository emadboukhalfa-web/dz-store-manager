import { ArrowUpRight, CreditCard, Package, ShoppingCart, Store, Users } from "lucide-react";
import { DashboardCard } from "@/components/dashboard-card";
import { InvoiceList } from "@/components/invoice-list";
import { ProductTable } from "@/components/product-table";
import { QuickActions } from "@/components/quick-actions";
import { Sidebar } from "@/components/sidebar";
import { mockInvoices, mockProducts, mockStats } from "@/data/mock-data";
import { formatCurrency } from "@/lib/format";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <div className="mx-auto flex max-w-[1600px] gap-6 p-4 lg:p-6">
        <Sidebar />

        <main className="flex-1 overflow-hidden rounded-3xl bg-white shadow-soft">
          <header className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
            <div>
              <p className="text-sm text-slate-500">Bienvenue</p>
              <h1 className="text-2xl font-bold text-slate-900">Tableau de bord</h1>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600">
                14 Novembre 2026
              </div>
              <button className="rounded-xl bg-brand-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-brand-700">
                Nouvelle vente
              </button>
            </div>
          </header>

          <div className="space-y-6 p-6">
            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {mockStats.map((item) => (
                <DashboardCard key={item.label} {...item} />
              ))}
            </section>

            <section className="grid gap-6 xl:grid-cols-[1.6fr_0.9fr]">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">Ventes du mois</p>
                    <h2 className="text-xl font-bold text-slate-900">{formatCurrency(845000)}</h2>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-success-100 px-3 py-1 text-sm font-medium text-success-600">
                    <ArrowUpRight size={16} />
                    +12.4%
                  </div>
                </div>

                <div className="flex h-40 items-end gap-3">
                  {[35, 55, 45, 70, 84, 60, 92, 75, 88, 110, 96, 130].map((value, index) => (
                    <div key={index} className="flex-1">
                      <div
                        className="w-full rounded-t-2xl bg-gradient-to-t from-brand-600 to-brand-300"
                        style={{ height: `${value}%` }}
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-4 grid grid-cols-12 gap-2 text-center text-[10px] text-slate-500">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <span key={i} className="col-span-1">{i + 1}</span>
                  ))}
                </div>
              </div>

              <QuickActions />
            </section>

            <section className="grid gap-6 xl:grid-cols-[1.7fr_1fr]">
              <ProductTable products={mockProducts} />
              <div className="space-y-6">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-lg font-bold text-slate-900">Résumé de caisse</h3>
                    <CreditCard className="text-brand-600" size={18} />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between rounded-xl bg-white p-3">
                      <span className="text-slate-500">Montant encaissé</span>
                      <span className="font-bold text-slate-900">{formatCurrency(392000)}</span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-white p-3">
                      <span className="text-slate-500">Dépenses</span>
                      <span className="font-bold text-slate-900">{formatCurrency(82000)}</span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-white p-3">
                      <span className="text-slate-500">Stock critique</span>
                      <span className="font-bold text-warning-600">12 produits</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-lg font-bold text-slate-900">Activité rapide</h3>
                    <Store className="text-brand-600" size={18} />
                  </div>
                  <div className="space-y-3">
                    {[
                      { label: "Livraison fournisseur", value: "12/11", accent: "bg-success-100 text-success-600" },
                      { label: "Retour client", value: "09/11", accent: "bg-warning-100 text-warning-600" },
                      { label: "Inventaire", value: "Aujourd’hui", accent: "bg-brand-100 text-brand-600" }
                    ].map((entry) => (
                      <div key={entry.label} className="flex items-center justify-between rounded-xl bg-white p-3">
                        <span className="text-slate-600">{entry.label}</span>
                        <span className={`rounded-full px-2 py-1 text-xs font-medium ${entry.accent}`}>{entry.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <InvoiceList invoices={mockInvoices} />
          </div>
        </main>
      </div>
    </div>
  );
}
