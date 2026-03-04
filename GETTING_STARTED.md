# 🎯 GETTING STARTED - Jinja Safaris

## Welcome! 👋

You now have a **production-ready full-stack tourism web application** for Jinja Safaris!

This guide will get you from zero to live in under 30 minutes.

---

## 📦 What You Have

✅ **Public Website**
- Beautiful homepage with hero slideshow
- Activity listings with booking system
- Partner hotels showcase
- Photo gallery
- Blog section
- Contact page with Google Maps
- Newsletter subscription
- WhatsApp integration
- Mobile responsive
- Dark mode support

✅ **Admin Dashboard**
- Secure login
- Booking management
- Activity management
- Slideshow manager
- Gallery manager
- Hotel manager
- Testimonials manager
- Export to CSV
- Real-time updates

✅ **Features**
- Dynamic pricing (local vs international)
- Deposit calculation (30%)
- Currency toggle (USD/UGX)
- SEO optimized
- Fast loading
- Secure authentication

---

## 🚀 Quick Setup (10 Minutes)

### Step 1: Install (1 min)
```bash
cd "c:\Users\HP ELITEBOOK 1040 G8\Desktop\Jinja Safaris Images\jinja-safaris"
npm install
```

### Step 2: Supabase Setup (3 min)

**A. Create Project**
1. Go to https://supabase.com
2. Sign up (free)
3. Click "New Project"
4. Name: `jinja-safaris`
5. Choose password
6. Select region (closest to Uganda)
7. Wait 2 minutes

**B. Setup Database**
1. In Supabase Dashboard → SQL Editor
2. Open `supabase-schema.sql` file
3. Copy ALL content
4. Paste in SQL Editor
5. Click "Run"
6. ✅ Done! All tables created with default data

**C. Create Storage**
1. Go to Storage
2. Create these buckets (click "New Bucket"):
   - `slideshow`
   - `activities`
   - `gallery`
   - `hotels`
   - `blog`
3. For EACH bucket:
   - Click bucket name
   - Go to Policies
   - Click "New Policy"
   - Select "Allow public read access"
   - Save

**D. Get API Keys**
1. Go to Settings → API
2. Copy these 3 values:
   - Project URL
   - `anon` `public` key
   - `service_role` key

**E. Create Admin User**
1. Go to Authentication → Users
2. Click "Add User"
3. Email: `admin@jinjasafaris.com`
4. Password: (choose strong password - SAVE IT!)
5. Auto Confirm User: ✅ YES
6. Click "Create User"

### Step 3: Configure Environment (1 min)

Create file `.env.local` in project root:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

Replace with YOUR actual values from Step 2D.

### Step 4: Run Locally (1 min)
```bash
npm run dev
```

Open browser: http://localhost:3000

🎉 **Your site is running!**

### Step 5: Test Admin (1 min)

1. Go to: http://localhost:3000/admin
2. Login with:
   - Email: `admin@jinjasafaris.com`
   - Password: (what you set in Step 2E)
3. Explore the dashboard!

### Step 6: Upload Images (2 min)

1. In Supabase Dashboard → Storage
2. Click `slideshow` bucket
3. Click "Upload File"
4. Upload 3-5 hero images
5. Click each image → Copy URL
6. Go to your admin panel → Slideshow Manager
7. Add slides with URLs

Repeat for other buckets:
- `activities` → Activity images
- `gallery` → Gallery photos
- `hotels` → Hotel images

### Step 7: Deploy to Vercel (3 min)

**A. Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit - Jinja Safaris"
```

Create repository on GitHub, then:
```bash
git remote add origin https://github.com/yourusername/jinja-safaris.git
git push -u origin main
```

**B. Deploy**
1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Import Project"
4. Select your `jinja-safaris` repository
5. Click "Import"
6. Add Environment Variables (same as .env.local):
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
7. Click "Deploy"
8. Wait 2 minutes
9. ✅ **LIVE!** at `https://your-project.vercel.app`

---

## 📝 Next Steps

### Immediate (Today)

1. **Update Contact Info**
   - Supabase → Table Editor → `contact_info`
   - Update phone, email, WhatsApp, social links

2. **Add Real Images**
   - Upload your actual photos to Supabase Storage
   - Update via admin panel

3. **Test Booking Flow**
   - Make a test booking
   - Check it appears in admin panel

