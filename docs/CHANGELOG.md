# Episolve Website - Change Log

## Project Initialization & Railway Deployment Setup
**Date:** December 2025
**Status:** Completed ✓

This document tracks all changes made during the initial setup and Railway deployment configuration of the Episolve LLC corporate website.

---

## Summary of Changes

This project started as "spike-test" (a Payload CMS website template) and was transformed into the Episolve LLC corporate website with full Railway deployment support.

### Repository & Project Renaming
- **Local project directory:** Renamed from `spike-test` to `episolve-website`
- **GitHub repository:** Renamed from `spike-test` to `episolve-website`
- **Package name:** Updated from "spike-test" to "episolve-website"
- **Package description:** Updated to "Episolve LLC corporate website built with Payload CMS"

### Railway Deployment Configuration
Configured the project for Railway deployment with PostgreSQL database, solving the critical issue of database connectivity during build phases.

### Branding Assets & Documentation
Organized all Episolve LLC branding materials with comprehensive documentation for logos, colors, and favicon implementation.

---

## Detailed Change History

### Commit: f36e2cc - `chore: rename project to episolve-website`
**Files Modified:**
- `package.json`
  - Changed `name` from "spike-test" to "episolve-website"
  - Updated `description` to "Episolve LLC corporate website built with Payload CMS"

**Additional Changes (not committed):**
- Git remote URL updated to `https://github.com/epi-claude/episolve-website.git`
- GitHub repository renamed to `episolve-website`

---

### Commit: 15c5b5b - `docs: add Railway deployment documentation`
**Files Created:**
- `RAILWAY_DEPLOYMENT.md` - Comprehensive Railway deployment guide
- `.claude/DEPLOYMENT_NOTES.md` - AI assistant reference for deployment patterns

**Content:**
- Documented the critical Railway limitation: private networking unavailable during build
- Provided solution pattern using `dynamic = 'force-dynamic'`
- Included step-by-step deployment instructions
- Added troubleshooting guide
- Documented environment variable configuration

---

### Commit: e8efaf8 - `fix: force dynamic rendering at layout level`
**Files Modified:**
- `src/app/(frontend)/layout.tsx`

**Changes:**
```typescript
// Added at top of file
export const dynamic = 'force-dynamic'
```

**Purpose:** Forces Next.js to render all pages on-demand at runtime instead of during build time, preventing database connection attempts during Railway's build phase.

---

### Commit: b17152c - `fix: skip generateStaticParams during Railway build`
**Files Modified:**
- `src/app/(frontend)/[slug]/page.tsx`
- `src/app/(frontend)/posts/page/[pageNumber]/page.tsx`
- `src/app/(frontend)/posts/[slug]/page.tsx`

**Pattern Applied:**
```typescript
export async function generateStaticParams() {
  if (process.env.RAILWAY_ENVIRONMENT) {
    return []
  }
  // ... rest of static params logic
}
```

**Purpose:** Prevents static parameter generation during Railway builds, which would require database access unavailable at build time.

---

### Commit: 107c10a - `fix: force dynamic rendering to skip database during build`
**Files Modified:**
- `src/app/(frontend)/[slug]/page.tsx`
- `src/app/(frontend)/posts/page/[pageNumber]/page.tsx`
- `src/app/(frontend)/posts/[slug]/page.tsx`

**Changes:**
```typescript
// Added to each page file
export const dynamic = 'force-dynamic'
```

**Purpose:** Page-level dynamic rendering enforcement (later consolidated at layout level in commit e8efaf8).

---

### Commit: fb30c54 - `fix: let nixpacks auto-detect pnpm configuration`
**Files Modified:**
- Removed custom nixpacks configuration

**Purpose:** Allow Railway's Nixpacks build system to automatically detect pnpm version from `package.json#packageManager` field.

---

### Commit: 515a88b - `fix: specify pnpm version and remove corepack dependency`
**Files Modified:**
- `package.json`

**Changes:**
- Specified `"packageManager": "pnpm@9.15.0"`
- Adjusted pnpm configuration for Railway compatibility

---

### Commit: 6bc6495 - `fix: force pnpm usage on Railway deployment`
**Purpose:** Initial attempt to configure pnpm for Railway deployment.

---

### Commit: 680e29c - `fix: configure Railway deployment for pnpm`
**Purpose:** Early Railway deployment configuration experiments.

---

### Commit: 7224001 - `chore: add pnpm lock file and database migrations`
**Files Added:**
- `pnpm-lock.yaml` - Lockfile for deterministic dependency installation
- Database migration files

**Purpose:** Ensure consistent dependency versions across environments and prepare database schema.

---

### Commit: feaed4b - `fix: update payload-types.ts to use correct ID types`
**Files Modified:**
- `payload-types.ts`

**Purpose:** Corrected TypeScript type definitions for Payload CMS collections.

---

### Commit: 9019906 - `feat: initial commit`
**Description:** Initial project setup using Payload CMS website template.

---

### Branding Setup - `docs: organize branding assets and documentation`
**Date:** December 2, 2025
**Status:** Documentation Complete

**Directory Structure Created:**
```
/public/branding/
  /logos/           - 15 logo variations (color, black, layouts)
  /icons/           - Favicon assets (ready for icons)
  /pantone-colors/  - Official Pantone color files
  color-palette.md  - Complete color specifications
  README.md         - Production assets guide

/docs/branding/
  README.md                              - Branding overview
  ASSET-INVENTORY.md                     - Complete logo inventory
  FAVICON-SETUP.md                       - Favicon implementation guide
  episolve-reference-color-palette-1.png - Color reference
  episolve-reference-site-aesthetics.png - Design reference
```

