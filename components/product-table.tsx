export function ProductTable({ products }: { products: Array<{ name: string; sku: string; stock: number; price: number; category: string; status: "En stock" | "Faible" | "Rupture" }> }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-bold text-slate-900">Produits en stock</h3>
        <button className="text-sm font-medium text-brand-600">Voir tout</button>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="px-4 py-3 font-medium">Produit</th>
              <th className="px-4 py-3 font-medium">SKU</th>
              <th className="px-4 py-3 font-medium">Catégorie</th>
              <th className="px-4 py-3 font-medium">Stock</th>
              <th className="px-4 py-3 font-medium">Prix</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {products.map((product) => (
              <tr key={product.sku}>
                <td className="px-4 py-3 font-medium text-slate-900">{product.name}</td>
                <td className="px-4 py-3 text-slate-600">{product.sku}</td>
                <td className="px-4 py-3 text-slate-600">{product.category}</td>
                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-2 py-1 text-xs font-medium ${
                      product.status === "En stock"
                        ? "bg-success-100 text-success-600"
                        : product.status === "Faible"
                          ? "bg-warning-100 text-warning-600"
                          : "bg-danger-100 text-danger-600"
                    }`}
                  >
                    {product.stock} · {product.status}
                  </span>
                </td>
                <td className="px-4 py-3 font-bold text-slate-900">{product.price.toLocaleString("fr-DZ")} DZD</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
