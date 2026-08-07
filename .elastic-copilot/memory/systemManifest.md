# System Manifest

## Project Overview
- Name: school-platform
- Description: CRCT-enabled project: school-platform
- Created: 2026-07-22T02:03:52.109Z

## Current Status
- Current Phase: Set-up/Maintenance
- Last Updated: 2026-08-07T15:11:39.976Z

## Project Structure

- 89 ts files
- 105 js files
- 98 tsx files


## Dependencies

## Project Directory Structure

- 📂 frontend/
  - 📂 public/
    - 📂 demo/
      - 📄 schoolnet-demo.mp4
  - 📂 schools/
    - 📂 frontend/
      - 📂 public/
        ...
      - 📂 src/
        ...
      - 📄 middleware.ts
      - 📄 next-env.d.ts
      - 📄 next.config.js
      - 📄 postcss.config.js
      - 📄 tailwind.config.ts
    - 📂 mobile/
      - 📄 capacitor.config.ts
    - 📂 render-cron/
      - 📂 workers/
        ...
      - 📄 render.yaml
    - 📂 render-workers/
      - 📂 attendance-compliance/
        ...
      - 📂 health-pdf-generator/
        ...
      - 📂 payfast-billing/
        ...
      - 📂 truancy-watchdog/
        ...
    - 📂 supabase/
      - 📂 functions/
        ...
      - 📂 migrations/
        ...
      - 📄 seed.sql
    - 📂 web/
    - 📄 full-build.ps1
    - 📄 render.yaml
  - 📂 src/
    - 📂 app/
      - 📂 [...slug]/
        ...
      - 📂 about/
        ...
      - 📂 api/
        ...
      - 📂 attendance/
        ...
      - 📂 auth/
        ...
      - 📂 billing/
        ...
      - 📂 clinic/
        ...
      - 📂 contact/
        ...
      - 📂 dashboard/
        ...
      - 📂 learners/
        ...
      - 📂 login/
        ...
      - 📂 parent/
        ...
      - 📂 privacy/
        ...
      - 📂 schooladmin/
        ...
      - 📂 superadmin/
        ...
      - 📂 teacher/
        ...
      - 📂 terms/
        ...
      - 📂 truancy/
        ...
      - 📄 layout.tsx
      - 📄 not-found.tsx
      - 📄 page.tsx
    - 📂 components/
      - 📂 ai/
        ...
      - 📂 attendance/
        ...
      - 📂 billing/
        ...
      - 📂 dashboard/
        ...
      - 📂 dashboards/
        ...
      - 📂 forms/
        ...
      - 📂 health/
        ...
      - 📂 layout/
        ...
      - 📂 ui/
        ...
    - 📂 hooks/
      - 📄 index.ts
      - 📄 useAttendance.ts
      - 📄 useAuth.ts
      - 📄 useDebounce.ts
      - 📄 useLocalStorage.ts
      - 📄 useMediaQuery.ts
      - 📄 useToast.ts
      - 📄 useTruancy.ts
    - 📂 lib/
      - 📄 api.ts
      - 📄 supabase.ts
      - 📄 utils.ts
    - 📂 styles/
      - 📄 globals.css
    - 📂 types/
      - 📄 attendance.ts
      - 📄 index.ts
  - 📄 middleware.ts
  - 📄 next-env.d.ts
  - 📄 next.config.js
  - 📄 postcss.config.js
  - 📄 tailwind.config.ts
  - 📄 vercel.json.bak
- 📂 mobile/
  - 📂 android/
  - 📂 ios/
  - 📄 capacitor.config.ts
- 📂 render-cron/
  - 📂 workers/
    - 📄 attendance-compliance.mjs
    - 📄 health-pdf-generator.mjs
    - 📄 truancy-watchdog.mjs
  - 📄 render.yaml
- 📂 render-workers/
  - 📂 attendance-compliance/
    - 📄 index.mjs
  - 📂 health-pdf-generator/
    - 📄 index.mjs
  - 📂 payfast-billing/
  - 📂 truancy-watchdog/
    - 📄 index.mjs
