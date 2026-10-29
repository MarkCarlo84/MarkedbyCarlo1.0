# MarkedbyCarlo — Premium NFC Digital Business Card Website

An elegant, modern, minimalist, and responsive **Digital Business Card Website** built with **React 19**, **TypeScript**, and **Vite**, designed specifically for NFC card tap interactions and static deployment on **Vercel**.

When someone taps an NFC business card with their smartphone, this website opens instantly and presents **MarkedbyCarlo**'s professional identity, IT graduate background, and featured projects in a refined, physical-business-card-style layout.

---

## ✨ Features & Design Highlights

- **🎴 Digital Card Aesthetic**: Designed to feel like an ultra-luxe physical card translated into a digital experience — clean typography, subtle borders, delicate shadows, and high contrast.
- **🎨 Enhanced Header Banner & Signature Calligraphy Logo**: Full-bleed luxury top banner featuring the signature **MarkedbyCarlo** calligraphy logo with seamless theme-adaptive blending (luminous platinum foil in dark mode, jet black ink in light mode) and an overlapping circular graduate portrait frame with a verified BSIT graduate ribbon.
- **🎓 Dedicated Graduate Profile Section**: Highlights degree (*Bachelor of Science in Information Technology*), core technical competencies (Full-Stack, Cloud & Databases, UI/UX, System Analysis), and professional bio.
- **🚀 IT Graduate Project Carousel**: An interactive touch/swipe-enabled carousel showcasing featured software projects, tech stack badges, high-res UI previews, and live repository links with smooth auto-advancing animation and manual chevron/dot controls.
- **💬 Social & Developer Profiles**: Quick-access buttons for **GitHub**, **Instagram**, and **Facebook** with official vector icons and secure external link attributes.
- **⚡ 100% Static & Lightweight**: No backend, database, CMS, or authentication required. Sub-second initial load on 4G/5G mobile networks.
- **📱 Mobile-First NFC Optimization**: Fits immediately above the fold on typical mobile screens without requiring scrolling. Minimum 44×44px touch targets.
- **💾 One-Tap "Save Contact" (.vcf)**: Generates and downloads a valid RFC 2426 vCard 3.0 file that directly adds MarkedbyCarlo to iOS Contacts or Android Google Contacts.
- **🔗 Share Digital Card**: Native Web Share API integration on supported mobile devices with an automatic clipboard copy fallback and clear toast feedback.
- **📞 Direct Contact Actions**: Clean, clickable `tel:` mobile phone link, `mailto:` email link, and map location link.
- **⚙️ Single-File Configuration**: All owner data, project items, and profile details live in [`src/config/businessCard.ts`](src/config/businessCard.ts).
- **🌗 Subtle Theme Switching**: Obsidian dark mode by default with an interactive light mode toggle, saved automatically to `localStorage`.

---

## 📁 Component & Project Structure

```text
├── public/
│   ├── favicon.svg                   # Web favicon
│   └── images/                       # Local assets
│       ├── markedbycarlo-logo.png    # Signature calligraphy logo
│       ├── carlo-profile.jpg         # Graduation portrait (arms crossed)
│       ├── carlo-grad-pose.jpg       # Graduation portrait (chin pose)
│       ├── carlo-grad-cap.jpg        # Graduation portrait (holding cap)
│       ├── project-pos.jpg           # Cloud POS project mockup
│       ├── project-rfid.jpg          # Smart RFID Campus Portal mockup
│       └── project-booking.jpg       # Healthcare booking app mockup
├── src/
│   ├── components/
│   │   ├── BusinessCard.tsx          # Main digital card container
│   │   ├── ProfileHeader.tsx         # Top banner, signature logo, avatar & title
│   │   ├── CardActions.tsx           # "Save Contact" (.vcf) & "Share Card" buttons
│   │   ├── GraduateProfileSection.tsx# Dedicated IT graduate profile & competencies
│   │   ├── ProjectsCarousel.tsx      # Animated touch-enabled IT projects carousel
│   │   ├── ContactDetails.tsx        # Mobile, Email, and Location direct links
│   │   ├── SocialLinks.tsx           # GitHub, Instagram, and Facebook buttons
│   │   ├── Footer.tsx                # Minimal copyright and NFC indicator
│   │   └── Toast.tsx                 # Ephemeral action feedback notification
│   ├── config/
│   │   └── businessCard.ts           # Central owner configuration (single source of truth)
│   ├── types/
│   │   └── businessCard.ts           # TypeScript interface definitions
│   ├── utils/
│   │   └── vcard.ts                  # RFC 2426 vCard generator and downloader
│   ├── App.tsx                       # Top-level application component
│   ├── index.css                     # Custom CSS design system, tokens, and animations
│   └── main.tsx                      # React entry point
├── index.html                        # SEO metadata, Open Graph tags & Google Fonts
├── vercel.json                       # Vercel static routing, rewrites & caching
└── package.json
```

---

## 🚀 Quick Start & Local Development

### 1. Prerequisites
- Node.js (v18 or higher recommended)
- npm, pnpm, or yarn

### 2. Installation
```bash
# Clone or navigate to the project directory
cd PersonalBusinessContact

# Install dependencies
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173` (or the port indicated in your terminal).

### 4. Build for Production
```bash
npm run build
```
The optimized production bundle will be created in the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🎨 Owner Configuration

All owner details are managed in [`src/config/businessCard.ts`](src/config/businessCard.ts):

```typescript
export const businessCardConfig: BusinessCardConfig = {
  fullName: 'MarkedbyCarlo',
  displayName: 'Mark Carlo Garcia',
  professionalTitle: 'BSIT Graduate & Software Developer',
  businessName: 'MarkedbyCarlo',
  shortDescription:
    'Information Technology graduate specializing in modern full-stack web applications, cloud architectures, and responsive software solutions.',

  profileImage: '/images/carlo-profile.jpg',
  logoImage: '/images/markedbycarlo-logo.png',

  phoneNumber: '+63 995 897 7261',
  phoneRaw: '+639958977261',
  emailAddress: 'garciamarkcarlo84@gmail.com',
  businessAddress: 'Laguna, Philippines',

  facebookUrl: 'https://www.facebook.com/MrkCrl0926',
  instagramUrl: 'https://www.instagram.com/kramcrl/',
  githubUrl: 'https://github.com/MarkCarlo84',
  websiteUrl: 'https://github.com/MarkCarlo84',
  // ...profileInfo and projects
}
```

---

## 🏷️ Encoding to Physical NFC Cards

1. Deploy your website to **Vercel** (or any static host) and copy your live URL (e.g., `https://markedbycarlo.vercel.app`).
2. Download a free NFC writing app on your smartphone:
   - **iOS / Android**: *NFC Tools* (by wakdev)
3. Open *NFC Tools* → Select **Write** → Select **Add a record**.
4. Choose **URL / URI** and paste your live website URL.
5. Tap **Write / 13 Bytes** and hold the back of your smartphone against your physical NFC card (e.g., NTAG213, NTAG215, or NTAG216).
6. Tapping the card with any modern smartphone will instantly open your digital business card!

---

## ☁️ Deployment on Vercel

### Deploy via Vercel CLI
```bash
npm i -g vercel
vercel
```

### Deploy via GitHub
1. Push your repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Framework preset: **Vite** (auto-detected).
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Click **Deploy**.

---

## 📄 License
MIT License. Feel free to use and modify for your personal business or portfolio.
