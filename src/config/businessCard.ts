import type { BusinessCardConfig } from '../types/businessCard'

/**
 * =========================================================================
 * NFC DIGITAL BUSINESS CARD — OWNER CONFIGURATION
 * =========================================================================
 * Single source of truth for the digital business card.
 *
 * Owner: MarkedbyCarlo (Mark Carlo Garcia) — IT Graduate
 * =========================================================================
 */
export const businessCardConfig: BusinessCardConfig = {
  // A. Profile Header & Brand Identity
  fullName: 'MarkedbyCarlo',
  displayName: 'Mark Carlo Garcia',
  professionalTitle: 'BSIT Graduate & Software Developer',
  businessName: 'MarkedbyCarlo',
  shortDescription:
    'Information Technology graduate specializing in modern full-stack web applications, cloud architectures, and responsive software solutions.',
  availability: 'Open to opportunities',

  // Profile Picture & Signature Calligraphy Logo
  profileImage: '/images/carlo-profile.jpg',
  logoImage: '/images/markedbycarlo-logo.png',

  // B. Contact Information
  phoneNumber: '+63 995 897 7261',
  phoneRaw: '+639958977261',
  emailAddress: 'garciamarkcarlo84@gmail.com',
  businessAddress: 'Laguna, Philippines',

  // C. Social & Developer Links (Facebook, Instagram, GitHub)
  facebookUrl: 'https://www.facebook.com/MrkCrl0926',
  instagramUrl: 'https://www.instagram.com/kramcrl/',
  githubUrl: 'https://github.com/MarkCarlo84',

  // Website / Portfolio
  websiteUrl: 'https://github.com/MarkCarlo84',

  // D. IT Graduate Profile & Technical Competencies
  profileInfo: {
    degree: 'Bachelor of Science in Information Technology',
    specialization: 'Software Engineering & Web Systems',
    highlights: [
      'Full-Stack Web & Mobile Development',
      'Database Architecture & Cloud Systems',
      'UI/UX Engineering & Modern Frameworks',
      'System Analysis & Agile Workflows',
    ],
    bio: 'Equipped with a solid foundation in software engineering, database administration, and modern web architectures. Dedicated to crafting scalable, high-performance digital solutions with meticulous attention to detail and user experience.',
  },

  // E. Dedicated Projects Carousel Showcase
  projects: [
    {
      id: 'cloud-pos',
      title: 'Cloud POS & Inventory Suite',
      category: 'Full-Stack Web App',
      description:
        'Enterprise point-of-sale and inventory analytics platform featuring real-time stock telemetry, sales charting, and role-based permissions.',
      tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
      image: '/images/project-pos.jpg',
      linkUrl: 'https://github.com/MarkCarlo84',
      githubUrl: 'https://github.com/MarkCarlo84',
    },
    {
      id: 'rfid-campus',
      title: 'Smart RFID Campus Access Portal',
      category: 'IoT & Security System',
      description:
        'Real-time automated attendance tracking portal integrated with physical RFID scanners, live building capacity heatmaps, and security logs.',
      tags: ['Next.js', 'Express', 'IoT Hardware', 'Tailwind'],
      image: '/images/project-rfid.jpg',
      linkUrl: 'https://github.com/MarkCarlo84',
      githubUrl: 'https://github.com/MarkCarlo84',
    },
    {
      id: 'clinic-scheduler',
      title: 'MediSync Telemedicine Scheduler',
      category: 'Healthcare PWA',
      description:
        'Mobile-first clinical consultation booking platform with doctor calendars, live queue tracking, and automated patient notifications.',
      tags: ['TypeScript', 'React', 'Supabase', 'REST API'],
      image: '/images/project-booking.jpg',
      linkUrl: 'https://github.com/MarkCarlo84',
      githubUrl: 'https://github.com/MarkCarlo84',
    },
  ],

  // Visuals & Themes
  themePreference: 'dark',
  accentColor: '#181920',
  accentHover: '#2a2c38',
}