- 📂 supabase/
  - 📂 functions/
    - 📂 attendance-compliance/
      - 📄 index.ts
    - 📂 auto-grading/
      - 📄 index.ts
    - 📂 billing-convert/
      - 📄 index.ts
    - 📂 health-pdf-generator/
      - 📄 index.ts
    - 📂 health-report-generator/
    - 📂 immunization-reminder/
      - 📄 index.ts
    - 📂 payfast-billing/
      - 📄 index.ts
    - 📂 sa-sams-ingestion/
    - 📂 sa-sams-parser/
      - 📄 index.ts
    - 📂 truancy-prediction/
      - 📄 index.ts
    - 📂 truancy-watchdog/
      - 📄 index.ts
    - 📄 config.toml
  - 📂 migrations/
    - 📄 001_complete_schema.sql
    - 📄 002_app_controls.sql
    - 📄 003_storage_buckets.sql
    - 📄 COMPLETE FIXED MIGRATION.sql
  - 📂 storage/
  - 📄 seed.sql
- 📂 web/
  - 📂 public/
  - 📂 src/
    - 📂 app/
      - 📂 api/
        ...
      - 📂 dashboard/
        ...
      - 📂 login/
        ...
    - 📂 components/
      - 📂 dashboard/
        ...
      - 📂 layout/
        ...
      - 📂 ui/
        ...
    - 📂 lib/
    - 📂 types/
- 📄 full-build.ps1
- 📄 render.yaml
- 📄 vercel.json.bak


## TS Dependencies

### \supabase\functions\truancy-watchdog\index.ts
Dependencies:
- https://deno.land/std@0.208.0/http/server.ts
- https://esm.sh/@supabase/supabase-js@2.39.0

### \supabase\functions\truancy-prediction\index.ts
Dependencies:
- std/http/server.ts
- @supabase/supabase-js

### \supabase\functions\sa-sams-parser\index.ts
Dependencies:
- https://deno.land/std@0.208.0/http/server.ts
- https://esm.sh/@supabase/supabase-js@2.39.0
- https://deno.land/std@0.208.0/csv/parse.ts

### \supabase\functions\payfast-billing\index.ts
Dependencies:
- https://deno.land/std@0.208.0/http/server.ts
- https://esm.sh/@supabase/supabase-js@2.39.0
- https://deno.land/std@0.208.0/crypto/mod.ts

### \supabase\functions\immunization-reminder\index.ts
Dependencies:
- std/http/server.ts
- @supabase/supabase-js

## JS Dependencies

### \frontend\postcss.config.js
No dependencies found

### \frontend\next.config.js
No dependencies found

### \frontend\.next\static\g6u-Y8WcD38UuGCglPQQO\_ssgManifest.js
No dependencies found

### \frontend\.next\static\g6u-Y8WcD38UuGCglPQQO\_buildManifest.js
No dependencies found

### \frontend\.next\static\chunks\webpack-1a9f5f0b6ec9894f.js
No dependencies found

## TSX Dependencies

### \frontend\src\components\ui\StatusBadge.tsx
Dependencies:
- @/lib/utils

### \frontend\src\components\ui\StatCard.tsx
Dependencies:
- @/lib/utils

### \frontend\src\components\ui\NeonCard.tsx
Dependencies:
- @/lib/utils

### \frontend\src\components\ui\NeonButton.tsx
Dependencies:
- @/lib/utils

### \frontend\src\components\layout\TopBar.tsx
Dependencies:
- @/lib/utils
- lucide-react



## Project Directory Structure

