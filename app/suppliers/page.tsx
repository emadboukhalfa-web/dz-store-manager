import Link from "next/link";
import { ArrowLeft, Download, UserRound } from "lucide-react";
import { Sidebar } from "@/components/sidebar";
import { mockSuppliers } from "@/data/mock-data";

export default function SuppliersPage() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <div className="mx-auto flex max-w-[1600px] gap-6 p-4 lg:p-6">
        <Sidebar />

        <main className="flex-1 overflow-hidden rounded-3xl bg-white shadow-soft">
          <header className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
            <div>
              <p className="text-sm text-slate-500">Fournisseurs</p>
              <h1 className="text-2xl font-bold text-slate-900">Gestion des fournisseurs</h1>
            </div>
            <div className="flex items-center gap-3">
              <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
                <Download size={16} />
                Exporter
              </button>
              <button className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-4 py-2 text-sm font-medium text-white">
                <UserRound size={16} />
                Nouveau fournisseur
              </button>
            </div>
          </header>

          <div className="space-y-6 p-6">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {mockSuppliers.map((supplier) => (
                <div key={supplier.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="text-lg font-bold text-slate-900">{supplier.name}</div>
                    <span className={`rounded-full px-2 py-1 text-xs font-medium ${
                      supplier.status === "Actif" ? "bg-success-100 text-success-600" : "bg-warning-100 text-warning-600"
                    }`}>
                      {supplier.status}
                    </span>
                  </div>
                  <div className="space-y-2 text-sm text-slate-600">
                    <div>ID: {supplier.id}</div>
                    <div>Téléphone: {supplier.phone}</div>
                    <div>Contact: {supplier.contact}</div>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-brand-600">
              <ArrowLeft size={16} />
              Retour au tableau de bord
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
