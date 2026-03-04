# 🚀 Deployment Guide - Jinja Safaris

## Quick Start (5 Minutes to Live)

### Step 1: Install Dependencies
```bash
cd "c:\Users\HP ELITEBOOK 1040 G8\Desktop\Jinja Safaris Images\jinja-safaris"
npm install
```

### Step 2: Set Up Supabase (2 minutes)

1. **Create Account & Project**
   - Go to https://supabase.com
   - Sign up (free)
   - Click "New Project"
   - Name: `jinja-safaris`
   - Database Password: (save this!)
   - Region: Choose closest to Uganda
   - Wait 2 minutes for setup

2. **Get API Keys**
   - Go to Settings → API
   - Copy:
     - Project URL
     - `anon` `public` key
     - `service_role` key (keep secret!)

3. **Run Database Setup**
   - Go to SQL Editor in Supabase
   - Copy entire `supabase-schema.sql` file
   - Paste and click "Run"
   - ✅ All tables created!

4. **Create Storage Buckets**
   - Go to Storage
   - Create these buckets (all public):
     - `slideshow`
     - `activities`
     - `gallery`
     - `hotels`
     - `blog`
   
   For each bucket:
   - Click bucket → Policies → New Policy
   - Select "Allow public read access"
   - Save

5. **Create Admin User**
   - Go to Authentication → Users
   - Click "Add User"
   - Email: `admin@jinjasafaris.com`
   - Password: (choose strong password)
   - Auto Confirm: Yes
   - Save credentials!

### Step 3: Configure Environment

Create `.env.local` file:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

### Step 4: Upload Images

1. Go to Supabase Storage
2. Upload your images:
   - `Jinja Safaris Logo.png` → `activities` bucket
   - `rafting-74.jpg` → `activities` bucket (for rafting)
   - `wild_water_lodge_5.jpg` → `hotels` bucket
   - Other images → `slideshow` or `gallery` buckets

3. Copy public URLs for each image
4. Update database with image URLs (via admin panel later)

### Step 5: Test Locally

```bash
npm run dev
```

Visit:
- Public site: http://localhost:3000
- Admin login: http://localhost:3000/admin
- Dashboard: http://localhost:3000/admin/dashboard

### Step 6: Deploy to Vercel (2 minutes)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   # Create repo on GitHub first, then:
   git remote add origin https://github.com/yourusername/jinja-safaris.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to https://vercel.com
   - Sign in with GitHub
   - Click "Import Project"
   - Select your repository
   - Framework: Next.js (auto-detected)
   - Add Environment Variables:
     ```
     NEXT_PUBLIC_SUPABASE_URL
     NEXT_PUBLIC_SUPABASE_ANON_KEY
     SUPABASE_SERVICE_ROLE_KEY
     ```
   - Click "Deploy"
   - Wait 2 minutes
   - ✅ Live at `https://your-project.vercel.app`

## Post-Deployment Setup

### 1. Add Content via Admin Panel

Login at `https://your-site.vercel.app/admin`

**Add Slideshow Images:**
1. Go to Slideshow Manager
2. Add 3-5 hero images with titles:
   - "Jinja Safaris – Hub of the Nile Tourism"
   - "Experience the Thrill of White Water Rafting"
   - "Skydive Over the Mighty Nile"

**Update Activity Images:**
1. Go to Manage Activities
2. Edit each activity
3. Add proper image URLs from Supabase Storage

**Add Gallery Images:**
1. Go to Gallery Manager
2. Upload 20-30 images
3. Categorize: Adventure, Nature, Hotels, Tourists

### 2. Update Contact Information

In Supabase Dashboard:
1. Go to Table Editor → `contact_info`
2. Update:
   - Phone number
   - Email
   - WhatsApp number
   - Social media links
   - Google Maps embed code

### 3. Configure Custom Domain (Optional)

In Vercel:
1. Go to Project Settings → Domains
2. Add your domain: `jinjasafaris.com`
3. Follow DNS configuration instructions
4. Wait for SSL certificate (automatic)

### 4. Set Up Email Notifications (Optional)

For booking confirmations, integrate:
- SendGrid
- Mailgun
- AWS SES

Add to environment variables and update booking logic.

### 5. Add Payment Integration (Optional)

Integrate payment gateway:
- **Flutterwave** (recommended for Uganda)
- Stripe
- PayPal

Update booking page with payment flow.

## Testing Checklist

- [ ] Homepage loads correctly
- [ ] All activities display with images
- [ ] Booking form works
- [ ] Admin login works
- [ ] Can create/edit activities
- [ ] Can manage bookings
- [ ] Gallery displays images
- [ ] Contact page shows map
- [ ] WhatsApp button works
- [ ] Mobile responsive
- [ ] Dark mode works

## Maintenance

### Daily
- Check pending bookings
- Respond to customer inquiries
- Approve testimonials

### Weekly
- Update gallery with new photos
- Post blog articles
- Review analytics

### Monthly
- Update seasonal pricing
- Export booking reports
- Backup database

## Troubleshooting

### Images Not Loading
- Check Supabase Storage bucket is public
- Verify image URLs are correct
- Check browser console for errors

### Admin Can't Login
- Verify user exists in Supabase Auth
- Check email is confirmed
- Try password reset

### Booking Not Saving
- Check Supabase connection
- Verify environment variables
- Check browser console for errors

### Build Fails on Vercel
- Check all environment variables are set
- Verify no TypeScript errors locally
- Check build logs for specific error

## Support

For technical issues:
1. Check README.md
2. Review Supabase logs
3. Check Vercel deployment logs
4. Contact: dev@jinjasafaris.com

## Security Reminders

- ✅ Never commit `.env.local` to Git
- ✅ Keep service role key secret
- ✅ Use strong admin password
- ✅ Enable 2FA on Supabase account
- ✅ Regular database backups
- ✅ Monitor admin activity logs

## Performance Optimization

- Enable Vercel Analytics
- Optimize images (use WebP format)
- Enable caching headers
- Use CDN for static assets
- Monitor Core Web Vitals

## SEO Setup

1. **Google Search Console**
   - Add property
   - Verify ownership
   - Submit sitemap: `https://yoursite.com/sitemap.xml`

2. **Google Analytics**
   - Create property
   - Add tracking code
   - Set up goals

3. **Social Media**
   - Add Open Graph images
   - Update meta descriptions
   - Share on platforms

## Backup Strategy

**Automated (Supabase):**
- Daily automatic backups
- Point-in-time recovery
- 7-day retention (free tier)

**Manual:**
- Export bookings monthly (CSV)
- Download gallery images
- Save database schema

## Scaling Considerations

When you grow:
- Upgrade Supabase plan for more storage
- Add Redis for caching
- Implement rate limiting
- Add load balancing
- Consider dedicated hosting

---

**🎉 Congratulations! Your site is live!**

Share it:
- https://your-site.vercel.app
- Update social media
- Add to Google My Business
- Share with partners

**Next:** Start marketing and watch bookings roll in! 🚀
