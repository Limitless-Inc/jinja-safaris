# 📁 Project Structure

```
jinja-safaris/
│
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with navbar/footer
│   ├── page.tsx                 # Homepage
│   ├── globals.css              # Global styles
│   │
│   ├── activities/              # Activities page
│   │   └── page.tsx
│   │
│   ├── booking/                 # Booking system
│   │   └── page.tsx
│   │
│   ├── hotels/                  # Partner hotels
│   │   └── page.tsx
│   │
│   ├── gallery/                 # Photo gallery
│   │   └── page.tsx
│   │
│   ├── blog/                    # Blog section
│   │   └── page.tsx
│   │
│   ├── contact/                 # Contact page
│   │   └── page.tsx
│   │
│   ├── admin/                   # Admin dashboard
│   │   ├── page.tsx            # Login page
│   │   ├── dashboard/          # Overview
│   │   ├── bookings/           # Booking management
│   │   ├── activities/         # Activity management
│   │   ├── slideshow/          # Hero slideshow manager
│   │   ├── gallery/            # Gallery manager
│   │   ├── hotels/             # Hotel manager
│   │   └── testimonials/       # Testimonial manager
│   │
│   └── api/                     # API routes
│       └── newsletter/          # Newsletter subscription
│           └── route.ts
│
├── components/                   # Reusable components
│   ├── Navbar.tsx               # Navigation bar
│   ├── Footer.tsx               # Footer
│   ├── WhatsAppButton.tsx       # Floating WhatsApp button
│   ├── HeroSlideshow.tsx        # Hero section slideshow
│   ├── ActivityCard.tsx         # Activity display card
│   ├── LoadingSpinner.tsx       # Loading indicator
│   └── NewsletterForm.tsx       # Newsletter subscription form
│
├── lib/                         # Library code
│   ├── supabase.ts             # Supabase client (browser)
│   └── supabase-admin.ts       # Supabase admin client (server)
│
├── types/                       # TypeScript types
│   └── index.ts                # All type definitions
│
├── utils/                       # Utility functions
│   └── helpers.ts              # Helper functions
│
├── public/                      # Static assets
│   └── images/                 # Local images
│
├── supabase-schema.sql         # Database schema
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript config
├── tailwind.config.js          # Tailwind CSS config
├── next.config.js              # Next.js config
├── .env.example                # Environment variables template
├── .env.local                  # Environment variables (not in git)
├── .gitignore                  # Git ignore rules
├── README.md                   # Main documentation
├── DEPLOYMENT.md               # Deployment guide
└── QUICKSTART.md               # Quick start guide
```

## 📄 Key Files Explained

### Configuration Files

**package.json**
- Dependencies and scripts
- Next.js, React, Supabase, Tailwind CSS

**tsconfig.json**
- TypeScript configuration
- Path aliases (@/*)

**tailwind.config.js**
- Custom colors (primary, secondary, accent)
- Custom animations
- Dark mode support

**next.config.js**
- Image optimization
- Supabase image domains

### Application Files

**app/layout.tsx**
- Root layout
- Includes Navbar, Footer, WhatsApp button
- SEO metadata

**app/page.tsx**
- Homepage
- Hero slideshow
- Featured activities
- Why choose us
- Partner hotels
- Testimonials
- Newsletter

**app/booking/page.tsx**
- Complete booking system
- Activity selection
- Date picker
- Local/International pricing
- Deposit calculation
- Form validation

### Admin Dashboard

**app/admin/page.tsx**
- Admin login
- Supabase authentication

**app/admin/dashboard/page.tsx**
- Statistics overview
- Quick links to management pages

**app/admin/bookings/page.tsx**
- View all bookings
- Filter by status
- Update booking status
- Export to CSV

**app/admin/activities/page.tsx**
- Edit activity details
- Update pricing
- Toggle active/inactive

**app/admin/slideshow/page.tsx**
- Add/remove hero images
- Edit titles and subtitles
- Reorder slides

**app/admin/gallery/page.tsx**
- Upload images
- Categorize images
- Delete images

**app/admin/hotels/page.tsx**
- Add partner hotels
- Edit descriptions
- Toggle active/inactive

**app/admin/testimonials/page.tsx**
- Approve testimonials
- Feature testimonials
- Delete testimonials

### Components

**Navbar.tsx**
- Responsive navigation
- Mobile menu
- Dark mode support

**Footer.tsx**
- Contact information
- Quick links
- Social media links

**WhatsAppButton.tsx**
- Floating action button
- Direct WhatsApp link

**HeroSlideshow.tsx**
- Auto-rotating slideshow
- Manual navigation
- CTA buttons

**ActivityCard.tsx**
- Activity display
- Pricing
- Book now button

**NewsletterForm.tsx**
- Email subscription
- API integration
- Success/error handling

### Library & Utils

**lib/supabase.ts**
- Browser Supabase client
- Used in client components

**lib/supabase-admin.ts**
- Server Supabase client
- Admin operations

**types/index.ts**
- TypeScript interfaces
- Type safety

**utils/helpers.ts**
- Currency formatting
- Date formatting
- Validation functions

### Database

**supabase-schema.sql**
- Complete database structure
- All tables with relationships
- Row Level Security policies
- Default data insertion

## 🗄️ Database Tables

1. **activities** - Tour activities
2. **seasonal_pricing** - Dynamic pricing
3. **bookings** - Customer bookings
4. **testimonials** - Reviews
5. **gallery_images** - Photo gallery
6. **hotels** - Partner hotels
7. **slideshow_images** - Hero slides
8. **contact_info** - Contact details
9. **newsletter** - Email subscribers
10. **blog_posts** - Blog articles
11. **admin_logs** - Activity tracking

## 🎨 Styling

**Tailwind CSS**
- Utility-first CSS
- Custom theme colors
- Responsive design
- Dark mode support

**Custom Colors:**
- Primary: #0077BE (Blue)
- Secondary: #00A8E8 (Light Blue)
- Accent: #FFB800 (Yellow)
- Dark: #1A1A2E (Dark Background)

## 🔐 Security

- Environment variables for secrets
- Row Level Security (RLS)
- Protected admin routes
- Input validation
- SQL injection prevention

## 📱 Features

**Public Site:**
- Responsive design
- SEO optimized
- Fast loading
- Accessible
- Dark mode

**Admin Dashboard:**
- Secure authentication
- Real-time updates
- Easy content management
- Export functionality
- Activity logging

## 🚀 Deployment

**Vercel (Recommended)**
- Automatic deployments
- Edge network
- SSL certificates
- Environment variables
- Analytics

**Alternative:**
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 📊 Performance

- Server-side rendering
- Image optimization
- Code splitting
- Lazy loading
- Caching strategies

## 🔄 Updates

To update the site:
1. Make changes locally
2. Test with `npm run dev`
3. Commit to Git
4. Push to GitHub
5. Vercel auto-deploys

## 📞 Support

For questions or issues:
- Check README.md
- Review DEPLOYMENT.md
- Check Supabase logs
- Review Vercel logs

---

**Built with Next.js 14 + Supabase + Tailwind CSS**