4. **Customize Content**
   - Update activity descriptions
   - Add hotel details
   - Write blog posts

### This Week

1. **Add More Content**
   - Upload 20+ gallery images
   - Write 3-5 blog posts
   - Add customer testimonials

2. **SEO Setup**
   - Google Search Console
   - Submit sitemap
   - Google My Business

3. **Social Media**
   - Announce launch
   - Share booking link
   - Post gallery photos

### Optional Enhancements

1. **Custom Domain**
   - Buy domain (e.g., jinjasafaris.com)
   - Add to Vercel
   - Update DNS

2. **Email Integration**
   - SendGrid or Mailgun
   - Booking confirmations
   - Newsletter emails

3. **Payment Gateway**
   - Flutterwave (recommended for Uganda)
   - Stripe
   - Accept deposits online

4. **Analytics**
   - Google Analytics
   - Vercel Analytics
   - Track conversions

---

## 📚 Documentation

- **README.md** - Complete documentation
- **QUICKSTART.md** - Quick reference guide
- **DEPLOYMENT.md** - Detailed deployment guide
- **PROJECT_STRUCTURE.md** - Code organization
- **CHECKLIST.md** - Launch checklist

---

## 🎓 How to Use Admin Panel

### Managing Bookings
1. Login → Dashboard → Manage Bookings
2. View all bookings
3. Filter by status (Pending/Confirmed/Cancelled)
4. Update status with dropdown
5. Export to CSV for records

### Managing Activities
1. Dashboard → Manage Activities
2. Click "Edit" on any activity
3. Update prices, descriptions
4. Toggle Active/Inactive
5. Save changes

### Managing Slideshow
1. Dashboard → Slideshow Manager
2. Add new slide with image URL
3. Set title and subtitle
4. Activate/Deactivate slides
5. Delete old slides

### Managing Gallery
1. Dashboard → Gallery Manager
2. Add image URL
3. Set category (Adventure, Nature, etc.)
4. Add caption (optional)
5. Delete unwanted images

### Managing Hotels
1. Dashboard → Hotel Manager
2. Add new hotel
3. Edit descriptions
4. Update images
5. Toggle Active/Inactive

### Managing Testimonials
1. Dashboard → Testimonials
2. View pending testimonials
3. Approve good reviews
4. Feature best testimonials
5. Delete spam

---

## 🆘 Troubleshooting

### "Can't connect to Supabase"
- Check `.env.local` exists
- Verify API keys are correct
- Restart dev server

### "Images not showing"
- Check Storage buckets are PUBLIC
- Verify image URLs are correct
- Check browser console for errors

### "Can't login to admin"
- Verify user exists in Supabase Auth
- Check email is confirmed
- Try password reset

### "Booking not saving"
- Check Supabase connection
- Verify environment variables
- Check browser console

### "Build fails on Vercel"
- Check environment variables are set
- Run `npm run build` locally
- Check Vercel logs

---

## 📞 Support

**Technical Issues:**
- Supabase Docs: https://supabase.com/docs
- Next.js Docs: https://nextjs.org/docs
- Vercel Docs: https://vercel.com/docs

**Business Contact:**
- Email: info@jinjasafaris.com
- Phone: +256 123 456 789
- WhatsApp: +256 123 456 789
- Location: Rubaga Hill, Jinja City, Uganda

---

## 🎉 You're Ready!

Your professional tourism website is ready to accept bookings!

**What you can do now:**
- ✅ Accept online bookings
- ✅ Manage activities and pricing
- ✅ Showcase your services
- ✅ Build your brand
- ✅ Grow your business

**Share your site:**
- Social media
- Business cards
- Email signature
- Google My Business
- Tourism directories

---

## 🚀 Launch Checklist

- [ ] Supabase setup complete
- [ ] Environment variables configured
- [ ] Admin user created
- [ ] Images uploaded
- [ ] Contact info updated
- [ ] Test booking made
- [ ] Deployed to Vercel
- [ ] Custom domain added (optional)
- [ ] Social media announced
- [ ] Google Search Console setup

---

**Congratulations! 🎊**

You now have a world-class tourism booking platform!

Start accepting bookings and grow your business! 💪

---

**Jinja Safaris - Hub of the Nile Tourism**
*Built with ❤️ using Next.js + Supabase + Tailwind CSS*
