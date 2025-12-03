# Episolve LLC - Brand Color Palette

## Official Pantone Colors

### Primary Colors

#### Pantone 295 U - Navy Blue
- **Pantone:** 295 U
- **Hex:** `#254071`
- **RGB:** `rgb(37, 64, 113)`
- **Usage:** Primary brand color, logo, headings, corporate communications

#### Pantone 101 U - Bright Yellow
- **Pantone:** 101 U
- **Hex:** `#FDFC8C`
- **RGB:** `rgb(253, 252, 140)`
- **Usage:** Accent color, highlights, "epi" prefix in logo

## Extended Digital Palette

These are additional colors derived from the brand for digital use:

### Navy Blue Variations
- **Dark Navy:** `#254071` (Primary - Pantone 295 U)
- **Medium Blue:** `#4A74A8` (Complementary shade)
- **Light Blue:** `#8FB4D9` (Lighter accent)
- **Pale Blue:** `#E6EAEF` (Backgrounds, subtle elements)

### Yellow Variations
- **Bright Yellow:** `#FDFC8C` (Primary - Pantone 101 U)
- **Gold:** `#F4E87C` (Slightly darker for better contrast)

### Supporting Colors

#### Neutral Palette
- **Black:** `#000000` (Pure black for logo variations)
- **Charcoal:** `#333333` (Body text)
- **Medium Gray:** `#666666` (Secondary text)
- **Light Gray:** `#CCCCCC` (Borders, dividers)
- **Off-White:** `#F9F9F9` (Backgrounds)
- **White:** `#FFFFFF` (Pure white)

## Color Usage Guidelines

### Logo Usage
- **Full Color Logo:** Navy blue (#254071) + Yellow (#FDFC8C)
- **Black Logo:** Pure black (#000000) on light backgrounds
- **White Logo:** Pure white (#FFFFFF) on dark backgrounds

### Text Hierarchy
- **Headings:** Navy Blue (#254071) or Black (#000000)
- **Body Text:** Charcoal (#333333)
- **Secondary Text:** Medium Gray (#666666)
- **Links:** Navy Blue (#254071) with Medium Blue (#4A74A8) hover state

### Backgrounds
- **Primary:** White (#FFFFFF)
- **Secondary:** Off-White (#F9F9F9)
- **Accent Sections:** Pale Blue (#E6EAEF)
- **Hero/Feature:** Navy Blue (#254071) with white text

### Accessibility Notes
- Yellow (#FDFC8C) should not be used for text on white backgrounds (insufficient contrast)
- Use Navy Blue (#254071) or Black (#000000) for text to ensure WCAG AA compliance
- Ensure minimum 4.5:1 contrast ratio for body text
- Ensure minimum 3:1 contrast ratio for large text (18pt+)

## CSS Variables (Ready to Use)

```css
:root {
  /* Primary Brand Colors */
  --color-navy: #254071;
  --color-yellow: #FDFC8C;

  /* Blue Variations */
  --color-navy-dark: #254071;
  --color-blue-medium: #4A74A8;
  --color-blue-light: #8FB4D9;
  --color-blue-pale: #E6EAEF;

  /* Yellow Variations */
  --color-yellow-bright: #FDFC8C;
  --color-gold: #F4E87C;

  /* Neutrals */
  --color-black: #000000;
  --color-charcoal: #333333;
  --color-gray-medium: #666666;
  --color-gray-light: #CCCCCC;
  --color-off-white: #F9F9F9;
  --color-white: #FFFFFF;
}
```

## Tailwind Configuration

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'episolve': {
          navy: '#254071',
          yellow: '#FDFC8C',
          'blue-medium': '#4A74A8',
          'blue-light': '#8FB4D9',
          'blue-pale': '#E6EAEF',
          gold: '#F4E87C',
        }
      }
    }
  }
}
```

---

**Source Files:**
- `/public/branding/pantone-colors/episolve-pantone-colors.pdf`
- `/public/branding/pantone-colors/episolve-pantone-colors.png`
- `/docs/branding/episolve-reference-color-palette-1.png`

**Last Updated:** December 2, 2025
