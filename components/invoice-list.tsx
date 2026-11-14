export function InvoiceList({ invoices }: { invoices: Array<{ id: string; customer: string; total: number; status: string; date: string }> }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-bold text-slate-900">Factures récentes</h3>
        <button className="text-sm font-medium text-brand-600">Historique</button>
      </div>

      <div className="space-y-3">
        {invoices.map((invoice) => (
          <div key={invoice.id} className="flex items-center justify-between rounded-xl bg-white p-4 shadow-sm">
            <div>
              <div className="font-bold text-slate-900">{invoice.id}</div>
              <div className="text-sm text-slate-500">{invoice.customer}</div>
            </div>
            <div className="text-right">
              <div className="font-bold text-slate-900">{invoice.total.toLocaleString("fr-DZ")} DZD</div>
              <div className="text-sm text-slate-500">{invoice.date}</div>
            </div>
            <span
              className={`rounded-full px-2 py-1 text-xs font-medium ${
                invoice.status === "Payée"
                  ? "bg-success-100 text-success-600"
                  : invoice.status === "En attente"
                    ? "bg-warning-100 text-warning-600"
                    : "bg-danger-100 text-danger-600"
              }`}
            >
              {invoice.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