**Files Created/Modified:**
- `/public/branding/color-palette.md` - Comprehensive color documentation
  - Official Pantone colors (295 U Navy, 101 U Yellow)
  - Extended digital palette with hex/RGB values
  - Usage guidelines and accessibility notes
  - CSS variables and Tailwind configuration

- `/docs/branding/ASSET-INVENTORY.md` - Logo asset inventory
  - 15 logo variations documented
  - Usage guidelines for each variation
  - File format recommendations
  - Quick reference selector table

- `/docs/branding/FAVICON-SETUP.md` - Favicon implementation guide
  - Current favicon configuration analysis
  - Step-by-step replacement instructions
  - Required icon sizes and formats
  - Metadata configuration examples

- `/docs/branding/README.md` - Branding overview
  - Quick reference guide
  - Brand identity summary
  - Implementation checklist
  - Development usage examples

**Assets Organized:**
- 15 logo files (PNG format)
  - 5 black variations (epiSolveLogoBlack-01 to 05)
  - 5 color variations (epiSolveLogoColor-06 to 10)
  - 3 standard layouts (horizontal, square, primary)
  - 2 favicon files
- 4 Pantone color reference files (PDF, PNG, PSD, ZIP)
- 2 design reference images

**Brand Colors Documented:**
- Primary: Navy Blue (#254071) + Bright Yellow (#FDFC8C)
- Extended: Medium Blue, Light Blue, Pale Blue, Gold
- Supporting: Full neutral palette (blacks, grays, whites)

**Purpose:**
- Centralize all branding assets in organized structure
- Provide comprehensive documentation for developers
- Enable consistent brand implementation across site
- Prepare for favicon replacement and metadata updates

---

## Key Technical Decisions

### 1. Dynamic Rendering Strategy
**Decision:** Use `dynamic = 'force-dynamic'` at the layout level instead of individual pages.

**Rationale:**
- Railway's private networking (`.railway.internal` domains) is NOT available during build phase
- Static page generation requires database access, which fails during Railway builds
- Layout-level enforcement is cleaner than page-level configuration

**Trade-offs:**
- No static generation benefits (pre-rendered pages)
- All pages render on-demand at runtime
- Acceptable for content-managed sites where content changes frequently

### 2. Environment-Specific Static Params
**Decision:** Check for `RAILWAY_ENVIRONMENT` before generating static params.

**Rationale:**
- Allows local development to still use static generation if desired
- Production deployment skips build-time database queries
- Future flexibility for other deployment platforms

### 3. Package Manager Configuration
**Decision:** Use `packageManager` field instead of custom Nixpacks configuration.

**Rationale:**
- Railway's Nixpacks auto-detects pnpm from `package.json`
- Simpler, more maintainable approach
- Follows Node.js ecosystem standards

---

## Configuration Requirements

### Environment Variables (Railway)
The following must be set in Railway dashboard:

```bash
PAYLOAD_SECRET=<generated-secret>
CRON_SECRET=<generated-secret>
PREVIEW_SECRET=<generated-secret>
NEXT_PUBLIC_SERVER_URL=${{RAILWAY_PUBLIC_DOMAIN}}
DATABASE_URI=${{Postgres.DATABASE_PRIVATE_URL}}
```

### Services Required
- **PostgreSQL Database** - Added as Railway service
- **Web Service** - Next.js/Payload application

---

## Files Added/Modified Summary

### Created Files
- `RAILWAY_DEPLOYMENT.md` - Deployment documentation
- `.claude/DEPLOYMENT_NOTES.md` - AI assistant notes
- `pnpm-lock.yaml` - Dependency lockfile
- Database migration files
- `docs/CHANGELOG.md` - This file

### Modified Files
- `package.json` - Project metadata and pnpm configuration
- `src/app/(frontend)/layout.tsx` - Dynamic rendering
- `src/app/(frontend)/[slug]/page.tsx` - Static params skip
- `src/app/(frontend)/posts/page/[pageNumber]/page.tsx` - Static params skip
- `src/app/(frontend)/posts/[slug]/page.tsx` - Static params skip
- `payload-types.ts` - Type corrections

---

## Known Limitations

### Railway Build System
- Private networking unavailable during build phase
- Cron jobs may be limited to daily frequency on certain plans
- One-time migration commands require CLI or dashboard workaround

### Static Generation
- No static page generation during build
- All pages render on-demand
- May have slight performance impact vs. static generation

---

## Next Steps (Planned)

These are documented in separate planning documents:
- `/docs/episolve-project-charter.md`
- `/docs/episolve-prd.md`

Future development will follow the project charter and PRD specifications.

---

## References

### Documentation Files
- `RAILWAY_DEPLOYMENT.md` - Full Railway deployment guide
- `.claude/DEPLOYMENT_NOTES.md` - Technical pattern notes
- `README.md` - Original Payload template documentation

### External Resources
- [Railway Documentation](https://docs.railway.app/)
- [Payload CMS Documentation](https://payloadcms.com/docs)
- [Next.js App Router](https://nextjs.org/docs/app)

---

**Document Version:** 1.0
**Last Updated:** December 2, 2025
**Maintained By:** Episolve LLC Development Team
