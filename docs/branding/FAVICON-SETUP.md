# Favicon Configuration Guide

## Current Setup

The Episolve website uses Next.js favicon configuration in the root layout file.

### Files Configured
- **Location:** `/src/app/(frontend)/layout.tsx` (lines 29-30)
- **Favicon references:**
  ```tsx
  <link href="/favicon.ico" rel="icon" sizes="32x32" />
  <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
  ```

### Public Files
Located in `/public/`:
- `favicon.ico` - Legacy ICO format (32x32)
- `favicon.svg` - Modern SVG format (scalable)

---

## Episolve Favicon Assets

Available branded favicons in `/public/branding/logos/`:
- `episolve-favicon.png` - Episolve branded favicon (PNG format)
- `episolve-logo-favicon.png` - Alternative Episolve favicon

---

## Implementation Steps

### Option 1: Replace Existing Files (Quick)

Replace the existing favicon files with Episolve-branded versions:

1. **Convert PNG to ICO:**
   ```bash
   # Use online converter or ImageMagick
   convert episolve-favicon.png -define icon:auto-resize=16,32,48 favicon.ico
   ```

2. **Create SVG version:**
   - Use design software to export logo icon as SVG
   - Optimize with SVGO
   - Save as `favicon.svg`

3. **Copy to public directory:**
   ```bash
   cp favicon.ico /public/
   cp favicon.svg /public/
   ```

### Option 2: Update Layout Configuration (Recommended)

Update the layout to reference Episolve branding directly:

**File:** `/src/app/(frontend)/layout.tsx`

```tsx
<head>
  <InitTheme />
  <link href="/branding/icons/episolve-favicon.ico" rel="icon" sizes="32x32" />
  <link href="/branding/icons/episolve-icon.svg" rel="icon" type="image/svg+xml" />
  <link href="/branding/icons/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
</head>
```

---

## Additional Recommended Icons

### Apple Touch Icon
For iOS home screen:
```html
<link href="/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
```
**Required size:** 180x180px PNG

### Web App Manifest
For progressive web app support:

**File:** `/public/manifest.json`
```json
{
  "name": "Episolve LLC",
  "short_name": "Episolve",
  "description": "Technology Solutions for Business Problems",
  "icons": [
    {
      "src": "/branding/icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/branding/icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#254071",
  "background_color": "#FFFFFF",
  "display": "standalone"
}
```

Link in layout:
```tsx
<link rel="manifest" href="/manifest.json" />
```

---

## Required Icon Sizes

For complete coverage, create these sizes from the Episolve logo icon:

| Size | Purpose | Format |
|------|---------|--------|
| 16x16 | Browser tab | ICO/PNG |
| 32x32 | Browser tab (high DPI) | ICO/PNG |
| 48x48 | Windows taskbar | ICO/PNG |
| 180x180 | Apple touch icon | PNG |
| 192x192 | Android home screen | PNG |
| 512x512 | Android splash screen | PNG |
| Any | Modern browsers | SVG |

---

## Metadata Configuration

Update the metadata in `/src/app/(frontend)/layout.tsx`:

```tsx
export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  title: {
    default: 'Episolve LLC - Technology Solutions for Business Problems',
    template: '%s | Episolve LLC'
  },
  description: 'Episolve LLC provides innovative technology solutions for complex business problems.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' }
    ]
  },
  openGraph: {
    ...mergeOpenGraph(),
    siteName: 'Episolve LLC',
    images: [
      {
        url: '/branding/logos/episolve-logo.png',
        width: 1200,
        height: 630,
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@episolve', // Update with actual Twitter handle
    images: ['/branding/logos/episolve-logo.png'],
  },
}
```

---

## Testing Checklist

After implementation, test:

- [ ] Browser tab icon displays correctly (Chrome, Firefox, Safari, Edge)
- [ ] High DPI displays show crisp icon
- [ ] Dark mode favicon is visible
- [ ] iOS home screen icon works
- [ ] Android home screen icon works
- [ ] Web app manifest loads correctly
- [ ] Social media preview images display (Twitter, Facebook, LinkedIn)

---

## Tools & Resources

### Conversion Tools
- **ImageMagick:** CLI tool for ICO conversion
- **SVGO:** SVG optimization
- **RealFaviconGenerator:** https://realfavicongenerator.net/ (generates all sizes)
- **Favicon.io:** https://favicon.io/ (online converter)

### Validation Tools
- **Favicon Checker:** https://realfavicongenerator.net/favicon_checker
- **Twitter Card Validator:** https://cards-dev.twitter.com/validator
- **Facebook Debugger:** https://developers.facebook.com/tools/debug/

---

## Current Status

### ✓ Completed
- [x] Episolve favicon assets available in `/public/branding/logos/`
- [x] Existing favicon structure identified
- [x] Documentation created

### ⚠️ Pending
- [ ] Convert `episolve-favicon.png` to `.ico` format
- [ ] Create SVG version of Episolve icon
- [ ] Generate additional icon sizes (180x180, 192x192, 512x512)
- [ ] Update layout.tsx with Episolve favicon references
- [ ] Create web app manifest
- [ ] Update metadata with Episolve branding
- [ ] Test across browsers and devices

---

**Next Steps:**
1. Create all required icon sizes from Episolve logo
2. Convert to ICO and SVG formats
3. Update layout.tsx configuration
4. Add web app manifest
5. Test across platforms

**Last Updated:** December 2, 2025
