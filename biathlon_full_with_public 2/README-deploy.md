# Guide Déploiement (Vercel + Supabase)

1. Créer un projet Supabase (gratuit)
2. Copier dans Vercel > Environment Variables :
   - NEXT_PUBLIC_SUPABASE_URL
   - NEXT_PUBLIC_SUPABASE_ANON_KEY
   - DATABASE_URL (connexion Postgres)
   - JWT_SECRET (chaîne aléatoire)
3. Lancer :
   npm install
   npx prisma generate
   npx prisma migrate dev --name init
   npm run seed
4. Déployer sur Vercel