- 📂 frontend/
  - 📂 public/
    - 📂 demo/
      - 📄 schoolnet-demo.mp4
  - 📂 schools/
    - 📂 frontend/
      - 📂 public/
        ...
      - 📂 src/
        ...
      - 📄 middleware.ts
      - 📄 next-env.d.ts
      - 📄 next.config.js
      - 📄 postcss.config.js
      - 📄 tailwind.config.ts
    - 📂 mobile/
      - 📄 capacitor.config.ts
    - 📂 render-cron/
      - 📂 workers/
        ...
      - 📄 render.yaml
    - 📂 render-workers/
      - 📂 attendance-compliance/
        ...
      - 📂 health-pdf-generator/
        ...
      - 📂 payfast-billing/
        ...
      - 📂 truancy-watchdog/
        ...
    - 📂 supabase/
      - 📂 functions/
        ...
      - 📂 migrations/
        ...
      - 📄 seed.sql
    - 📂 web/
    - 📄 full-build.ps1
    - 📄 render.yaml
  - 📂 src/
    - 📂 app/
      - 📂 about/
        ...
      - 📂 api/
        ...
      - 📂 attendance/
        ...
      - 📂 auth/
        ...
      - 📂 billing/
        ...
      - 📂 clinic/
        ...
      - 📂 contact/
        ...
      - 📂 dashboard/
        ...
      - 📂 learners/
        ...
      - 📂 login/
        ...
      - 📂 parent/
        ...
      - 📂 privacy/
        ...
      - 📂 schooladmin/
        ...
      - 📂 superadmin/
        ...
      - 📂 teacher/
        ...
      - 📂 terms/
        ...
      - 📂 truancy/
        ...
      - 📄 layout.tsx
      - 📄 page.tsx
    - 📂 components/
      - 📂 ai/
        ...
      - 📂 attendance/
        ...
      - 📂 billing/
        ...
      - 📂 dashboard/
        ...
      - 📂 dashboards/
        ...
      - 📂 forms/
        ...
      - 📂 health/
        ...
      - 📂 layout/
        ...
      - 📂 ui/
        ...
    - 📂 hooks/
      - 📄 index.ts
      - 📄 useAttendance.ts
      - 📄 useAuth.ts
      - 📄 useDebounce.ts
      - 📄 useLocalStorage.ts
      - 📄 useMediaQuery.ts
      - 📄 useToast.ts
      - 📄 useTruancy.ts
    - 📂 lib/
      - 📄 api.ts
      - 📄 supabase.ts
      - 📄 utils.ts
    - 📂 styles/
      - 📄 globals.css
    - 📂 types/
      - 📄 attendance.ts
      - 📄 index.ts
  - 📄 middleware.ts
  - 📄 next-env.d.ts
  - 📄 next.config.js
  - 📄 postcss.config.js
  - 📄 tailwind.config.ts
  - 📄 vercel.json.bak
- 📂 mobile/
  - 📂 android/
  - 📂 ios/
  - 📄 capacitor.config.ts
- 📂 render-cron/
  - 📂 workers/
    - 📄 attendance-compliance.mjs
    - 📄 health-pdf-generator.mjs
    - 📄 truancy-watchdog.mjs
  - 📄 render.yaml
- 📂 render-workers/
  - 📂 attendance-compliance/
    - 📄 index.mjs
  - 📂 health-pdf-generator/
    - 📄 index.mjs
  - 📂 payfast-billing/
  - 📂 truancy-watchdog/
    - 📄 index.mjs
- 📂 supabase/
  - 📂 functions/
    - 📂 attendance-compliance/
      - 📄 index.ts
    - 📂 auto-grading/
      - 📄 index.ts
    - 📂 billing-convert/
      - 📄 index.ts
    - 📂 health-pdf-generator/
      - 📄 index.ts
    - 📂 health-report-generator/
    - 📂 immunization-reminder/
      - 📄 index.ts
    - 📂 payfast-billing/
      - 📄 index.ts
    - 📂 sa-sams-ingestion/
    - 📂 sa-sams-parser/
      - 📄 index.ts
    - 📂 truancy-prediction/
      - 📄 index.ts
    - 📂 truancy-watchdog/
      - 📄 index.ts
    - 📄 config.toml
  - 📂 migrations/
    - 📄 001_complete_schema.sql
    - 📄 002_app_controls.sql
    - 📄 003_storage_buckets.sql
    - 📄 COMPLETE FIXED MIGRATION.sql
  - 📂 storage/
  - 📄 seed.sql
- 📂 web/
  - 📂 public/
  - 📂 src/
    - 📂 app/
      - 📂 api/
        ...
      - 📂 dashboard/
        ...
      - 📂 login/
        ...
    - 📂 components/
      - 📂 dashboard/
        ...
      - 📂 layout/
        ...
      - 📂 ui/
        ...
    - 📂 lib/
    - 📂 types/
- 📄 full-build.ps1
- 📄 render.yaml
- 📄 vercel.json.bak


## TS Dependencies

### \supabase\functions\truancy-watchdog\index.ts
Dependencies:
- https://deno.land/std@0.208.0/http/server.ts
- https://esm.sh/@supabase/supabase-js@2.39.0

### \supabase\functions\truancy-prediction\index.ts
Dependencies:
- std/http/server.ts
- @supabase/supabase-js

