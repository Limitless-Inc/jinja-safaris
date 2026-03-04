# 🚀 QUICK START GUIDE

## Get Your Site Running in 10 Minutes!

### 1️⃣ Install Dependencies (1 min)
```bash
npm install
```

### 2️⃣ Set Up Supabase (3 min)

**Create Project:**
1. Go to https://supabase.com → Sign up (free)
2. New Project → Name: "jinja-safaris"
3. Wait for database setup

**Run Database Setup:**
1. In Supabase: SQL Editor
2. Copy ALL content from `supabase-schema.sql`
3. Paste → Run
4. ✅ Done!

**Get API Keys:**
1. Settings → API
2. Copy Project URL and both keys

**Create Storage:**
1. Storage → New Bucket
2. Create: `slideshow`, `activities`, `gallery`, `hotels`, `blog`
3. Make all PUBLIC

**Create Admin:**
1. Authentication → Add User
2. Email: admin@jinjasafaris.com
3. Password: (your choice)
4. Auto Confirm: YES

### 3️⃣ Configure Environment (1 min)

Create `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=your_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_key_here
```

### 4️⃣ Run Locally (1 min)
```bash
npm run dev
```

Open: http://localhost:3000

### 5️⃣ Test Admin Panel
1. Go to: http://localhost:3000/admin
2. Login with admin credentials
3. Explore dashboard!

### 6️⃣ Upload Images (2 min)
1. Supabase → Storage
2. Upload your images to buckets
3. Copy public URLs
4. Update via admin panel

### 7️⃣ Deploy to Vercel (2 min)
```bash
git init
git add .
git commit -m "Initial commit"
# Push to GitHub
```

Then:
1. Vercel.com → Import Project
2. Add environment variables
3. Deploy!
4. ✅ LIVE!

---

## 📞 Need Help?

**Common Issues:**

**"Can't connect to Supabase"**
→ Check .env.local file exists and has correct keys

**"Images not showing"**
→ Make storage buckets PUBLIC in Supabase

**"Can't login to admin"**
→ Verify admin user created in Supabase Auth

**"Build fails"**
→ Run `npm run build` locally to see errors

---

## 🎯 What's Included?

✅ Full booking system
✅ Admin dashboard
✅ Activity management
✅ Gallery & slideshow
✅ Blog section
✅ Contact page
✅ WhatsApp integration
✅ Mobile responsive
✅ Dark mode
✅ SEO optimized

---

## 📚 Full Documentation

- `README.md` - Complete documentation
- `DEPLOYMENT.md` - Detailed deployment guide
- `supabase-schema.sql` - Database structure

---

## 🎉 You're Ready!

Your professional tourism website is ready to go live!

**Test everything:**
- [ ] Homepage loads
- [ ] Booking works
- [ ] Admin login works
- [ ] Images display
- [ ] Mobile responsive

**Then deploy and start getting bookings!** 🚀

---

**Jinja Safaris - Hub of the Nile Tourism**
Built with ❤️ using Next.js + Supabase
