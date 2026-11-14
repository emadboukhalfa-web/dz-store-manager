export const mockStats = [
  { label: "Revenu total", value: "8 450 000 DZD", change: "+12.4%", trend: "up", icon: "revenue" },
  { label: "Produits", value: "1 284", change: "+58", trend: "up", icon: "products" },
  { label: "Commandes", value: "426", change: "+26", trend: "up", icon: "orders" },
  { label: "Profit net", value: "1 960 000 DZD", change: "+8.1%", trend: "up", icon: "profit" }
] as const;

export const mockProducts = [
  { name: "Lait 1L", sku: "LAIT-001", stock: 84, price: 78, category: "Produits laitiers", status: "En stock" },
  { name: "Café Arabica", sku: "CAF-102", stock: 22, price: 650, category: "Boissons", status: "Faible" },
  { name: "Pâtes italiennes", sku: "PAST-220", stock: 16, price: 210, category: "Épicerie", status: "Faible" },
  { name: "Savon liquide", sku: "SAV-410", stock: 0, price: 320, category: "Hygiène", status: "Rupture" }
] as const;

export const mockInvoices = [
  { id: "FAC-2026-001", customer: "M. Amine Bensalem", total: 18750, status: "Payée", date: "14/11/2026" },
  { id: "FAC-2026-002", customer: "Boutique Souhila", total: 23800, status: "En attente", date: "13/11/2026" },
  { id: "FAC-2026-003", customer: "M. Karim Ouali", total: 5400, status: "Payée", date: "12/11/2026" },
  { id: "FAC-2026-004", customer: "M. Yacine Ali", total: 35600, status: "Annulée", date: "11/11/2026" }
] as const;
