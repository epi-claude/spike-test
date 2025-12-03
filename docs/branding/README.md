# Episolve LLC - Branding Documentation

This directory contains all brand guidelines, color specifications, and asset documentation for the Episolve LLC corporate website.

## 📁 Directory Contents

### Documentation Files

| File | Description |
|------|-------------|
| `README.md` | This file - branding documentation overview |
| `ASSET-INVENTORY.md` | Complete inventory of all logo variations and usage guidelines |
| `FAVICON-SETUP.md` | Favicon configuration guide and implementation steps |

### Reference Images

| File | Description |
|------|-------------|
| `episolve-reference-color-palette-1.png` | Extended color palette with hex values |
| `episolve-reference-site-aesthetics.png` | Design reference and aesthetic guidelines |

## 🎨 Quick Reference

### Brand Colors

**Primary Colors:**
- **Navy Blue** (Pantone 295 U): `#254071`
- **Bright Yellow** (Pantone 101 U): `#FDFC8C`

**Extended Palette:**
- Medium Blue: `#4A74A8`
- Light Blue: `#8FB4D9`
- Pale Blue: `#E6EAEF`

📄 **Full documentation:** `/public/branding/color-palette.md`

### Logo Assets

**Location:** `/public/branding/logos/`

**Primary Files:**
- `episolve-logo.png` - Horizontal full-color logo
- `episolve-logo-square.png` - Square/stacked layout
- `epiSolveLogoBlack-01.png` - Black version for print

**Total Assets:** 15 logo variations + 2 favicon files

📄 **Full inventory:** `ASSET-INVENTORY.md`

### Favicon Configuration

**Current Status:** Existing favicons need replacement with Episolve branding

**Required Actions:**
1. Convert PNG to ICO format
2. Create SVG version
3. Update layout.tsx references

📄 **Implementation guide:** `FAVICON-SETUP.md`

## 🎯 Brand Identity

### Logo Elements
- **Icon:** Lightbulb with rays (innovation/ideas)
- **Typography:** "epi" in yellow, "Solve LLC" in navy blue
- **Tagline:** "Technology Solutions for Business Problems"

### Design Principles
- Clean, professional aesthetic
- Strong contrast (navy + yellow)
- Innovation-focused (lightbulb symbolism)
- Technology-forward visual language

## 📋 Implementation Checklist

### Completed ✓
- [x] Logo assets organized in `/public/branding/`
- [x] Color palette documented with hex/RGB values
- [x] Asset inventory created
- [x] Favicon setup guide created
- [x] Branding directory structure established

### Pending ⚠️
- [ ] Replace default favicons with Episolve branding
- [ ] Create SVG logo versions (scalable)
- [ ] Generate all required icon sizes (16x16, 32x32, 180x180, etc.)
- [ ] Create web app manifest
- [ ] Update site metadata with Episolve branding
- [ ] Create brand guidelines PDF (comprehensive)
- [ ] Design email signature templates
- [ ] Create social media templates

## 🔗 Related Files

### Production Assets
- `/public/branding/` - All production-ready logos and icons
- `/public/branding/color-palette.md` - Complete color specifications
- `/public/branding/pantone-colors/` - Official Pantone references

### Documentation
- `/docs/CHANGELOG.md` - Project change history
- `/docs/episolve-project-charter.md` - Project charter
- `/docs/episolve-prd.md` - Product requirements document

## 🛠️ Development Usage

### CSS Variables
```css
:root {
  --color-navy: #254071;
  --color-yellow: #FDFC8C;
}
```

### Tailwind Classes
```javascript
// Use in className
className="text-episolve-navy bg-episolve-yellow"
```

### Logo Reference
```tsx
import Image from 'next/image'

<Image
  src="/branding/logos/episolve-logo.png"
  alt="Episolve LLC"
  width={300}
  height={80}
/>
```

## 📞 Brand Guidelines

For questions about brand usage, logo variations, or design decisions, refer to:

1. **Asset Inventory** - Logo selection and usage rules
2. **Color Palette** - Color specifications and accessibility notes
3. **Favicon Setup** - Icon implementation guide

## 🔄 Version History

- **v1.0** - December 2, 2025
  - Initial branding documentation
  - Asset inventory created
  - Color palette documented
  - Favicon setup guide created

---

**Maintained By:** Episolve LLC Development Team
**Last Updated:** December 2, 2025
