import Link from "next/link";
import { ArrowLeft, Download, Plus, Search } from "lucide-react";
import { Sidebar } from "@/components/sidebar";
import { mockProducts } from "@/data/mock-data";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <div className="mx-auto flex max-w-[1600px] gap-6 p-4 lg:p-6">
        <Sidebar />

        <main className="flex-1 overflow-hidden rounded-3xl bg-white shadow-soft">
          <header className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
            <div>
              <p className="text-sm text-slate-500">Produits</p>
              <h1 className="text-2xl font-bold text-slate-900">Catalogue de produits</h1>
            </div>
            <div className="flex items-center gap-3">
              <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
                <Download size={16} />
                Exporter
              </button>
              <button className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-4 py-2 text-sm font-medium text-white">
                <Plus size={16} />
                Ajouter produit
              </button>
            </div>
          </header>

          <div className="space-y-6 p-6">
            <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-500">
                <Search size={16} />
                <input className="w-72 border-0 bg-transparent outline-none" placeholder="Rechercher un produit..." />
              </div>
              <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-brand-600">
                <ArrowLeft size={16} />
                Retour
              </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {mockProducts.map((product) => (
                <div key={product.sku} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">{product.category}</span>
                    <span className={`rounded-full px-2 py-1 text-xs font-medium ${
                      product.status === "En stock"
                        ? "bg-success-100 text-success-600"
                        : product.status === "Faible"
                          ? "bg-warning-100 text-warning-600"
                          : "bg-danger-100 text-danger-600"
                    }`}>
                      {product.status}
                    </span>
                  </div>
                  <div className="font-bold text-xl text-slate-900">{product.name}</div>
                  <div className="mt-2 text-sm text-slate-500">SKU: {product.sku}</div>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <div className="text-sm text-slate-500">Prix de vente</div>
                      <div className="text-lg font-bold text-slate-900">{product.price.toLocaleString("fr-DZ")} DZD</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-slate-500">Stock</div>
                      <div className="text-lg font-bold text-slate-900">{product.stock}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
