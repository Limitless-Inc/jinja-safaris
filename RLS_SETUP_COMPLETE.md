# Complete RLS Setup Guide

## Run These SQL Files in Order

### 1. Admin Policies (Already Done)
File: `supabase-admin-policies.sql`
- Allows authenticated admins to manage all data

### 2. Storage Policies (For File Uploads)
File: `supabase-storage-policies.sql`
- Allows admins to upload images
- Allows public to view images

### 3. Public Policies (For Frontend) ⭐ NEW
File: `supabase-public-policies.sql`
- Allows public users to view hotels, activities, gallery, etc.
- Allows public to submit bookings and testimonials

## How to Apply:

1. Go to Supabase Dashboard
2. Click **SQL Editor**
3. Copy and paste each file's contents
4. Click **Run**
5. Repeat for all 3 files

## What This Fixes:

✅ Admins can upload images
✅ Admins can edit hotels, activities, prices
✅ **Public users can see all changes immediately**
✅ Public can book activities
✅ Public can submit testimonials
✅ Public can subscribe to newsletter

## Test After Setup:

1. Add a hotel in admin panel
2. Visit `/hotels` page (not logged in)
3. You should see the new hotel
4. Same for activities, gallery, slideshow
