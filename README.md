# DZ Store Manager

Application web de gestion de magasin et de facturation orientée marché algérien.

## Fonctionnalités prévues

- Tableau de bord avec indicateurs clés
- Gestion des produits et du stock
- Point de vente et facturation
- Clients et fournisseurs
- Suivi des ventes et des achats
- Rapports financiers et de caisse
- Paramétrage de la devise DZD et des taxes

## Stack technique

- Next.js 14
- TypeScript
- Tailwind CSS
- Prisma + PostgreSQL
- Lucide React icons

## Démarrage rapide

```bash
npm install
npm run dev
```

Ensuite, ouvrez `http://localhost:3000`.

## Variables d’environnement

Copiez `.env.example` vers `.env.local` et configurez le fichier avec vos paramètres.

## Structure principale

- `app/` : pages et layout de l’application
- `components/` : composants UI réutilisables
- `data/` : données mockées pour le tableau de bord
- `lib/` : utilitaires
- `prisma/` : schéma base de données

## Adaptation au marché algérien

- devise par défaut : DZD
- formatage des montants en `fr-DZ`
- interface bilingue arabe/français prête à évoluer
- logique de gestion adaptée aux magasins de détail et de distribution
