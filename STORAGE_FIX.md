# Fix Storage Upload Errors

## Problem
Error: "new row violates row-level security policy" when uploading files

## Solution
Run the `supabase-storage-policies.sql` file in Supabase SQL Editor

## Steps:
1. Go to Supabase Dashboard → SQL Editor
2. Copy contents of `supabase-storage-policies.sql`
3. Paste and click "Run"
4. Refresh your admin page
5. Try uploading again

This adds the necessary storage bucket policies for authenticated users to upload files.
