-- Storage Bucket Policies for File Uploads
-- Run this in Supabase SQL Editor to fix upload errors

-- Hotels bucket policies
INSERT INTO storage.buckets (id, name, public) 
VALUES ('hotels', 'hotels', true) 
ON CONFLICT (id) DO UPDATE SET public = true;

CREATE POLICY "Authenticated users can upload to hotels" ON storage.objects 
FOR INSERT TO authenticated 
WITH CHECK (bucket_id = 'hotels');

CREATE POLICY "Authenticated users can update hotels files" ON storage.objects 
FOR UPDATE TO authenticated 
USING (bucket_id = 'hotels');

CREATE POLICY "Authenticated users can delete hotels files" ON storage.objects 
FOR DELETE TO authenticated 
USING (bucket_id = 'hotels');

CREATE POLICY "Public can view hotels files" ON storage.objects 
FOR SELECT TO public 
USING (bucket_id = 'hotels');

-- Slideshow bucket policies
INSERT INTO storage.buckets (id, name, public) 
VALUES ('slideshow', 'slideshow', true) 
ON CONFLICT (id) DO UPDATE SET public = true;

CREATE POLICY "Authenticated users can upload to slideshow" ON storage.objects 
FOR INSERT TO authenticated 
WITH CHECK (bucket_id = 'slideshow');

CREATE POLICY "Authenticated users can update slideshow files" ON storage.objects 
FOR UPDATE TO authenticated 
USING (bucket_id = 'slideshow');

CREATE POLICY "Authenticated users can delete slideshow files" ON storage.objects 
FOR DELETE TO authenticated 
USING (bucket_id = 'slideshow');

CREATE POLICY "Public can view slideshow files" ON storage.objects 
FOR SELECT TO public 
USING (bucket_id = 'slideshow');

-- Gallery bucket policies
INSERT INTO storage.buckets (id, name, public) 
VALUES ('gallery', 'gallery', true) 
ON CONFLICT (id) DO UPDATE SET public = true;

CREATE POLICY "Authenticated users can upload to gallery" ON storage.objects 
FOR INSERT TO authenticated 
WITH CHECK (bucket_id = 'gallery');

CREATE POLICY "Authenticated users can update gallery files" ON storage.objects 
FOR UPDATE TO authenticated 
USING (bucket_id = 'gallery');

CREATE POLICY "Authenticated users can delete gallery files" ON storage.objects 
FOR DELETE TO authenticated 
USING (bucket_id = 'gallery');

CREATE POLICY "Public can view gallery files" ON storage.objects 
FOR SELECT TO public 
USING (bucket_id = 'gallery');

-- Activities bucket policies
INSERT INTO storage.buckets (id, name, public) 
VALUES ('activities', 'activities', true) 
ON CONFLICT (id) DO UPDATE SET public = true;

CREATE POLICY "Authenticated users can upload to activities" ON storage.objects 
FOR INSERT TO authenticated 
WITH CHECK (bucket_id = 'activities');

CREATE POLICY "Authenticated users can update activities files" ON storage.objects 
FOR UPDATE TO authenticated 
USING (bucket_id = 'activities');

CREATE POLICY "Authenticated users can delete activities files" ON storage.objects 
FOR DELETE TO authenticated 
USING (bucket_id = 'activities');

CREATE POLICY "Public can view activities files" ON storage.objects 
FOR SELECT TO public 
USING (bucket_id = 'activities');

-- Blog bucket policies
INSERT INTO storage.buckets (id, name, public) 
VALUES ('blog', 'blog', true) 
ON CONFLICT (id) DO UPDATE SET public = true;

CREATE POLICY "Authenticated users can upload to blog" ON storage.objects 
FOR INSERT TO authenticated 
WITH CHECK (bucket_id = 'blog');

CREATE POLICY "Authenticated users can update blog files" ON storage.objects 
FOR UPDATE TO authenticated 
USING (bucket_id = 'blog');

CREATE POLICY "Authenticated users can delete blog files" ON storage.objects 
FOR DELETE TO authenticated 
USING (bucket_id = 'blog');

CREATE POLICY "Public can view blog files" ON storage.objects 
FOR SELECT TO public 
USING (bucket_id = 'blog');
