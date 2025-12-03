# epiSolve Website Rebuild — Project Charter

**Document Version:** 1.0  
**Last Updated:** December 2, 2024  
**Status:** Planning

---

## 1. Project Overview

**Project Name:** epiSolve Website Rebuild  
**Domain:** episolve.com (production) | dev.episolve.com (development)  
**Tagline:** "Technology Solutions for Business Problems"  
**Alt Tagline:** "You work, we IT."

### 1.1 Business Context

epiSolve is a Technology Consulting business serving as outsourced IT for small-to-midsize enterprises. The company helps clients understand, evaluate, and deploy technical solutions.

**Target Market:**
- Primary: Family-run businesses, $5M–$250M revenue, without rigid corporate structures
- Secondary: Non-profits, $5M–$100M
- Geography: NYC/NJ Tristate region, with emphasis on Newark, NJ (not exclusively)

**Strategic Pivot:**
- Deprecating: Google Partners line of business
- Adding: AI practice (helping non-technical businesses understand and adopt AI)
- Maintaining: Core IT consulting, software development, integration services

---

## 2. Technical Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| CMS/Backend | Payload CMS 3.0 | Content management, API, auth, collections |
| Frontend | Next.js 14 (App Router) | SSR/SSG, routing, React components |
| Database | PostgreSQL | Persistent storage (hosted on Railway) |
| Backend Hosting | Railway | Payload + Postgres |
| Frontend Hosting | Vercel | Next.js edge deployment |
| Styling | Tailwind CSS | Utility-first CSS |
| Integrations | HighLevel, Airtable (optional) | CRM, marketing automation |
| Email | Resend (recommended) | Transactional emails |
| Remote Support | ScreenConnect | Existing at help.episolve.com |

### 2.1 Why This Stack

- **Payload CMS:** Non-technical team members edit content; developers extend via code
- **Next.js:** Handles brochure pages today, scales to authenticated portals tomorrow
- **Platform-agnostic integrations:** API-first approach allows swapping HighLevel/Airtable as needed
- **Cost-effective:** ~$10-20/mo infrastructure vs. WordPress plugin licensing

---

## 3. Site Architecture

### 3.1 Core Pages (Phase 1)

| Page | Purpose | Lead Gen Element |
|------|---------|------------------|
| Home | Hero, value prop, services overview, social proof | CTA to consultation |
| About | Company story, team, values | — |
| Services | Service offerings with detail pages | Contact form per service |
| AI Practice | New service line (TBD specifics) | Newsletter signup |
| Contact | Form, location, booking | Primary contact form |
| Blog/Insights | Thought leadership, SEO | Newsletter signup |

### 3.2 Suggested Additional Pages

| Page | Rationale |
|------|-----------|
| Case Studies | Social proof for enterprise buyers; family businesses want to see relatable wins |
| Industries | Targeted messaging for verticals (non-profit, manufacturing, professional services) |
| Resources/FAQ | Self-service answers; reduces unqualified inquiries |
| Careers | Even if not hiring now, signals growth; attracts opportunistic talent |
| Client Portal (Phase 2) | Project status, documents, support ticket initiation |

### 3.3 URL Structure

```
/                     → Home
/about                → About
/services             → Services overview
/services/[slug]      → Individual service detail
/ai                   → AI Practice landing
/insights             → Blog listing
/insights/[slug]      → Blog post
/case-studies         → Case studies listing
/case-studies/[slug]  → Individual case study
/contact              → Contact page
/resources            → FAQ / Resources
/portal               → Client portal (Phase 2, authenticated)
```

---

## 4. Payload Collections

### 4.1 Content Collections

| Collection | Purpose | Fields (core) |
|------------|---------|---------------|
| Pages | Static pages | title, slug, content (blocks), meta |
| Services | Service offerings | title, slug, description, icon, features, cta |
| Posts | Blog/insights | title, slug, content, author, publishedAt, categories |
| CaseStudies | Client success stories | title, client, industry, challenge, solution, results, testimonial |
| Team | Team members | name, role, bio, photo, linkedin |

### 4.2 Functional Collections

