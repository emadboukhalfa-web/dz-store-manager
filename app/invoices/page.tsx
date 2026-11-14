import Link from "next/link";
import { ArrowLeft, CreditCard, Download, Search } from "lucide-react";
import { Sidebar } from "@/components/sidebar";
import { mockInvoices } from "@/data/mock-data";

export default function InvoicesPage() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <div className="mx-auto flex max-w-[1600px] gap-6 p-4 lg:p-6">
        <Sidebar />

        <main className="flex-1 overflow-hidden rounded-3xl bg-white shadow-soft">
          <header className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
            <div>
              <p className="text-sm text-slate-500">Factures</p>
              <h1 className="text-2xl font-bold text-slate-900">Historique des factures</h1>
            </div>
            <div className="flex items-center gap-3">
              <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
                <Download size={16} />
                PDF
              </button>
              <button className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-4 py-2 text-sm font-medium text-white">
                <CreditCard size={16} />
                Nouvelle facture
              </button>
            </div>
          </header>

          <div className="space-y-6 p-6">
            <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-500">
                <Search size={16} />
                <input className="w-72 border-0 bg-transparent outline-none" placeholder="Rechercher facture..." />
              </div>
              <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-brand-600">
                <ArrowLeft size={16} />
                Retour
              </Link>
            </div>

            <div className="space-y-3">
              {mockInvoices.map((invoice) => (
                <div key={invoice.id} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div>
                    <div className="font-bold text-slate-900">{invoice.id}</div>
                    <div className="text-sm text-slate-500">{invoice.customer}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-slate-900">{invoice.total.toLocaleString("fr-DZ")} DZD</div>
                    <div className="text-sm text-slate-500">{invoice.date}</div>
                  </div>
                  <span className={`rounded-full px-2 py-1 text-xs font-medium ${
                    invoice.status === "Payée"
                      ? "bg-success-100 text-success-600"
                      : invoice.status === "En attente"
                        ? "bg-warning-100 text-warning-600"
                        : "bg-danger-100 text-danger-600"
                  }`}>
                    {invoice.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
