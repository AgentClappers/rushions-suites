# Rushion’s Suites - Luxurious Hotel Booking Web Application

## Overview

Rushion's Suites is a fully responsive, modern, and elegant hotel booking web application inspired by high-end platforms like Airbnb and luxury hotel websites. It offers a seamless experience for guests to browse, book, and manage their reservations online. The application is powered by React and TailwindCSS on the frontend, with Supabase providing the backend services including authentication, real-time database, and storage.

## Features

### ✨ Frontend

* **Homepage** with fullscreen hero media, quick search, room highlights, amenities, and testimonials
* **Rooms Listing Page** with advanced filters (price, occupancy, type, amenities)
* **Room Details Page** with a booking calendar, image gallery, and related room suggestions
* **Booking Flow** with check-in/out date pickers, guest selector, dynamic pricing, and availability check
* **User Authentication** using Supabase Auth (email/password)
* **User Dashboard** to manage bookings, profile, and past stays
* **Admin Dashboard** for hotel staff to manage rooms, reservations, and guest analytics
* **About & Contact Pages** with integrated Google Maps and contact form
* Optional **Blog Page** for hotel updates and SEO

### ⚡ Backend (Supabase)

* **Authentication** via Supabase Auth (email/password)
* **Real-time Database** with the following schema:

  * `users` - stores user info
  * `rooms` - stores room listings
  * `bookings` - handles reservations with conflict prevention
  * `payments` - stores Stripe transaction data
* **Storage** for room images and videos
* **Edge Functions** or Supabase triggers to send booking confirmation emails

### 💼 Admin Tools

* Room management (add/edit/delete)
* Booking management dashboard
* View customer details and analytics overview

### 🚀 Tech Stack

* **Frontend**: React, TailwindCSS, React Router, Headless UI
* **Backend**: Supabase (PostgreSQL, Auth, Storage)
* **Payments**: Stripe (secure checkout & webhook handling)
* **Deployment**: Vercel (recommended) or Netlify

## Design Guidelines

* **Color Scheme**: Emerald Green (#046307), White (#FFFFFF), Gold (#FFD700)
* **Typography**: Sophisticated serif fonts for headers, modern sans-serif for body
* **Animations**: Scroll reveal, parallax effects, 3D hover cards, and floating elements
* **Accessibility**: WCAG 2.1 AA compliant with ARIA support and contrast validation

## Installation & Setup

### Prerequisites

* Node.js & npm
* Supabase project & API keys
* Stripe developer account

### Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/AgentClappers/rushions-suites.git
   cd rushions-suites
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env.local` file and add the following:

   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Deploy to Vercel or Netlify by connecting your GitHub repository.

## Notes

* This project uses some light **prompt engineering** for design and architectural inspiration.
* High-quality assets should be optimized before upload.
* Stripe webhook handling can be set up in Supabase Edge Functions or an external server if needed.

## Contribution

If you wish to contribute to Rushion’s Suites, feel free to open issues or submit pull requests.

## License

This project is open-sourced under the MIT License.

---

Built with passion and attention to detail to elevate the digital experience of Rushion’s guests.
