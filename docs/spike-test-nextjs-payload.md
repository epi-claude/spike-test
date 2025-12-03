# Spike Test: Next.js + Payload CMS

**Objective:** Validate the recommended stack in ~2 hours before committing.

**Stack:** Next.js (App Router) + Payload CMS + Postgres (Railway)

---

## Prerequisites

- Node.js 18+ installed locally
- Railway account (you have this)
- Git installed
- Claude Code available

---

## Phase 1: Local Setup (~30 min)

### 1.1 Scaffold the Project

```bash
npx create-payload-app@latest spike-test
```

When prompted:
- **Template:** Choose `website`
- **Database:** Select `postgres`
- **Package manager:** Your preference (npm/pnpm/yarn)

This scaffolds a Next.js 14 + Payload 3.0 project with App Router.

### 1.2 Local Postgres (Quick Option)

For local dev, use SQLite temporarily to skip local Postgres setup:

```bash
cd spike-test
```

Edit `payload.config.ts` — change the db adapter for local dev:

```typescript
// For local dev only - we'll use Postgres on Railway
import { sqliteAdapter } from '@payloadcms/db-sqlite'

db: sqliteAdapter({
  client: {
    url: 'file:./dev.db',
  },
}),
```

### 1.3 Start Local Dev

```bash
npm run dev
```

Visit:
- **Frontend:** http://localhost:3000
- **Payload Admin:** http://localhost:3000/admin

Create your first admin user when prompted.

---

## Phase 2: Create Test Collections (~30 min)

### 2.1 Page Collection (Already exists in template)

The `website` template includes a Pages collection. Verify it works:

1. Go to `/admin`
2. Navigate to Pages
3. Create a test page with title and content
4. Verify it renders on the frontend

### 2.2 Create a Leads Collection

Create `src/collections/Leads.ts`:

```typescript
import type { CollectionConfig } from 'payload'

export const Leads: CollectionConfig = {
  slug: 'leads',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'name', 'source', 'createdAt'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'source',
      type: 'select',
      options: [
        { label: 'Website Form', value: 'website' },
        { label: 'HighLevel', value: 'highlevel' },
        { label: 'Manual Entry', value: 'manual' },
      ],
      defaultValue: 'website',
    },
    {
      name: 'notes',
      type: 'textarea',
    },
  ],
}
```

### 2.3 Register the Collection

Edit `payload.config.ts`:

```typescript
import { Leads } from './collections/Leads'

// Add to collections array:
collections: [
  // ...existing collections
  Leads,
],
```

Restart dev server. Verify Leads appears in admin.

---

## Phase 3: Deploy to Railway (~45 min)

### 3.1 Create Railway Services

In your Railway project:

1. **Add Postgres Database**
   - Click "New" → "Database" → "PostgreSQL"
   - Note the connection string (Railway provides `DATABASE_URL`)

2. **Add Web Service**
   - Click "New" → "GitHub Repo" (connect your repo)
   - Or use "Empty Service" and deploy via Railway CLI

### 3.2 Environment Variables

Set these in Railway for your web service:

```
DATABASE_URI=${{Postgres.DATABASE_URL}}
PAYLOAD_SECRET=your-random-secret-here-min-32-chars
NEXT_PUBLIC_SERVER_URL=https://your-app.up.railway.app
```

Generate a secret:
```bash
openssl rand -base64 32
```

### 3.3 Update Config for Production

Edit `payload.config.ts` to use Postgres adapter:

```typescript
import { postgresAdapter } from '@payloadcms/db-postgres'

db: postgresAdapter({
  pool: {
    connectionString: process.env.DATABASE_URI,
  },
}),
```

### 3.4 Deploy

```bash
git add .
git commit -m "Initial spike test"
git push origin main
```

Railway auto-deploys on push. Monitor build logs.

### 3.5 Verify Production

1. Visit your Railway URL
2. Go to `/admin`, create admin user
3. Create a test page
4. Create a test lead
5. Verify frontend renders the page

---

## Phase 4: Team Validation (~15 min)

### 4.1 Content Editor Test

Have a non-technical team member:

1. Log into `/admin` with credentials you provide
2. Create/edit a page
3. Add a lead manually

**Pass criteria:** They can do it without asking you questions.

### 4.2 Developer Test

Have a technical team member:

1. Clone the repo
2. Run `npm install && npm run dev`
3. Use Claude Code to add a field to the Leads collection
4. Push changes

**Pass criteria:** They can modify and deploy without blockers.

---

## Success Criteria

| Test | Pass? |
|------|-------|
| Local dev runs without issues | ☐ |
| Pages collection works (CRUD) | ☐ |
| Custom Leads collection works | ☐ |
| Deployed to Railway successfully | ☐ |
| Content editor can use admin UI | ☐ |
| Developer can modify + deploy | ☐ |

---

## If Spike Passes: Next Steps

1. **Design implementation:** Feed reference images to Claude Code, generate Tailwind components
2. **HighLevel integration:** Create API route in Next.js to receive webhooks, write to Leads collection
3. **Content migration:** Import existing content into Pages collection
4. **Auth setup:** Configure Payload's built-in auth for future client portal features

---

## Estimated Costs (Post-Spike)

| Service | Cost |
|---------|------|
| Railway (Postgres + App) | ~$5-15/mo |
| Vercel (optional, for edge) | Free tier |
| Domain | ~$12/yr |
| **Total** | **~$10-20/mo** |

---

## Troubleshooting

**Build fails on Railway:**
- Check `DATABASE_URI` is set correctly
- Ensure Postgres service is running
- Check build logs for missing env vars

**Admin UI shows errors:**
- Verify `PAYLOAD_SECRET` is set
- Check `NEXT_PUBLIC_SERVER_URL` matches your Railway URL

**Can't connect to database locally:**
- Use SQLite for local dev (simpler)
- Or run Postgres via Docker: `docker run -p 5432:5432 -e POSTGRES_PASSWORD=password postgres`