### \supabase\functions\sa-sams-parser\index.ts
Dependencies:
- https://deno.land/std@0.208.0/http/server.ts
- https://esm.sh/@supabase/supabase-js@2.39.0
- https://deno.land/std@0.208.0/csv/parse.ts

### \supabase\functions\payfast-billing\index.ts
Dependencies:
- https://deno.land/std@0.208.0/http/server.ts
- https://esm.sh/@supabase/supabase-js@2.39.0
- https://deno.land/std@0.208.0/crypto/mod.ts

### \supabase\functions\immunization-reminder\index.ts
Dependencies:
- std/http/server.ts
- @supabase/supabase-js

## TSX Dependencies

### \frontend\src\components\ui\StatusBadge.tsx
Dependencies:
- @/lib/utils

### \frontend\src\components\ui\StatCard.tsx
Dependencies:
- @/lib/utils

### \frontend\src\components\ui\NeonCard.tsx
Dependencies:
- @/lib/utils

### \frontend\src\components\ui\NeonButton.tsx
Dependencies:
- @/lib/utils

### \frontend\src\components\layout\TopBar.tsx
Dependencies:
- @/lib/utils
- lucide-react

## JS Dependencies

### \frontend\postcss.config.js
No dependencies found

### \frontend\next.config.js
No dependencies found

### \frontend\.next\static\oamBOJnQDEillV7xGiI71\_ssgManifest.js
No dependencies found

### \frontend\.next\static\oamBOJnQDEillV7xGiI71\_buildManifest.js
No dependencies found

### \frontend\.next\static\development\_ssgManifest.js
No dependencies found



## Project Directory Structure

- 📂 frontend/
  - 📂 public/
    - 📂 demo/
      - 📄 schoolnet-demo.mp4
  - 📂 schools/
    - 📂 frontend/
      - 📂 public/
        ...
      - 📂 src/
        ...
      - 📄 middleware.ts
      - 📄 next-env.d.ts
      - 📄 next.config.js
      - 📄 postcss.config.js
      - 📄 tailwind.config.ts
    - 📂 mobile/
      - 📄 capacitor.config.ts
    - 📂 render-cron/
      - 📂 workers/
        ...
      - 📄 render.yaml
    - 📂 render-workers/
      - 📂 attendance-compliance/
        ...
      - 📂 health-pdf-generator/
        ...
      - 📂 payfast-billing/
        ...
      - 📂 truancy-watchdog/
        ...
    - 📂 supabase/
      - 📂 functions/
        ...
      - 📂 migrations/
        ...
      - 📄 seed.sql
    - 📂 web/
    - 📄 full-build.ps1
    - 📄 render.yaml
  - 📂 src/
    - 📂 app/
      - 📂 about/
        ...
      - 📂 api/
        ...
      - 📂 attendance/
        ...
      - 📂 auth/
        ...
      - 📂 billing/
        ...
      - 📂 clinic/
        ...
      - 📂 contact/
        ...
      - 📂 dashboard/
        ...
      - 📂 learners/
        ...
      - 📂 login/
        ...
      - 📂 parent/
        ...
      - 📂 privacy/
        ...
      - 📂 schooladmin/
        ...
      - 📂 superadmin/
        ...
      - 📂 teacher/
        ...
      - 📂 terms/
        ...
      - 📂 truancy/
        ...
      - 📄 layout.tsx
      - 📄 page.tsx
    - 📂 components/
      - 📂 ai/
        ...
      - 📂 attendance/
        ...
      - 📂 billing/
        ...
      - 📂 dashboard/
        ...
      - 📂 dashboards/
        ...
      - 📂 forms/
        ...
      - 📂 health/
        ...
      - 📂 layout/
        ...
      - 📂 ui/
        ...
    - 📂 hooks/
      - 📄 index.ts
      - 📄 useAttendance.ts
      - 📄 useAuth.ts
      - 📄 useDebounce.ts
      - 📄 useLocalStorage.ts
      - 📄 useMediaQuery.ts
      - 📄 useToast.ts
      - 📄 useTruancy.ts
    - 📂 lib/
      - 📄 api.ts
      - 📄 supabase.ts
      - 📄 utils.ts
    - 📂 styles/
      - 📄 globals.css
    - 📂 types/
      - 📄 attendance.ts
      - 📄 index.ts
  - 📄 middleware.ts
  - 📄 next-env.d.ts
  - 📄 next.config.js
  - 📄 postcss.config.js
  - 📄 tailwind.config.ts
