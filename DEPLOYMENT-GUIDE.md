# Aivate Catalogue - Deployment Guide

**Project:** Aivate Catalogue (Premium Agency-OS Portfolio)  
**Status:** Ready for Production Deployment  
**Date:** 2026-05-31  
**Prepared by:** Chrono (Agency-OS)

## Pre-Deployment Checklist ✅

- [x] Build passes successfully (`npm run build`)
- [x] Lighthouse scores meet requirements (93-100 across all metrics)
- [x] Portfolio screenshots generated (8 projects, SVG format)
- [x] All components tested and functional
- [x] Git repository up to date with GitHub
- [x] CSS issues resolved (salon/fine-dining layouts fixed)

## GitHub Repository

**URL:** `git@github-aivate:aivaterepositories/aivate-catalogue.git`  
**Branch:** `main`  
**Latest Commit:** `8b913b7` (feat: transform catalogue into premium Agency-OS portfolio)

## Vercel Deployment Steps

### Option 1: Automatic Deployment (Recommended)

If GitHub integration is already set up:

1. Vercel will automatically detect the push to `main` branch
2. Build will start automatically
3. Check deployment status: https://vercel.com/aivaterepositories/aivate-catalogue
4. Production URL will be available at: `https://aivate-catalogue.vercel.app`

### Option 2: Manual Deployment via CLI

If CLI deployment is preferred:

```bash
# Navigate to project
cd /Volumes/Cob-SSD/Projects/aivate.net/aivate-catalogue

# Login to Vercel (opens browser)
vercel login

# Deploy to production
vercel --prod

# Follow prompts:
# - Link to existing project or create new
# - Team: aivaterepositories
# - Project name: aivate-catalogue
```

### Option 3: Vercel Dashboard

1. Go to https://vercel.com/aivaterepositories
2. Click "Add New" → "Project"
3. Import from GitHub: `aivaterepositories/aivate-catalogue`
4. Framework Preset: **Next.js** (auto-detected)
5. Build Command: `npm run build` (default)
6. Output Directory: `.next` (default)
7. Install Command: `pnpm install` (recommended for faster builds)
8. Click "Deploy"

## Environment Configuration

No environment variables required for initial deployment.

If adding Supabase integration later (for contact forms, analytics, etc.):
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Custom Domain Setup (Optional)

To use custom domain (e.g., `portfolio.aivate.net` or `catalogue.aivate.net`):

1. Go to Project Settings → Domains
2. Add domain
3. Update DNS records as instructed by Vercel
4. Wait for DNS propagation (usually < 5 minutes)

## Expected Production URL

- **Vercel Default:** `https://aivate-catalogue.vercel.app`
- **Custom Domain:** TBD (Director's choice)

## Post-Deployment Verification

After deployment, verify:

1. **Home Page** - Navigation works, sections load correctly
2. **Portfolio Page** - All 8 projects display with correct images
3. **Search & Filter** - Portfolio search and tech stack filters work
4. **Backoffice Demo** - TPS CRM showcase page loads
5. **Automation Page** - Placeholder content displays
6. **Landing Pages** - All internal landing page links work

## Lighthouse Scores (Production)

Expected production scores (based on local audit):

- **Performance:** 93-94/100
- **Accessibility:** 93/100
- **Best Practices:** 96/100
- **SEO:** 100/100

Re-run Lighthouse on production URL to confirm.

## Rollback Plan

If deployment issues occur:

```bash
# Revert to previous commit
git revert HEAD
git push origin main

# Or redeploy specific commit
vercel --prod --force
```

## Support & Troubleshooting

### Build Failures

If build fails on Vercel:
1. Check build logs in Vercel dashboard
2. Ensure pnpm lockfile is committed
3. Verify Node.js version matches (20.x recommended)

### Missing Images

If portfolio screenshots don't display:
1. Verify `/public/portfolio/` directory is committed
2. Check image paths in `data/portfolio-items.ts`
3. Ensure SVG files are not gitignored

### CSS Issues

If styles don't load:
1. Clear Vercel build cache
2. Verify `globals.css` has no invalid imports
3. Check Tailwind config is correct

## Next Steps After Deployment

1. Update Mavis memory with production URL
2. Share production link with stakeholders
3. Monitor analytics and performance
4. Consider replacing SVG placeholders with real screenshots
5. Populate Automation section with n8n workflows

---

**Ready for Deployment:** ✅ YES  
**Deployment Method:** Choose Option 1, 2, or 3 above  
**Estimated Deploy Time:** 2-3 minutes

**Contact:** Chrono via Agency-OS system  
**Documentation:** See DESIGN-SPEC.md and LIGHTHOUSE-SUMMARY.md