| Collection | Purpose | Fields (core) |
|------------|---------|---------------|
| Leads | Form submissions | name, email, phone, source, service, message, status |
| Subscribers | Newsletter signups | email, subscribedAt, source |
| Clients | Client portal users (Phase 2) | company, contacts[], projects[], documents[] |

### 4.3 Global Settings

| Global | Purpose |
|--------|---------|
| SiteSettings | Logo, tagline, social links, contact info |
| Navigation | Header/footer nav structure |
| SEO | Default meta, OG images |

---

## 5. Integrations Architecture

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   Next.js       │     │   Payload CMS   │     │   PostgreSQL    │
│   (Frontend)    │◄───►│   (API/Admin)   │◄───►│   (Railway)     │
└────────┬────────┘     └────────┬────────┘     └─────────────────┘
         │                       │
         │                       │ Webhooks / API
         │                       ▼
         │              ┌─────────────────┐
         │              │   HighLevel     │
         │              │   (CRM)         │
         │              └─────────────────┘
         │                       │
         │                       │ (Optional)
         │                       ▼
         │              ┌─────────────────┐
         │              │   Airtable      │
         │              │   (Lightweight) │
         │              └─────────────────┘
         │
         │ Transactional
         ▼
┌─────────────────┐
│   Resend        │
│   (Email)       │
└─────────────────┘
```

### 5.1 Integration Details

**Lead Flow:**
1. User submits form on Next.js frontend
2. Next.js API route validates, saves to Payload Leads collection
3. Payload hook triggers:
   - Sends confirmation email via Resend
   - POSTs to HighLevel API (creates/updates contact)
   - Optionally syncs to Airtable

**Newsletter Flow:**
1. User submits email
2. Saved to Subscribers collection
3. Synced to HighLevel for email sequences

**Consultation Booking:**
- Embed HighLevel calendar widget or use Cal.com (open source alternative)
- Booking creates lead in HighLevel automatically

---

## 6. Design Direction

### 6.1 Reference Aesthetic

Based on provided Dribbble references, the direction synthesizes:
- Clean, modern layouts with generous whitespace
- Bold typography hierarchy
- Subtle gradients and depth (not flat)
- Professional but not corporate-stiff
- Tech-forward without being cold

### 6.2 Design Principles for epiSolve

| Principle | Application |
|-----------|-------------|
| Approachable expertise | Warm colors balanced with tech credibility |
| Family-business friendly | Avoid sterile corporate aesthetic; add human touches |
| Regional trust | Subtle NYC/NJ cues without being kitschy |
| AI-ready | Modern enough to credibly sell AI services |

### 6.3 Existing Brand Assets

- Logo: To be incorporated
- Color palette: Existing (to be documented)
- Typography: TBD (evaluate existing vs. refresh)

**Action:** Upload existing brand assets for design system creation.

---

## 7. Content Workflow

### 7.1 Roles

| Role | Permissions | People |
|------|-------------|--------|
| Admin | Full access | Project lead |
| Editor | Create, edit, publish content | Internal team |
| Author | Create, edit own content (needs approval) | Contributors |

### 7.2 Workflow States

```
Draft → Ready for Review → Published
         ↓
       Revisions Requested