- 📂 mobile/
  - 📂 android/
  - 📂 ios/
  - 📄 capacitor.config.ts
- 📂 render-cron/
  - 📂 workers/
    - 📄 attendance-compliance.mjs
    - 📄 health-pdf-generator.mjs
    - 📄 truancy-watchdog.mjs
  - 📄 render.yaml
- 📂 render-workers/
  - 📂 attendance-compliance/
    - 📄 index.mjs
  - 📂 health-pdf-generator/
    - 📄 index.mjs
  - 📂 payfast-billing/
  - 📂 truancy-watchdog/
    - 📄 index.mjs
- 📂 supabase/
  - 📂 functions/
    - 📂 attendance-compliance/
      - 📄 index.ts
    - 📂 auto-grading/
      - 📄 index.ts
    - 📂 billing-convert/
      - 📄 index.ts
    - 📂 health-pdf-generator/
      - 📄 index.ts
    - 📂 health-report-generator/
    - 📂 immunization-reminder/
      - 📄 index.ts
    - 📂 payfast-billing/
      - 📄 index.ts
    - 📂 sa-sams-ingestion/
    - 📂 sa-sams-parser/
      - 📄 index.ts
    - 📂 truancy-prediction/
      - 📄 index.ts
    - 📂 truancy-watchdog/
      - 📄 index.ts
    - 📄 config.toml
  - 📂 migrations/
    - 📄 001_complete_schema.sql
    - 📄 002_app_controls.sql
    - 📄 003_storage_buckets.sql
    - 📄 COMPLETE FIXED MIGRATION.sql
  - 📂 storage/
  - 📄 seed.sql
- 📂 web/
  - 📂 public/
  - 📂 src/
    - 📂 app/
      - 📂 api/
        ...
      - 📂 dashboard/
        ...
      - 📂 login/
        ...
    - 📂 components/
      - 📂 dashboard/
        ...
      - 📂 layout/
        ...
      - 📂 ui/
        ...
    - 📂 lib/
    - 📂 types/
- 📄 full-build.ps1
- 📄 render.yaml


## TS Dependencies

### \supabase\functions\truancy-watchdog\index.ts
Dependencies:
- https://deno.land/std@0.208.0/http/server.ts
- https://esm.sh/@supabase/supabase-js@2.39.0

### \supabase\functions\truancy-prediction\index.ts
Dependencies:
- std/http/server.ts
- @supabase/supabase-js

### \supabase\functions\sa-sams-parser\index.ts
Dependencies:
- https://deno.land/std@0.208.0/http/server.ts
- https://esm.sh/@supabase/supabase-js@2.39.0
- https://deno.land/std@0.208.0/csv/parse.ts

### \supabase\functions\payfast-billing\index.ts
Dependencies:
- https://deno.land/std@0.208.0/http/server.ts
- https://esm.sh/@supabase/supabase-js@2.39.0
- https://deno.land/std@0.208.0/crypto/mod.ts

### \supabase\functions\immunization-reminder\index.ts
Dependencies:
- std/http/server.ts
- @supabase/supabase-js

## JS Dependencies

### \frontend\.next\static\development\_ssgManifest.js
No dependencies found

### \frontend\.next\static\development\_buildManifest.js
No dependencies found

### \frontend\.next\static\chunks\polyfills.js
No dependencies found

### \frontend\.next\server\server-reference-manifest.js
No dependencies found

### \frontend\.next\server\next-font-manifest.js
No dependencies found

## TSX Dependencies

### \frontend\src\components\ui\StatusBadge.tsx
Dependencies:
- @/lib/utils

### \frontend\src\components\ui\StatCard.tsx
Dependencies:
- @/lib/utils

### \frontend\src\components\ui\NeonCard.tsx
Dependencies:
- @/lib/utils

### \frontend\src\components\ui\NeonButton.tsx
Dependencies:
- @/lib/utils

### \frontend\src\components\layout\TopBar.tsx
Dependencies:
- @/lib/utils
- lucide-react



## Project Directory Structure

