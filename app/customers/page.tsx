import Link from "next/link";
import { ArrowLeft, Download, Plus, Search, Wallet } from "lucide-react";
import { Sidebar } from "@/components/sidebar";
import { mockCustomers } from "@/data/mock-data";

export default function CustomersPage() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <div className="mx-auto flex max-w-[1600px] gap-6 p-4 lg:p-6">
        <Sidebar />

        <main className="flex-1 overflow-hidden rounded-3xl bg-white shadow-soft">
          <header className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
            <div>
              <p className="text-sm text-slate-500">Clients</p>
              <h1 className="text-2xl font-bold text-slate-900">Gestion des clients</h1>
            </div>
            <div className="flex items-center gap-3">
              <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
                <Download size={16} />
                Exporter
              </button>
              <button className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-4 py-2 text-sm font-medium text-white">
                <Plus size={16} />
                Nouveau client
              </button>
            </div>
          </header>

          <div className="space-y-6 p-6">
            <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-500">
                <Search size={16} />
                <input className="w-72 border-0 bg-transparent outline-none" placeholder="Rechercher client..." />
              </div>
              <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-brand-600">
                <ArrowLeft size={16} />
                Retour au tableau de bord
              </Link>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
                <thead className="bg-slate-50 text-slate-600">
                  <tr>
                    <th className="px-4 py-3 font-medium">ID</th>
                    <th className="px-4 py-3 font-medium">Nom</th>
                    <th className="px-4 py-3 font-medium">Téléphone</th>
                    <th className="px-4 py-3 font-medium">Ville</th>
                    <th className="px-4 py-3 font-medium">Achats</th>
                    <th className="px-4 py-3 font-medium">Dernier achat</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {mockCustomers.map((customer) => (
                    <tr key={customer.id}>
                      <td className="px-4 py-3 font-medium text-slate-900">{customer.id}</td>
                      <td className="px-4 py-3">{customer.name}</td>
                      <td className="px-4 py-3 text-slate-600">{customer.phone}</td>
                      <td className="px-4 py-3 text-slate-600">{customer.city}</td>
                      <td className="px-4 py-3 font-bold text-slate-900">{customer.totalSpent.toLocaleString("fr-DZ")} DZD</td>
                      <td className="px-4 py-3 text-slate-600">{customer.lastPurchase}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
