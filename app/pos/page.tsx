import Link from "next/link";
import { ArrowLeft, Plus, Search } from "lucide-react";
import { Sidebar } from "@/components/sidebar";
import { mockProducts } from "@/data/mock-data";

const cartItems = [
  { name: "Lait 1L", qty: 2, price: 78 },
  { name: "Café Arabica", qty: 1, price: 650 },
  { name: "Pâtes italiennes", qty: 3, price: 210 }
];

export default function PosPage() {
  const total = cartItems.reduce((sum, item) => sum + item.qty * item.price, 0);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <div className="mx-auto flex max-w-[1600px] gap-6 p-4 lg:p-6">
        <Sidebar />

        <main className="flex-1 overflow-hidden rounded-3xl bg-white shadow-soft">
          <header className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
            <div>
              <p className="text-sm text-slate-500">POS</p>
              <h1 className="text-2xl font-bold text-slate-900">Point de vente</h1>
            </div>
            <div className="flex items-center gap-3">
              <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
                <Search size={16} />
                Scanner
              </button>
              <button className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-4 py-2 text-sm font-medium text-white">
                <Plus size={16} />
                Nouveau ticket
              </button>
            </div>
          </header>

          <div className="grid gap-6 p-6 xl:grid-cols-[1.4fr_0.8fr]">
            <div className="space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-lg font-bold text-slate-900">Produits</h2>
                  <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-500">
                    <Search size={14} />
                    Rechercher produit
                  </div>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  {mockProducts.map((product) => (
                    <button key={product.sku} className="rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-sm">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="font-bold text-slate-900">{product.name}</span>
                        <span className="rounded-full bg-brand-100 px-2 py-1 text-xs font-medium text-brand-600">{product.stock} en stock</span>
                      </div>
                      <div className="text-sm text-slate-500">{product.category}</div>
                      <div className="mt-3 font-bold text-slate-900">{product.price.toLocaleString("fr-DZ")} DZD</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="mb-4 text-lg font-bold text-slate-900">Panier</h2>

              <div className="space-y-3">
                {cartItems.map((item) => (
                  <div key={item.name} className="flex items-center justify-between rounded-xl bg-white p-3">
                    <div>
                      <div className="font-medium text-slate-900">{item.name}</div>
                      <div className="text-sm text-slate-500">{item.qty} x {item.price.toLocaleString("fr-DZ")} DZD</div>
                    </div>
                    <div className="font-bold text-slate-900">{(item.qty * item.price).toLocaleString("fr-DZ")} DZD</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-3 border-t border-slate-200 pt-4">
                <div className="flex items-center justify-between text-slate-600">
                  <span>Sous-total</span>
                  <span>{total.toLocaleString("fr-DZ")} DZD</span>
                </div>
                <div className="flex items-center justify-between text-slate-600">
                  <span>TVA</span>
                  <span>0 DZD</span>
                </div>
                <div className="flex items-center justify-between text-lg font-bold text-slate-900">
                  <span>Total</span>
                  <span>{total.toLocaleString("fr-DZ")} DZD</span>
                </div>
              </div>

              <button className="mt-6 w-full rounded-xl bg-success-600 px-4 py-3 font-medium text-white">
                Valider le paiement
              </button>

              <Link href="/" className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-brand-600">
                <ArrowLeft size={16} />
                Retour au dashboard
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
