# epiSolve Website — Product Requirements Document

**Document Version:** 1.0  
**Last Updated:** December 2, 2024  
**Status:** Draft  
**Related:** episolve-project-charter.md

---

## 1. Overview

### 1.1 Product Summary

A modern, conversion-focused website for epiSolve LLC that:
- Communicates the company's technology consulting services
- Generates qualified leads through forms and consultation booking
- Supports content publishing for thought leadership
- Provides foundation for future client portal

### 1.2 Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Lead form submissions | Baseline + 20% | Payload Leads collection |
| Consultation bookings | 4+ per month | HighLevel/Calendar |
| Page load time | < 2s (LCP) | Vercel Analytics |
| Content publish frequency | 2+ posts/month | Payload |
| Team adoption | All editors comfortable in 1 week | Qualitative |

---

## 2. User Personas

### 2.1 Primary: Business Decision Maker

**Profile:** Owner, CEO, or Operations Director at a family-run business ($5M–$250M revenue)

**Goals:**
- Find a trustworthy IT partner who understands their business
- Understand what services are offered without technical jargon
- Quickly assess credibility (case studies, testimonials)
- Easy way to initiate conversation

**Frustrations:**
- Overly technical websites that don't speak to business outcomes
- Complicated contact processes
- Vendors who feel too "corporate" or impersonal

### 2.2 Secondary: Non-Profit Administrator

**Profile:** Executive Director or IT lead at a non-profit ($5M–$100M)

**Goals:**
- Find cost-effective IT support
- Verify experience with non-profit sector
- Understand pricing/engagement models

### 2.3 Internal: Content Editor

**Profile:** epiSolve team member responsible for content updates

**Goals:**
- Update page content without developer help
- Publish blog posts with minimal friction
- Preview changes before publishing

**Frustrations:**
- Complex CMS interfaces
- Needing to ask developers for simple changes

### 2.4 Internal: Developer

**Profile:** epiSolve technical team member

**Goals:**
- Extend functionality with clean code
- Use Claude Code effectively
- Deploy changes confidently

---

## 3. Feature Requirements — Phase 1

### 3.1 Global Components

#### 3.1.1 Header Navigation

**User Story:**  
As a visitor, I can navigate to any main section of the site from any page.

**Requirements:**
- Logo (links to home)
- Primary nav: Services, About, Insights, Contact
- CTA button: "Book a Consultation" (persistent)
- Mobile: Hamburger menu with full nav
- Sticky on scroll (optional, design decision)

**Acceptance Criteria:**
- [ ] Logo renders, links to /
- [ ] All nav links route correctly
- [ ] CTA button visible on all viewport sizes
- [ ] Mobile menu opens/closes smoothly
- [ ] Current page indicated in nav

#### 3.1.2 Footer

**User Story:**  
As a visitor, I can find contact info, secondary links, and social profiles in the footer.

**Requirements:**
- Company info: Address, phone, email
- Nav links: Services, About, Contact, Privacy Policy
- Social links: LinkedIn (others TBD)
- Newsletter signup (inline form)
- Copyright notice

**Acceptance Criteria:**
- [ ] All links functional
- [ ] Newsletter form submits successfully
- [ ] Social links open in new tab
- [ ] Responsive layout

#### 3.1.3 SEO & Meta

**User Story:**  
As a search engine, I can properly index and display the site in results.

**Requirements:**
- Unique title and description per page
- Open Graph tags for social sharing
- Canonical URLs
- Sitemap.xml auto-generated
- robots.txt configured

**Acceptance Criteria:**
- [ ] Each page has unique meta title (< 60 chars)
- [ ] Each page has unique meta description (< 160 chars)
- [ ] OG image defaults to branded image, overridable per page
- [ ] Sitemap accessible at /sitemap.xml
- [ ] Social share preview renders correctly

---

### 3.2 Home Page

**URL:** /

**User Story:**  
As a visitor, I can quickly understand what epiSolve does, who they serve, and how to engage.

#### 3.2.1 Hero Section

**Requirements:**
- Headline: Value proposition (editable in CMS)
- Subheadline: Supporting text
- Primary CTA: "Book a Consultation"
- Secondary CTA: "Our Services"
- Visual: Image or subtle animation (not stock-photo heavy)

**Acceptance Criteria:**
- [ ] Headline, subheadline editable in Payload
- [ ] Both CTAs link correctly
- [ ] Renders well on mobile (stacked layout)
- [ ] Load time < 1s for hero content

#### 3.2.2 Services Overview

**Requirements:**
- Display 3–4 featured services
- Each: Icon, title, short description, link to detail page
- "View All Services" link

