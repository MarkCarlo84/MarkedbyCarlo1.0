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
      id: 'personal-portfolio',
      title: 'Personal Portfolio',
      category: 'Static Web Application',
      description:
        'Personal digital portfolio and developer showcase engineered with the React framework. Features editorial dark-mode aesthetics, responsive typography, and lightning-fast edge delivery hosted on Vercel as a high-performance static website without requiring a database.',
      tags: ['React', 'TypeScript', 'Vercel', 'Tailwind / CSS', 'Static Website'],
      image: '/images/project-portfolio.png',
      linkUrl: 'https://markedbycarlomc.vercel.app/',
      githubUrl: 'https://github.com/MarkCarlo84',
    },
    {
      id: 'nfc-business-card',
      title: 'NFC Business/Personal Card',
      category: 'NFC Digital Identity',
      description:
        'Next-generation contactless digital business card designed for seamless networking via physical NFC tap and QR scan. Built as a fast, database-free static web application using TypeScript and deployed on Vercel with instant RFC vCard downloading and responsive theme switching.',
      tags: ['TypeScript', 'React', 'Vercel', 'NFC Tech', 'Static Web App'],
      image: '/images/project-nfc-card.jpg',
      linkUrl: 'https://markedbycarlomc.vercel.app/',
      githubUrl: 'https://github.com/MarkCarlo84',
    },
    {
      id: 'ccs-student-monitoring',
      title: 'CCS Student Monitoring',
      category: 'Full-Stack Web System',
      description:
        'Comprehensive student monitoring and academic record tracking system developed for the College of Computing Studies (CCS) at Pamantasan ng Cabuyao. Engineered with a responsive React frontend, robust Laravel backend API, and a structured MySQL relational database.',
      tags: ['React', 'Laravel', 'MySQL', 'PHP', 'REST API'],
      image: '/images/project-ccs-monitoring.png',
      linkUrl: 'https://github.com/MarkCarlo84',
      githubUrl: 'https://github.com/MarkCarlo84',
    },
    {
      id: 'cabuyao-nutrition',
      title: 'Cabuyao Nutrition Static Website',
      category: 'Public Health & OJT Portal',
      description:
        'Official community nutrition advocacy and public health information portal developed during on-the-job training (OJT) for the City Nutrition Office of Cabuyao. Built with the React framework as a fast, accessible, lightweight static website deployed for citywide health initiatives.',
      tags: ['React', 'JavaScript', 'HTML5 / CSS3', 'Vercel', 'Static Website'],
      image: '/images/project-cabuyao-nutrition.png',
      linkUrl: 'https://github.com/MarkCarlo84',
      githubUrl: 'https://github.com/MarkCarlo84',
    },
  ],

  // Visuals & Themes
  themePreference: 'dark',
  accentColor: '#181920',
  accentHover: '#2a2c38',
}