- 📂 frontend/
  - 📂 public/
  - 📂 src/
    - 📂 app/
      - 📂 api/
        ...
      - 📂 clinic/
        ...
      - 📂 dashboard/
        ...
      - 📂 parent/
        ...
      - 📂 schooladmin/
        ...
      - 📂 superadmin/
        ...
      - 📂 teacher/
        ...
      - 📄 layout.tsx
      - 📄 page.tsx
    - 📂 components/
      - 📂 ai/
        ...
      - 📂 attendance/
        ...
      - 📂 billing/
        ...
      - 📂 dashboard/
        ...
      - 📂 dashboards/
        ...
      - 📂 forms/
        ...
      - 📂 health/
        ...
      - 📂 layout/
        ...
      - 📂 ui/
        ...
    - 📂 hooks/
    - 📂 lib/
      - 📄 api.ts
      - 📄 supabase.ts
      - 📄 utils.ts
    - 📂 styles/
      - 📄 globals.css
  - 📄 next-env.d.ts
  - 📄 next.config.js
  - 📄 postcss.config.js
  - 📄 tailwind.config.ts
- 📂 render-cron/
  - 📂 workers/
    - 📄 attendance-compliance.mjs
    - 📄 health-pdf-generator.mjs
    - 📄 truancy-watchdog.mjs
  - 📄 render.yaml
- 📂 supabase/
  - 📂 functions/
    - 📂 attendance-compliance/
      - 📄 index.ts
    - 📂 auto-grading/
      - 📄 index.ts
    - 📂 billing-convert/
      - 📄 index.ts
    - 📂 health-pdf-generator/
      - 📄 index.ts
    - 📂 immunization-reminder/
      - 📄 index.ts
    - 📂 payfast-billing/
      - 📄 index.ts
    - 📂 sa-sams-parser/
      - 📄 index.ts
    - 📂 truancy-prediction/
      - 📄 index.ts
    - 📂 truancy-watchdog/
      - 📄 index.ts
    - 📄 config.toml
  - 📂 migrations/
    - 📄 001_complete_schema.sql
    - 📄 002_app_controls.sql
    - 📄 COMPLETE FIXED MIGRATION.sql
    - 📄 school_schema.sql
  - 📂 storage/
- 📄 full-build.ps1
- 📄 ql


## TS Dependencies

### \supabase\functions\truancy-watchdog\index.ts
Dependencies:
- https://deno.land/std@0.208.0/http/server.ts
- https://esm.sh/@supabase/supabase-js@2.39.0

### \supabase\functions\billing-convert\index.ts
Dependencies:
- std/http/server.ts
- @supabase/supabase-js

### \supabase\functions\truancy-prediction\index.ts
Dependencies:
- std/http/server.ts
- @supabase/supabase-js

### \supabase\functions\sa-sams-parser\index.ts
Dependencies:
- https://deno.land/std@0.208.0/http/server.ts
- https://esm.sh/@supabase/supabase-js@2.39.0
- https://deno.land/std@0.208.0/csv/parse.ts

### \supabase\functions\payfast-billing\index.ts
Dependencies:
- https://deno.land/std@0.208.0/http/server.ts
- https://esm.sh/@supabase/supabase-js@2.39.0
- https://deno.land/std@0.208.0/crypto/mod.ts

## TSX Dependencies

### \frontend\src\components\ui\StatusBadge.tsx
Dependencies:
- @/lib/utils

### \frontend\src\components\ui\StatCard.tsx
Dependencies:
- @/lib/utils

### \frontend\src\components\ui\NeonCard.tsx
Dependencies:
- @/lib/utils

### \frontend\src\components\ui\NeonButton.tsx
Dependencies:
- @/lib/utils

### \frontend\src\components\layout\TopBar.tsx
Dependencies:
- @/lib/utils
- lucide-react

## JS Dependencies

### \frontend\postcss.config.js
No dependencies found

### \frontend\next.config.js
No dependencies found

### \frontend\.next\static\EKo9it0dyjAvOpnA2hMyX\_ssgManifest.js
No dependencies found

### \frontend\.next\static\EKo9it0dyjAvOpnA2hMyX\_buildManifest.js
No dependencies found

### \frontend\.next\static\chunks\webpack-1a9f5f0b6ec9894f.js
No dependencies found



## Key Components
- TBD

## Integration Points
- TBD

## Technical Considerations
- TBD

## Implementation Notes
- TBD
