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

export const mockCustomers = [
  { id: "CL-001", name: "M. Amine Bensalem", phone: "+213 555 12 34 56", city: "Alger", totalSpent: 185000, lastPurchase: "14/11/2026" },
  { id: "CL-002", name: "Boutique Souhila", phone: "+213 560 99 88 77", city: "Oran", totalSpent: 240500, lastPurchase: "13/11/2026" },
  { id: "CL-003", name: "M. Karim Ouali", phone: "+213 670 33 22 11", city: "Constantine", totalSpent: 92000, lastPurchase: "12/11/2026" }
] as const;

export const mockSuppliers = [
  { id: "FR-001", name: "Dairy Plus", phone: "+213 770 11 22 33", contact: "Mr. Hakim", status: "Actif" },
  { id: "FR-002", name: "Prime Distribution", phone: "+213 780 44 55 66", contact: "Mme. Selma", status: "Actif" },
  { id: "FR-003", name: "City Food", phone: "+213 790 77 88 99", contact: "Mr. Idriss", status: "En attente" }
] as const;

export const mockReports = [
  { label: "Ventes du jour", value: "215 000 DZD", change: "+9.4%" },
  { label: "Marges", value: "48 000 DZD", change: "+6.1%" },
  { label: "Moyenne panier", value: "2 640 DZD", change: "+3.2%" },
  { label: "Retours", value: "3", change: "-1" }
] as const;