**Acceptance Criteria:**
- [ ] Services pulled from Payload Services collection
- [ ] "Featured" flag determines which appear
- [ ] Links route to /services/[slug]

#### 3.2.3 Value Proposition / Why Us

**Requirements:**
- 3–4 differentiators (editable)
- Icon + title + description format
- Optional: Stats/numbers (years in business, clients served)

**Acceptance Criteria:**
- [ ] Content editable in Payload (Global or Page blocks)
- [ ] Responsive grid layout

#### 3.2.4 Social Proof

**Requirements:**
- Client logos (if permitted) OR testimonial quotes
- Link to Case Studies (when available)

**Acceptance Criteria:**
- [ ] Logos/testimonials editable in Payload
- [ ] Testimonial includes: quote, name, title, company
- [ ] Graceful display if no testimonials yet

#### 3.2.5 CTA Banner

**Requirements:**
- Pre-footer banner with conversion CTA
- Headline + button ("Let's Talk", "Get Started")

**Acceptance Criteria:**
- [ ] Content editable
- [ ] Button links to /contact or opens booking modal

---

### 3.3 Services Pages

#### 3.3.1 Services Listing

**URL:** /services

**User Story:**  
As a visitor, I can see all services offered and select one to learn more.

**Requirements:**
- Grid or list of all services
- Each card: Icon, title, short description, link
- Category filtering (optional Phase 1)

**Acceptance Criteria:**
- [ ] All published services display
- [ ] Cards link to /services/[slug]
- [ ] Responsive layout

#### 3.3.2 Service Detail Page

**URL:** /services/[slug]

**User Story:**  
As a visitor, I can understand a specific service in depth and request it.

**Requirements:**
- Title, full description (rich text)
- Features/benefits list
- Related services (optional)
- CTA: Contact form or "Request this Service" button

**Acceptance Criteria:**
- [ ] Content from Payload Services collection
- [ ] Rich text renders correctly (headings, lists, links)
- [ ] CTA button scrolls to form or links to /contact?service=[slug]
- [ ] 404 for invalid slugs

---

### 3.4 About Page

**URL:** /about

**User Story:**  
As a visitor, I can learn about epiSolve's history, values, and team to assess fit.

**Requirements:**
- Company story section (rich text)
- Mission/values section
- Team members grid
- Optional: Timeline or milestones

**Acceptance Criteria:**
- [ ] Story content editable in Payload
- [ ] Team members pulled from Team collection
- [ ] Each team member: Photo, name, role, bio (expandable or modal)
- [ ] Responsive layout

---

### 3.5 Contact Page

**URL:** /contact

**User Story:**  
As a visitor, I can easily contact epiSolve through my preferred method.

#### 3.5.1 Contact Form

**Fields:**
| Field | Type | Required | Validation |
|-------|------|----------|------------|
| Name | Text | Yes | Min 2 chars |
| Email | Email | Yes | Valid email format |
| Phone | Tel | No | Valid phone format |
| Company | Text | No | — |
| Service Interest | Select | No | Options from Services collection |
| Message | Textarea | Yes | Min 10 chars |

**Acceptance Criteria:**
- [ ] Client-side validation with clear error messages
- [ ] Server-side validation (API route)
- [ ] On success: Show confirmation message, clear form
- [ ] On error: Show error message, preserve input
- [ ] Submission creates Lead in Payload
- [ ] Confirmation email sent to user (Resend)
- [ ] Notification email sent to team

#### 3.5.2 Contact Information

**Requirements:**
- Address (with map embed optional)
- Phone number (click-to-call on mobile)
- Email (mailto link)
- Business hours (if applicable)

**Acceptance Criteria:**
- [ ] Info pulled from SiteSettings global
- [ ] Phone/email are interactive links

#### 3.5.3 Consultation Booking

**Requirements:**
- Embedded calendar widget (HighLevel or Cal.com)
- OR link to external booking page

**Acceptance Criteria:**
- [ ] Widget loads without layout shift
- [ ] Booking creates contact in HighLevel
- [ ] Fallback if widget fails to load

---

### 3.6 Blog / Insights

#### 3.6.1 Insights Listing

**URL:** /insights

**User Story:**  
As a visitor, I can browse articles to assess epiSolve's expertise.

**Requirements:**
- List of published posts (newest first)
- Each card: Title, excerpt, date, category, featured image
- Pagination (10 per page) or infinite scroll

**Acceptance Criteria:**
- [ ] Only published posts display
- [ ] Cards link to /insights/[slug]
- [ ] Pagination works correctly
- [ ] Empty state if no posts

#### 3.6.2 Insights Detail

