# SchoolNet v3.0 — Getting Started & User Guide

**School Health & LMS Platform** for Soweto High — attendance, truancy detection, clinic cases, billing, and AI dashboards in a neon-cyberpunk UI.

> 🎬 **Narrated demo video:** `frontend/public/demo/schoolnet-demo.mp4`. It walks through starting the app, logging in, registering attendance (learner name + grade), and reading truancy/clinic alerts. The same video plays on the home page.

## 1. Prerequisites

| Requirement | Version |
|---|---|
| Node.js | 18+ (20 LTS recommended) |
| npm | 9+ |
| Supabase project | Free tier is fine (PostgreSQL + RLS) |

## 2. First-Time Setup

### 2.1 Install dependencies

```bash
cd school-platform/frontend
npm install
```

### 2.2 Configure environment variables

Copy the example file and fill in your Supabase credentials:

```bash
cp .env.example .env.local
```

Minimum required keys in `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_ANON_KEY
```

Optional integrations (billing/alerts/maps):

```env
NEXT_PUBLIC_ONESIGNAL_APP_ID=
NEXT_PUBLIC_ONESIGNAL_SAFARI_WEB_ID=
NEXT_PUBLIC_MAPBOX_TOKEN=
```

### 2.3 Create the attendance table in Supabase

Run the SQL below in the Supabase SQL editor, or create the table manually:

```sql
create table if not exists public.attendance_records (
  id uuid primary key default gen_random_uuid(),
  learner_id text not null,
  learner_name text,
  grade text,
  date date not null,
  status text not null check (status in ('present','late','absent','excused')),
  method text default 'roll-call',
  marked_by text,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  unique (learner_id, date)
);

alter table public.attendance_records enable row level security;

create policy "public read attendance" on public.attendance_records
  for select using (true);

create policy "public write attendance" on public.attendance_records
  for insert with check (true);

create policy "public update attendance" on public.attendance_records
  for update using (true) with check (true);
```

> The default `createClient()` in `src/lib/supabase.ts` runs with service-role privileges so the API can upsert for any school tenant; the RLS policies above still protect the public table. For production, replace with anon-key + RLS policies keyed to `tenant_id`.

### 2.4 Start the app

```bash
npm run dev
```

Open **http://localhost:3000**.

## 3. Using the App

### 3.1 Home page

The landing page lists every module. The **Getting Started** section embeds the narrated demo video. Role tiles take you to SuperAdmin, SchoolAdmin, Teacher, Parent, and Clinic views.

### 3.2 Login

Go to **/login**. Demo credentials depend on the roles configured in your Supabase auth (email/password). New schools: create the first user from the Supabase Auth dashboard.

### 3.3 Register attendance (register view)

Go to **/attendance** (register) or **/truancy** for the daily view.

For each entry the register accepts:

- `learner_id` — e.g. `LEARN-001`
- `learner_name` — e.g. `Lindiwe Nkosi` (shown in the register instead of the raw ID)
- `grade` — e.g. `10` (shown in the Grade column)
- `date` — ISO date, e.g. `2026-08-05`
- `status` — `present` | `late` | `absent` | `excused`
- `method` — `roll-call` | `qr` | `biometric` (defaults to `roll-call`)
- `marked_by` — teacher name (e.g. `Mrs. Dlamini`)

**API**

```http
POST /api/attendance
Content-Type: application/json

{
  "entries": [
    {
      "learner_id": "LEARN-001",
      "learner_name": "Lindiwe Nkosi",
      "grade": "10",
      "date": "2026-08-05",
      "status": "present",
      "method": "roll-call",
      "marked_by": "Mrs. Dlamini"
    }
  ]
}
```

Read/filter: `GET /api/attendance?date=2026-08-05&grade=10`
Update: `PUT /api/attendance` with `{ "id": "...", "status": "late" }`

### 3.4 Truancy & clinic dashboards

- **/truancy** — daily attendance view; 3 consecutive `absent` days trigger a clinical alert.
- **/clinic** — health case management, chronic tracking, escalation workflows.
- **/dashboard** and sub-pages — **truancy-ai** (ML flag patterns), **auto-grading**, **immunization**, **multi-currency** billing.

## 4. Building for Production

```bash
npm run build
npm run start
```

Deploy to Vercel (`vercel.json` is already configured). The `public/` folder — including the demo video — is served as static assets automatically.

## 5. Troubleshooting

| Symptom | Fix |
|---|---|
| `Invalid duration for option t` (video build) | PowerShell comma-decimal culture; the bundled `build-video.ps1` already formats with invariant culture. |
| API returns 500 on POST | Confirm the `attendance_records` table exists and the upsert unique constraint is `(learner_id, date)`. |
| Blank page on dashboard routes | Run `npm run build` once to warm the route cache; check the browser console for missing env keys. |
| Port 3000 in use | `npm run dev -- -p 3001`. |

---

*SchoolNet v3.0 — Demo video: `frontend/public/demo/schoolnet-demo.mp4` · Build script: `school-deps/demo/build-video.ps1` (ffmpeg 6.1.1, 8 narrated scenes, Ken Burns + fades).*
