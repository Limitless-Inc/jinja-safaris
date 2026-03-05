-- Public Read Policies for Frontend
-- Allows unauthenticated users to view data on the public website

-- Activities: Public can view active activities
CREATE POLICY "Public can view active activities" ON activities 
FOR SELECT TO public 
USING (is_active = true);

-- Hotels: Public can view all hotels
CREATE POLICY "Public can view hotels" ON hotels 
FOR SELECT TO public 
USING (true);

-- Gallery: Public can view all gallery images
CREATE POLICY "Public can view gallery" ON gallery_images 
FOR SELECT TO public 
USING (true);

-- Slideshow: Public can view active slideshow images
CREATE POLICY "Public can view slideshow" ON slideshow_images 
FOR SELECT TO public 
USING (is_active = true);

-- Testimonials: Public can view approved testimonials
CREATE POLICY "Public can view approved testimonials" ON testimonials 
FOR SELECT TO public 
USING (status = 'approved');

-- Blog: Public can view published blog posts
CREATE POLICY "Public can view published blogs" ON blog_posts 
FOR SELECT TO public 
USING (status = 'published');

-- Contact Info: Public can view contact information
CREATE POLICY "Public can view contact info" ON contact_info 
FOR SELECT TO public 
USING (true);

-- Seasonal Pricing: Public can view pricing
CREATE POLICY "Public can view pricing" ON seasonal_pricing 
FOR SELECT TO public 
USING (true);

-- Bookings: Public can insert bookings (for booking form)
CREATE POLICY "Public can create bookings" ON bookings 
FOR INSERT TO public 
WITH CHECK (true);

-- Newsletter: Public can subscribe
CREATE POLICY "Public can subscribe to newsletter" ON newsletter 
FOR INSERT TO public 
WITH CHECK (true);

-- Testimonials: Public can submit testimonials
CREATE POLICY "Public can submit testimonials" ON testimonials 
FOR INSERT TO public 
WITH CHECK (true);