**URL:** /insights/[slug]

**User Story:**  
As a visitor, I can read a full article and take a next action.

**Requirements:**
- Title, author, date, category
- Featured image
- Rich text content (headings, images, code blocks, links)
- Share buttons (LinkedIn, Twitter, copy link)
- Related posts (optional)
- CTA: Newsletter signup or contact

**Acceptance Criteria:**
- [ ] Content renders from Payload Posts collection
- [ ] Rich text supports all standard elements
- [ ] Share buttons function correctly
- [ ] Newsletter form inline works
- [ ] 404 for invalid/unpublished slugs

---

### 3.7 Newsletter Signup

**User Story:**  
As a visitor, I can subscribe to updates with just my email.

**Locations:**
- Footer (all pages)
- Insights detail page
- Dedicated section on Home (optional)

**Fields:**
| Field | Type | Required |
|-------|------|----------|
| Email | Email | Yes |

**Acceptance Criteria:**
- [ ] Valid email required
- [ ] Duplicate email handled gracefully ("Already subscribed")
- [ ] Creates record in Payload Subscribers collection
- [ ] Syncs to HighLevel (tag: "Newsletter")
- [ ] Welcome email sent via Resend
- [ ] Success message displayed

---

## 4. Feature Requirements — Phase 2 (Post-Launch)

### 4.1 Case Studies

**URL:** /case-studies, /case-studies/[slug]

**Requirements:**
- Listing page with filters (industry, service)
- Detail page: Client, challenge, solution, results, testimonial
- PDF download option (optional)

### 4.2 AI Practice Page

**URL:** /ai

**Requirements:**
- Dedicated landing for AI consulting services
- Content TBD pending service definition
- Lead magnet (guide download, assessment tool)

### 4.3 Client Portal

**URL:** /portal (authenticated)

**Requirements:**
- Login via Payload auth
- Dashboard: Active projects, recent documents
- Project detail: Status, timeline, deliverables
- Document library: Download files
- Support: Link to help.episolve.com or embedded ticket form

### 4.4 Industries Pages

**URL:** /industries/[slug]

**Requirements:**
- Targeted landing pages per vertical
- Customized messaging for: Non-profits, Manufacturing, Professional Services, etc.

---

## 5. Payload Collections — Detailed Specs

### 5.1 Pages Collection

```typescript
{
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', '_status', 'updatedAt'],
  },
  versions: {
    drafts: true,
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    { 
      name: 'content', 
      type: 'blocks',
      blocks: [HeroBlock, ContentBlock, CTABlock, TeamGridBlock, ServicesGridBlock]
    },
    { name: 'meta', type: 'group', fields: [
      { name: 'title', type: 'text' },
      { name: 'description', type: 'textarea' },
      { name: 'image', type: 'upload', relationTo: 'media' },
    ]},
  ],
}
```

### 5.2 Services Collection

```typescript
{
  slug: 'services',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'featured', '_status'],
  },
  versions: {
    drafts: true,
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'shortDescription', type: 'textarea', required: true, maxLength: 200 },
    { name: 'description', type: 'richText', required: true },
    { name: 'icon', type: 'text' }, // Icon name from icon library
    { name: 'features', type: 'array', fields: [
      { name: 'title', type: 'text' },
      { name: 'description', type: 'textarea' },
    ]},
    { name: 'featured', type: 'checkbox', defaultValue: false },
    { name: 'order', type: 'number' },
    { name: 'meta', type: 'group', fields: [
      { name: 'title', type: 'text' },
      { name: 'description', type: 'textarea' },
    ]},
  ],
}
```

### 5.3 Posts Collection

```typescript
{
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'author', 'publishedAt', '_status'],
  },
  versions: {
    drafts: true,
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'excerpt', type: 'textarea', maxLength: 300 },
    { name: 'content', type: 'richText', required: true },
    { name: 'featuredImage', type: 'upload', relationTo: 'media' },
    { name: 'author', type: 'relationship', relationTo: 'team' },
    { name: 'categories', type: 'relationship', relationTo: 'categories', hasMany: true },
    { name: 'publishedAt', type: 'date', required: true },
    { name: 'meta', type: 'group', fields: [
      { name: 'title', type: 'text' },
      { name: 'description', type: 'textarea' },
    ]},
  ],
}
```

### 5.4 Team Collection

```typescript
{
  slug: 'team',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'role', 'order'],
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'role', type: 'text', required: true },
    { name: 'bio', type: 'textarea' },
    { name: 'photo', type: 'upload', relationTo: 'media' },
    { name: 'linkedin', type: 'text' },
    { name: 'email', type: 'email' },
    { name: 'order', type: 'number', defaultValue: 0 },
  ],
}
```

