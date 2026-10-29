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
    'Information Technology graduate specializing in modern full-stack web applications, and responsive software solutions.',
  availability: 'Open to opportunities',

  // Profile Picture & Signature Calligraphy Logo
  profileImage: '/images/carlo-profile.jpg',
  logoImage: '/images/markedbycarlo-logo.png',

  // B. Contact Information
  phoneNumber: '+65 949 925 8593',
  phoneRaw: '+659499258593',
  emailAddress: 'garciamarkcarlo84@gmail.com',
  businessAddress: 'Laguna, Philippines',

  // C. Social & Developer Links (Facebook, Instagram)
  facebookUrl: 'https://www.facebook.com/MrkCrl0926',
  instagramUrl: 'https://www.instagram.com/kramcrl/',

  // Website / Portfolio
  websiteUrl: 'https://github.com/MarkCarlo84',

  // Project count badge
  projectsCount: '20+',

  // D. IT Graduate Profile & Technical Competencies
  profileInfo: {
    degree: 'Bachelor of Science in Information Technology',
    specialization: 'Software Developer & Web Developer',
    highlights: [
      'Full-Stack Web & Mobile Development',
      'Database Architecture',
      'UI/UX Engineering & Modern Frameworks',
      'System Analysis & Agile Workflows',
    ],
    bio: 'Equipped with a solid foundation in software development, database administration, and modern web architectures. Dedicated to crafting scalable, high-performance digital solutions with meticulous attention to detail and user experience.',
  },

  // E. Dedicated Projects Carousel Showcase
  projects: [
    {
      id: 'personal-portfolio',
      title: 'Personal Portfolio',
      category: 'Static Web Application',
      description:
        'Modern digital portfolio and developer identity showcasing featured projects, technical competencies, and professional contact touchpoints. Engineered as a high-performance static website deployed on Vercel.',
      tags: ['React', 'TypeScript', 'Vercel', 'Static Web'],
      image: '/images/project-portfolio.png',
      linkUrl: 'https://markedbycarlomc.vercel.app',
      githubUrl: 'https://github.com/MarkCarlo84',
    },
    {
      id: 'nfc-business-card',
      title: 'NFC Business/Personal Card',
      category: 'Digital Identity & Contactless Tech',
      description:
        'Contactless smart business card integrating physical NFC cards with an instant-access digital web profile, one-tap contact downloads, and social links. Built as a lightweight static web app hosted on Vercel with no database required.',
      tags: ['TypeScript', 'Vercel', 'NFC Technology', 'Static Website'],
      image: '/images/project-nfc.jpg',
      linkUrl: 'https://markedbycarlomc.vercel.app',
      githubUrl: 'https://github.com/MarkCarlo84',
    },
    {
      id: 'ccs-monitoring',
      title: 'CCS Student Monitoring',
      category: 'College Academic Management System',
      description:
        'Student tracking and academic monitoring portal created for the College of Computing Studies (Alma Mater). Features full-cycle student record management, course monitoring, and administrative reporting.',
      tags: ['React', 'Laravel', 'MySQL', 'REST API'],
      image: '/images/project-ccs.png',
      linkUrl: 'https://github.com/MarkCarlo84',
      githubUrl: 'https://github.com/MarkCarlo84',
    },
    {
      id: 'cabuyao-nutrition',
      title: 'Cabuyao Nutrition Static Website',
      category: 'Public Health & Community Portal',
      description:
        'Official community health information and nutrition advisories web platform developed during internship (OJT) for the City Nutrition Office of Cabuyao. Delivered as an accessible, responsive static web experience.',
      tags: ['React', 'Vercel', 'Static Website', 'Responsive UI'],
      image: '/images/project-cabuyao.png',
      linkUrl: 'https://github.com/MarkCarlo84',
      githubUrl: 'https://github.com/MarkCarlo84',
    },
    {
      id: 'govote-platform',
      title: 'Voting Platform',
      category: 'Full-Stack E-Voting System',
      description:
        'Secure, transparent, and user-friendly digital electronic voting platform empowering organizations and students to cast verified ballots remotely with live vote tallying and audit capabilities.',
      tags: ['React', 'Laravel', 'MySQL', 'Full-Stack'],
      image: '/images/project-voting.png',
      linkUrl: 'https://github.com/MarkCarlo84',
      githubUrl: 'https://github.com/MarkCarlo84',
    },
  ],

  // Visuals & Themes
  themePreference: 'dark',
  accentColor: '#181920',
  accentHover: '#2a2c38',
}
