import Link from "next/link";
import { ArrowLeft, Bell, Download, TrendingUp } from "lucide-react";
import { Sidebar } from "@/components/sidebar";
import { mockReports } from "@/data/mock-data";

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <div className="mx-auto flex max-w-[1600px] gap-6 p-4 lg:p-6">
        <Sidebar />

        <main className="flex-1 overflow-hidden rounded-3xl bg-white shadow-soft">
          <header className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
            <div>
              <p className="text-sm text-slate-500">Rapports</p>
              <h1 className="text-2xl font-bold text-slate-900">Suivi des performances</h1>
            </div>
            <div className="flex items-center gap-3">
              <button className="rounded-xl border border-slate-200 bg-slate-50 p-2 text-slate-700">
                <Bell size={16} />
              </button>
              <button className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-4 py-2 text-sm font-medium text-white">
                <Download size={16} />
                Exporter
              </button>
            </div>
          </header>

          <div className="space-y-6 p-6">
            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {mockReports.map((report) => (
                <div key={report.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-sm text-slate-500">{report.label}</span>
                    <TrendingUp className="text-brand-600" size={18} />
                  </div>
                  <div className="text-2xl font-bold text-slate-900">{report.value}</div>
                  <div className="mt-2 text-sm font-medium text-success-600">{report.change}</div>
                </div>
              ))}
            </section>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-lg font-bold text-slate-900">Évolution des ventes</h2>
                <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-brand-600">
                  <ArrowLeft size={16} />
                  Retour
                </Link>
              </div>

              <div className="flex h-52 items-end gap-3">
                {[34, 52, 48, 76, 65, 90, 72, 101, 84, 118, 94, 126].map((value, index) => (
                  <div key={index} className="flex-1">
                    <div className="rounded-t-2xl bg-gradient-to-t from-brand-600 to-brand-300" style={{ height: `${value}%` }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
