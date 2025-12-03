# Branding Assets - Production

This directory contains production-ready branding assets used in the Episolve website.

## Directory Structure

```
/public/branding/
  /logos/          - Full Episolve logos (primary, dark mode, variations)
  /icons/          - Icon versions, favicons, app icons
  README.md        - This file
```

## Usage

All files in `/public/` are publicly accessible via URL:
- `/branding/logos/episolve-logo.svg` → `https://yourdomain.com/branding/logos/episolve-logo.svg`

## Asset Guidelines

### Logos (`/logos/`)
Place full logo files here:
- `episolve-logo.svg` - Primary logo (light backgrounds)
- `episolve-logo-dark.svg` - Dark mode logo (dark backgrounds)
- `episolve-logo-white.svg` - White version for colored backgrounds
- `episolve-logo.png` - Raster fallback if needed

### Icons (`/icons/`)
Place icon and favicon files here:
- `episolve-icon.svg` - Icon/mark only (no text)
- `favicon.ico` - Browser favicon
- `apple-touch-icon.png` - iOS home screen icon
- App icons for various platforms

## File Format Recommendations

- **SVG** - Preferred for logos (scalable, small file size)
- **PNG** - For favicons and raster images (with transparency)
- **WebP** - For optimized raster images if needed

## Notes

- Keep file sizes small for performance
- Use semantic, descriptive filenames
- Version control all assets (committed to git)
- For brand guidelines and reference materials, see `/docs/branding/`