### 5.5 Leads Collection

```typescript
{
  slug: 'leads',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['name', 'email', 'source', 'status', 'createdAt'],
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'email', type: 'email', required: true },
    { name: 'phone', type: 'text' },
    { name: 'company', type: 'text' },
    { name: 'service', type: 'relationship', relationTo: 'services' },
    { name: 'message', type: 'textarea', required: true },
    { name: 'source', type: 'select', options: [
      { label: 'Website Contact Form', value: 'contact_form' },
      { label: 'Service Page', value: 'service_page' },
      { label: 'Newsletter', value: 'newsletter' },
      { label: 'HighLevel', value: 'highlevel' },
      { label: 'Manual', value: 'manual' },
    ], defaultValue: 'contact_form' },
    { name: 'status', type: 'select', options: [
      { label: 'New', value: 'new' },
      { label: 'Contacted', value: 'contacted' },
      { label: 'Qualified', value: 'qualified' },
      { label: 'Converted', value: 'converted' },
      { label: 'Closed', value: 'closed' },
    ], defaultValue: 'new' },
    { name: 'notes', type: 'textarea' },
    { name: 'highLevelId', type: 'text', admin: { readOnly: true } },
  ],
  hooks: {
    afterChange: [
      // Trigger: Send to HighLevel
      // Trigger: Send notification email
    ],
  },
}
```

### 5.6 Subscribers Collection

```typescript
{
  slug: 'subscribers',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'source', 'createdAt'],
  },
  fields: [
    { name: 'email', type: 'email', required: true, unique: true },
    { name: 'source', type: 'select', options: [
      { label: 'Footer', value: 'footer' },
      { label: 'Blog Post', value: 'blog' },
      { label: 'Home Page', value: 'home' },
    ]},
    { name: 'highLevelId', type: 'text', admin: { readOnly: true } },
  ],
  hooks: {
    afterChange: [
      // Trigger: Sync to HighLevel
      // Trigger: Send welcome email
    ],
  },
}
```

### 5.7 Categories Collection

```typescript
{
  slug: 'categories',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
  ],
}
```

### 5.8 Media Collection

```typescript
{
  slug: 'media',
  upload: {
    staticDir: 'media',
    imageSizes: [
      { name: 'thumbnail', width: 300, height: 300, position: 'center' },
      { name: 'card', width: 600, height: 400, position: 'center' },
      { name: 'hero', width: 1920, height: 1080, position: 'center' },
    ],
    mimeTypes: ['image/*', 'application/pdf'],
  },
  fields: [
    { name: 'alt', type: 'text', required: true },
    { name: 'caption', type: 'text' },
  ],
}
```

---

## 6. API Routes — Specs

### 6.1 Contact Form Submission

**Endpoint:** POST /api/contact

**Request:**
```json
{
  "name": "string, required",
  "email": "string, required, valid email",
  "phone": "string, optional",
  "company": "string, optional",
  "service": "string, optional, service slug",
  "message": "string, required, min 10 chars"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Thank you for your message. We'll be in touch soon."
}
```

**Response (Validation Error):**
```json
{
  "success": false,
  "errors": {
    "email": "Please enter a valid email address",
    "message": "Message must be at least 10 characters"
  }
}
```

**Side Effects:**
1. Create Lead in Payload
2. POST to HighLevel API (create/update contact)
3. Send confirmation email to user (Resend)
4. Send notification email to team (Resend)

### 6.2 Newsletter Subscription

**Endpoint:** POST /api/subscribe

**Request:**
```json
{
  "email": "string, required, valid email",
  "source": "string, optional (footer|blog|home)"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "You're subscribed! Check your email for confirmation."
}
```

**Response (Already Subscribed):**
```json
{
  "success": true,
  "message": "You're already subscribed!"
}
```

**Side Effects:**
1. Create/update Subscriber in Payload
2. POST to HighLevel API (add tag: "Newsletter")
3. Send welcome email (Resend)

---

## 7. Integration Specs

### 7.1 HighLevel Integration

**Authentication:** API Key (Bearer token)

**Endpoints Used:**
| Action | HighLevel Endpoint |
|--------|-------------------|
| Create/Update Contact | POST /contacts |
| Add Tag | POST /contacts/{id}/tags |
| Create Opportunity | POST /opportunities |

**Field Mapping (Lead → HighLevel Contact):**
| Payload Field | HighLevel Field |
|---------------|-----------------|
| name | name (split to firstName/lastName) |
| email | email |
| phone | phone |
| company | companyName |
| source | tags[] |
| message | customField.message |

