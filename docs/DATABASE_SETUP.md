# Database Uplink Guide | ShadowGame Systems

Since you cannot pay for a database, here are the **best free options** for a PostgreSQL database that works perfectly with this project.

## Option 1: Neon (Recommended for Vercel)
**Neon** is "Serverless Postgres". It scales to zero (pauses when not used) so it's excellent for free tiers.

1.  **Sign Up**: Go to [neon.tech](https://neon.tech) and sign up (GitHub login recommended).
2.  **Create Project**: Name it `shadow-game`.
3.  **Get Connection String**:
    *   On the Dashboard, look for "Connection Details".
    *   Select "Pooled connection" (Important for serverless apps like Next.js).
    *   Copy the string starting with `postgres://...`
4.  **Connect to Vercel**:
    *   Go to your Vercel Dashboard -> ShadowGame -> Settings -> Environment Variables.
    *   Add key: `DATABASE_URL`
    *   Value: (Paste the string you copied).

## Option 2: Supabase (Best All-Rounder)
**Supabase** offers a generous free tier (500MB database).

1.  **Sign Up**: Go to [supabase.com](https://supabase.com).
2.  **New Project**: Create a new project, give it a strong password (save this!).
3.  **Get Protocol**:
    *   Go to Project Settings -> Database -> Connection Pooling.
    *   Copy the "Transaction Mode" connection string (port 6543).
    *   **Note**: You must use the "Transaction Mode" string for Prisma/Next.js to avoid "Too many clients" errors.
4.  **Connect to Vercel**:
    *   Go to Vercel -> Settings -> Environment Variables.
    *   Add key: `DATABASE_URL`
    *   Value: (Paste the connection string).

## ⚠️ Important Configuration
After setting the `DATABASE_URL` in Vercel, you need to deploy the database schema.

1.  **Run Migration (Locally)**:
    In your local terminal, run this to push your schema to the *new* remote DB (replace url with your new one temporarily, or simpler: just redeploy).
    
    *Actually, the easiest way for production:*
    Add this to `package.json` scripts:
    ```json
    "build": "prisma generate && next build",
    "postinstall": "prisma generate"
    ```
    (We typically don't run migrations automatically in build for safety, but for a solo project, you can run `npx prisma db push` manually from your local machine using the remote connection string).

### How to push schema to your new Production DB:
1.  Get the connection string (Neon or Supabase).
2.  In your local terminal:
    ```bash
    # Windows PowerShell
    $env:DATABASE_URL="postgres://user:pass@host/db..."
    npx prisma db push
    ```
3.  Now your production DB has the tables!

---

## 🏆 Free Tier Face-Off: Neon vs. Supabase

The user asked: *"Which has more free tier?"*

| Feature | Neon (Free) | Supabase (Free) | Winner |
| :--- | :--- | :--- | :--- |
| **Storage** | 0.5 GB | 500 MB | **Tie** |
| **Inactivity** | **Scales to Zero** (Sleeps, wakes up automatically in <1s) | **Pauses after 1 week** (Must log in to dashboard to unpause) | **Neon** (Less maintenance) |
| **Connection** | Direct Postgres URL (Works everywhere) | Transaction Mode required for Serverless | **Neon** (Simpler) |
| **Extras** | Just Database | Auth, Storage, Edge Functions included | **Supabase** (More features) |

### 💡 Final Verdict
*   **Choose Neon** if you want a **"Set and Forget"** database. It won't "break" if you don't use it for a week; it just sleeps and wakes up when a user visits. This is usually better for hobby/portfolio projects.
*   **Choose Supabase** if you plan to use their **Auth** or **File Storage** features later, or if you log in frequently enough to keep it active.