```

Payload supports draft/publish natively. We'll configure:
- `_status` field on content collections
- Admin UI shows pending items
- Optional: Slack notification on "Ready for Review"

### 7.3 Flexible Approval

- Blog posts, case studies: Review recommended
- Minor page edits: Direct publish OK for Editors
- Service/pricing changes: Admin approval required

---

## 8. Transactional Email Recommendation

### 8.1 Provider: Resend

| Factor | Resend |
|--------|--------|
| Free tier | 3,000 emails/month |
| Paid | $20/mo for 50k emails |
| Developer experience | Excellent (React Email templates) |
| Deliverability | Strong |
| Setup complexity | Low |

**Alternatives considered:**
- Postmark: Better deliverability reputation, higher cost
- SendGrid: Feature-rich, complex, overkill for your volume
- AWS SES: Cheapest at scale, more setup

**Recommendation:** Start with Resend free tier. Upgrade if volume exceeds 3k/month.

### 8.2 Email Templates Needed

| Email | Trigger |
|-------|---------|
| Contact form confirmation | Lead submitted |
| Consultation booked | Calendar event created |
| Newsletter welcome | Subscriber added |
| Internal notification | New lead (to team) |

---

## 9. Phase Plan

### Phase 1: Foundation (Current → 2 weeks)

- [ ] Finalize site architecture (this document)
- [ ] Configure Payload collections
- [ ] Set up dev.episolve.com DNS
- [ ] Import existing brand assets
- [ ] Create design system / component library
- [ ] Build core page templates

### Phase 2: Content & Design (2 weeks)

- [ ] Migrate existing content
- [ ] Design and build Home page
- [ ] Design and build Services pages
- [ ] Design and build About page
- [ ] Design and build Contact page
- [ ] Implement lead capture forms

### Phase 3: Integrations (1 week)

- [ ] HighLevel API integration
- [ ] Resend email setup
- [ ] Newsletter signup flow
- [ ] Consultation booking widget

### Phase 4: Polish & Launch (1 week)

- [ ] SEO optimization
- [ ] Performance audit
- [ ] Cross-browser testing
- [ ] Analytics setup
- [ ] DNS cutover to production
- [ ] Launch

### Phase 5: Post-Launch (Ongoing)

- [ ] AI Practice page buildout
- [ ] Case studies
- [ ] Blog content
- [ ] Client portal (longer term)

---

## 10. Open Questions

| Question | Status | Notes |
|----------|--------|-------|
| HighLevel API access/credentials | Pending | Need to confirm API tier |
| Airtable: use case specifics | Pending | Lightweight CRM backup or specific workflow? |
| AI Practice: service definition | Pending | Blocks page buildout until clearer |
| Existing analytics to preserve | Pending | GA4? Other? |
| Consultation booking tool preference | Pending | HighLevel native vs. Cal.com |

---

## 11. Team & Access

| Person | Role | Access Needed |
|--------|------|---------------|
| TBD | Project Lead | Railway, Vercel, Payload Admin, Repo |
| TBD | Developer(s) | Repo, Payload Admin |
| TBD | Content Editor(s) | Payload Admin (Editor role) |

---

## 12. Repository Structure (Recommended)

```
episolve-web/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── (frontend)/         # Public pages
│   │   ├── (portal)/           # Authenticated pages (Phase 2)
│   │   └── api/                # API routes
│   ├── collections/            # Payload collections
│   ├── components/             # React components
│   │   ├── ui/                 # Base UI components
│   │   ├── blocks/             # Payload block components
│   │   └── layout/             # Header, Footer, etc.
│   ├── lib/                    # Utilities, API clients
│   └── styles/                 # Global styles, Tailwind config
├── public/                     # Static assets
├── payload.config.ts           # Payload configuration
├── tailwind.config.ts          # Tailwind configuration
└── package.json
```

---

## Appendix A: Content Migration Checklist

From episolve.com (WordPress):

| Content | Migrate? | Notes |
|---------|----------|-------|
| Home page copy | Yes | Refresh messaging |
| About content | Yes | Review for updates |
| Services descriptions | Partial | Deprecate Google Partners |
| Blog posts | Yes | If any exist |
| Team bios | Yes | Update if needed |
| Images/media | Yes | Audit quality |
| Google Partners content | No | Deprecating |

---

## Appendix B: Design Reference Notes

**Reference 1 (Medical/Healthcare):**
- Clean sectioning
- Trust indicators prominent
- Service cards with icons

**Reference 2 (AI Platform):**
- Modern, tech-forward
- Dark mode option
- Animated elements

**Reference 3 (Education Landing):**
- Strong typography hierarchy
- Clear CTAs
- Testimonial integration

**Synthesis for epiSolve:**
- Professional but warm
- Modern tech aesthetic (supports AI practice credibility)
- Clear service presentation
- Trust signals (testimonials, case studies) prominent
- Not cold/corporate — approachable for family businesses
