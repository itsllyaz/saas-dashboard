# SaaS Dashboard Setup Guide

## Overview
This is a comprehensive multi-use SaaS Dashboard built with Next.js 16, Supabase, and Recharts. It includes three complete modules: Analytics, Project Management, and Subscriptions management.

## Features Implemented

### Authentication
- User signup and login pages
- Secure password hashing via Supabase Auth
- Session management with HTTP-only cookies
- Protected dashboard routes

### Dashboard Core
- Responsive sidebar navigation (mobile-friendly)
- Dark/Light theme support with persistent storage
- Header with user menu and theme toggle
- KPI cards with trend indicators

### Analytics Module
- Monthly revenue trends with target lines
- Conversion funnel visualization
- User engagement by channel
- Key performance indicators

### Project Management Module
- Project cards with status tracking
- Progress bars and task completion tracking
- Team member avatars
- Active tasks summary

### Subscription Module
- Current plan details
- Pricing plans comparison
- Invoice history and download functionality
- Plan upgrade options

### Team Management
- Team member listing with roles
- Add new team members
- Role-based access (Owner, Member)
- Team statistics

### Settings & Preferences
- Profile management
- Theme preferences (Light/Dark/System)
- Notification settings
- Account management

## Database Schema

The application uses the following tables:
- `profiles` - User profiles and roles
- `user_preferences` - User theme and notification settings
- `teams` - Team information
- `team_members` - Team membership and roles
- `analytics_data` - Metrics data (revenue, traffic, engagement, users)
- `projects` - Project information
- `tasks` - Task management with status and priority
- `subscriptions` - Subscription plans and status
- `invoices` - Billing invoices

All tables include Row Level Security (RLS) policies for data protection.

## Running the Application

### Development
```bash
pnpm install
pnpm dev
```

The application will be available at `http://localhost:3000`

### First Time Setup
1. Sign up with a new account or use the demo credentials
2. A default team will be created automatically
3. Access the dashboard at `/dashboard`

### Database Migration
SQL migration scripts are in the `/scripts` folder:
- `01-init-schema.sql` - Creates all tables and RLS policies
- `02-seed-data.sql` - Adds sample data

To run migrations in Supabase:
1. Go to your Supabase project dashboard
2. Navigate to SQL Editor
3. Copy and paste the contents of each SQL file
4. Execute the queries

## Environment Variables
Required Supabase environment variables (already set by the integration):
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `POSTGRES_URL`

## Project Structure
```
app/
├── auth/
│   ├── login/page.tsx
│   └── signup/page.tsx
├── dashboard/
│   ├── page.tsx (Overview)
│   ├── analytics/page.tsx
│   ├── projects/page.tsx
│   ├── subscriptions/page.tsx
│   ├── team/page.tsx
│   ├── settings/page.tsx
│   └── layout.tsx
├── layout.tsx
└── providers.tsx

components/
├── dashboard/
│   ├── sidebar.tsx
│   ├── header.tsx
│   └── kpi-card.tsx
└── ui/ (shadcn components)

lib/
├── db.ts (Database types and clients)
├── auth.ts (Authentication functions)
└── utils.ts (Utilities)
```

## Key Features

### Security
- Row Level Security (RLS) on all tables
- Protected routes with middleware
- Secure authentication with Supabase Auth
- Input validation with Zod

### Responsive Design
- Mobile-first approach
- Collapsible sidebar for mobile
- Responsive grid layouts
- Touch-friendly interface

### Data Visualization
- Recharts library for charts
- Multiple chart types (Line, Bar, Area, Pie)
- Interactive tooltips
- Dark mode support for charts

### Theme System
- Next-themes for theme persistence
- Tailwind CSS classes for dark mode
- Automatic system preference detection
- Smooth theme transitions

## Authentication Workflow

1. User signs up → Profile created → Team created → Subscription created
2. User logs in → Session established → Redirect to dashboard
3. Protected routes check authentication via middleware
4. All data queries respect RLS policies

## Customization

### Adding New Pages
1. Create new route in `/app/dashboard/[feature]/page.tsx`
2. Add navigation item to `components/dashboard/sidebar.tsx`
3. Create any required components in `components/`

### Modifying Chart Data
Update the data arrays in each analytics/chart page to connect to real Supabase data using SWR for client-side data fetching.

### Changing Theme Colors
Edit `tailwind.config.ts` to customize colors. The app uses Tailwind's color palette and semantic token system.

## Production Deployment

1. Build the project: `pnpm build`
2. Deploy to Vercel: `git push origin main`
3. Ensure environment variables are set in Vercel project settings
4. Verify Supabase connection in production

## Support

For more information on the technologies used:
- [Next.js Documentation](https://nextjs.org)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Recharts](https://recharts.org)
