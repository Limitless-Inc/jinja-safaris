# ✅ Setup Checklist - Jinja Safaris

## Pre-Launch Checklist

### 🔧 Technical Setup

- [ ] **Install Dependencies**
  ```bash
  npm install
  ```

- [ ] **Create Supabase Project**
  - [ ] Sign up at supabase.com
  - [ ] Create new project: "jinja-safaris"
  - [ ] Save database password
  - [ ] Wait for provisioning

- [ ] **Database Setup**
  - [ ] Open SQL Editor in Supabase
  - [ ] Run `supabase-schema.sql`
  - [ ] Verify all tables created
  - [ ] Check default data inserted

- [ ] **Storage Buckets**
  - [ ] Create `slideshow` bucket (public)
  - [ ] Create `activities` bucket (public)
  - [ ] Create `gallery` bucket (public)
  - [ ] Create `hotels` bucket (public)
  - [ ] Create `blog` bucket (public)
  - [ ] Set all buckets to public read

- [ ] **Authentication**
  - [ ] Create admin user in Supabase Auth
  - [ ] Email: admin@jinjasafaris.com
  - [ ] Set strong password
  - [ ] Confirm email
  - [ ] Save credentials securely

- [ ] **Environment Variables**
  - [ ] Copy `.env.example` to `.env.local`
  - [ ] Add NEXT_PUBLIC_SUPABASE_URL
  - [ ] Add NEXT_PUBLIC_SUPABASE_ANON_KEY
  - [ ] Add SUPABASE_SERVICE_ROLE_KEY
  - [ ] Verify all keys are correct

- [ ] **Local Testing**
  - [ ] Run `npm run dev`
  - [ ] Visit http://localhost:3000
  - [ ] Test homepage loads
  - [ ] Test admin login
  - [ ] Test booking form
  - [ ] Test all pages

### 📸 Content Setup

- [ ] **Upload Images**
  - [ ] Logo to activities bucket
  - [ ] Rafting image to activities bucket
  - [ ] Hotel images to hotels bucket
  - [ ] Gallery images to gallery bucket
  - [ ] Slideshow images to slideshow bucket
  - [ ] Copy all public URLs

- [ ] **Configure Slideshow**
  - [ ] Login to admin panel
  - [ ] Go to Slideshow Manager
  - [ ] Add 3-5 hero images
  - [ ] Set titles and subtitles
  - [ ] Test auto-rotation

- [ ] **Update Contact Information**
  - [ ] Go to Supabase → contact_info table
  - [ ] Update phone number
  - [ ] Update email address
  - [ ] Update WhatsApp number
  - [ ] Update social media links

### 🚀 Deployment

- [ ] **Git Setup**
  - [ ] Initialize Git: `git init`
  - [ ] Add files: `git add .`
  - [ ] Commit: `git commit -m "Initial commit"`
  - [ ] Create GitHub repository
  - [ ] Push: `git push -u origin main`

- [ ] **Vercel Deployment**
  - [ ] Sign up at vercel.com
  - [ ] Import GitHub repository
  - [ ] Add environment variables
  - [ ] Deploy
  - [ ] Verify deployment successful

### 🎉 Launch

- [ ] **Final Checks**
  - [ ] All content reviewed
  - [ ] All links working
  - [ ] All images loading
  - [ ] No console errors

- [ ] **Go Live**
  - [ ] Announce on social media
  - [ ] Celebrate! 🎊

---

**🎯 Goal: Launch in 24 hours!**