**Webhook (HighLevel → Payload):**
- Event: Contact created/updated
- Action: Upsert Lead in Payload with highLevelId

### 7.2 Resend Integration

**Authentication:** API Key

**Templates:**
| Template | Trigger | To |
|----------|---------|-----|
| contact-confirmation | Lead created | Lead email |
| contact-notification | Lead created | team@episolve.com |
| newsletter-welcome | Subscriber created | Subscriber email |

---

## 8. Non-Functional Requirements

### 8.1 Performance

| Metric | Target |
|--------|--------|
| Largest Contentful Paint (LCP) | < 2.0s |
| First Input Delay (FID) | < 100ms |
| Cumulative Layout Shift (CLS) | < 0.1 |
| Time to First Byte (TTFB) | < 400ms |

### 8.2 Accessibility

- WCAG 2.1 AA compliance
- Keyboard navigable
- Screen reader compatible
- Color contrast ratios met
- Alt text on all images

### 8.3 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

### 8.4 Security

- HTTPS enforced
- Form inputs sanitized
- Rate limiting on API routes
- CSRF protection
- Environment variables for secrets
- No sensitive data in client bundle

---

## 9. Content Blocks — Design Specs

### 9.1 Hero Block

**Variants:**
- Default: Left-aligned text, right image/graphic
- Centered: Center-aligned text, background image
- Video: Background video (muted, looped)

**Fields:**
- headline (text)
- subheadline (text)
- primaryCTA (link + label)
- secondaryCTA (link + label, optional)
- backgroundImage (upload, optional)
- variant (select)

### 9.2 Content Block

**Purpose:** Rich text section with optional heading

**Fields:**
- heading (text, optional)
- content (richText)
- alignment (left | center)

### 9.3 CTA Block

**Purpose:** Conversion banner

**Fields:**
- headline (text)
- description (text, optional)
- buttonLabel (text)
- buttonLink (text)
- variant (primary | secondary)

### 9.4 Services Grid Block

**Purpose:** Display services in grid

**Fields:**
- heading (text, optional)
- services (relationship, hasMany, or "featured only" toggle)
- columns (2 | 3 | 4)

### 9.5 Team Grid Block

**Purpose:** Display team members

**Fields:**
- heading (text, optional)
- members (relationship, hasMany, or "all" toggle)

### 9.6 Testimonials Block

**Purpose:** Social proof

**Fields:**
- heading (text, optional)
- testimonials (array):
  - quote (textarea)
  - name (text)
  - title (text)
  - company (text)
  - photo (upload, optional)
- variant (carousel | grid)

### 9.7 Stats Block

**Purpose:** Key numbers

**Fields:**
- stats (array):
  - value (text, e.g., "15+")
  - label (text, e.g., "Years Experience")
- columns (2 | 3 | 4)

---

## 10. Open Items & Decisions Needed

| Item | Options | Decision | Owner |
|------|---------|----------|-------|
| Consultation booking tool | HighLevel calendar / Cal.com | Pending | Client |
| HighLevel API tier | Verify access level | Pending | Client |
| Airtable use case | Define specific workflow | Pending | Client |
| Analytics platform | GA4 / Vercel Analytics / Both | Pending | Client |
| Cookie consent | Required for GDPR if EU visitors | Recommend: Yes | Client |
| Blog launch timing | Phase 1 or defer | Recommend: Phase 1 shell, content Phase 2 | Client |

---

## Appendix A: Acceptance Testing Checklist

### Global
- [ ] Header renders on all pages
- [ ] Footer renders on all pages
- [ ] Mobile navigation works
- [ ] All internal links resolve
- [ ] 404 page displays for invalid routes
- [ ] Meta tags render correctly
- [ ] OG tags render correctly (test with social share debuggers)

### Home Page
- [ ] Hero content editable, renders correctly
- [ ] Services grid pulls featured services
- [ ] All CTAs link correctly
- [ ] Page loads < 2s

### Services
- [ ] Listing shows all published services
- [ ] Detail pages render rich text correctly
- [ ] Invalid slugs return 404

### Contact
- [ ] Form validates client-side
- [ ] Form submits successfully
- [ ] Lead created in Payload
- [ ] Confirmation email received
- [ ] Team notification received
- [ ] HighLevel contact created

### Newsletter
- [ ] Signup works from footer
- [ ] Duplicate email handled gracefully
- [ ] Welcome email received
- [ ] HighLevel tag applied

### CMS
- [ ] Content editor can create/edit pages
- [ ] Draft/publish workflow works
- [ ] Media uploads work
- [ ] Team members can log in with correct permissions
