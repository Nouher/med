
import { NavLink, Project, Service, TranslationStrings } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: { fr: 'Accueil', en: 'Home' }, slug: '/' },
  { name: { fr: 'Services', en: 'Services' }, slug: '/services' },
  { name: { fr: 'Projets', en: 'Projects' }, slug: '/projects' },
  { name: { fr: 'À Propos', en: 'About' }, slug: '/about' },
  { name: { fr: 'Contact', en: 'Contact' }, slug: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: { fr: 'Montage Industriel', en: 'Industrial Assembly' },
    description: {
      fr: 'Expertise complète dans l’installation et la mise en service d’équipements industriels lourds.',
      en: 'Complete expertise in the installation and commissioning of heavy industrial equipment.'
    },
    icon: 'Hammer',
    details: {
      fr: ['Lignes de production complexes', 'Maintenance industrielle', 'Mise en service assistée'],
      en: ['Complex production lines', 'Industrial maintenance', 'Assisted commissioning']
    }
  },
  {
    id: 2,
    title: { fr: 'Structures Métalliques', en: 'Steel Structures' },
    description: {
      fr: 'Conception, fabrication et montage de charpentes métalliques de haute précision.',
      en: 'Design, manufacturing and assembly of high-precision steel structures.'
    },
    icon: 'Layout',
    details: {
      fr: ['Charpentes industrielles', 'Hangars de stockage', 'Passerelles et supports'],
      en: ['Industrial frameworks', 'Storage hangars', 'Walkways and supports']
    }
  },
  {
    id: 3,
    title: { fr: 'Silos & Chaudronnerie', en: 'Silos & Boilermaking' },
    description: {
      fr: 'Réalisation de cuves, silos et réservoirs pour divers secteurs d’activité.',
      en: 'Realization of tanks, silos and reservoirs for various sectors of activity.'
    },
    icon: 'Container',
    details: {
      fr: ['Silos à grains', 'Cuves de stockage liquide', 'Chaudronnerie sur mesure'],
      en: ['Grain silos', 'Liquid storage tanks', 'Custom boilermaking']
    }
  },
  {
    id: 4,
    title: { fr: 'Projets Clés en Main', en: 'Turnkey Projects' },
    description: {
      fr: 'Gestion intégrale de votre projet industriel, de la conception à la réception finale.',
      en: 'Full management of your industrial project, from design to final handover.'
    },
    icon: 'Package',
    details: {
      fr: ['Ingénierie complète', 'Gestion de chantier', 'Respect des délais et budgets'],
      en: ['Complete engineering', 'Site management', 'Strict adherence to schedules and budgets']
    }
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: { fr: 'Complexe Agro-industriel Casablanca', en: 'Casablanca Agro-industrial Complex' },
    category: { fr: 'Silos & Montage', en: 'Silos & Assembly' },
    image: 'https://picsum.photos/id/191/800/600',
    description: {
      fr: 'Installation d’une batterie de 12 silos de stockage de céréales avec système de manutention automatisé.',
      en: 'Installation of a battery of 12 grain storage silos with automated handling system.'
    },
    location: 'Casablanca, Maroc',
    year: '2023'
  },
  {
    id: 2,
    title: { fr: 'Usine de Ciment Tanger Med', en: 'Tanger Med Cement Plant' },
    category: { fr: 'Structure Métallique', en: 'Steel Structure' },
    image: 'https://picsum.photos/id/366/800/600',
    description: {
      fr: 'Montage de la structure métallique principale et installation des convoyeurs.',
      en: 'Assembly of the main steel structure and installation of conveyors.'
    },
    location: 'Tanger, Maroc',
    year: '2022'
  },
  {
    id: 3,
    title: { fr: 'Projet Minier Afrique de l’Ouest', en: 'West Africa Mining Project' },
    category: { fr: 'Montage Industriel', en: 'Industrial Assembly' },
    image: 'https://picsum.photos/id/442/800/600',
    description: {
      fr: 'Montage mécanique complet d’une unité de broyage pour une exploitation aurifère.',
      en: 'Complete mechanical assembly of a grinding unit for a gold mining operation.'
    },
    location: 'Sénégal',
    year: '2021'
  }
];

export const TEXTS: TranslationStrings = {
  hero_headline: {
    fr: 'Entreprise de montage industriel au Maroc et en Afrique',
    en: 'Industrial assembly company in Morocco and Africa'
  },
  hero_subheadline: {
    fr: 'Votre partenaire de confiance pour les projets industriels clés en main.',
    en: 'Your trusted partner for turnkey industrial projects.'
  },
  cta_primary: {
    fr: 'Demander un devis',
    en: 'Request a quote'
  },
  cta_secondary: {
    fr: 'Nos services',
    en: 'Our services'
  },
  cta_expert: {
    fr: 'Parler à un expert',
    en: 'Talk to an expert'
  },
  about_title: {
    fr: '25 ans d’expertise industrielle',
    en: '25 years of industrial expertise'
  },
  about_content: {
    fr: 'Med Afrique Montage accompagne depuis plus de 25 ans les acteurs industriels dans la réalisation de projets complexes au Maroc et en Afrique, avec rigueur, sécurité et performance.',
    en: 'For more than 25 years, Med Afrique Montage has supported industrial players in delivering complex projects across Morocco and Africa with precision, safety, and performance.'
  },
  stats_experience: { fr: '25+ Ans', en: '25+ Years' },
  stats_projects: { fr: '500+ Projets', en: '500+ Projects' },
  stats_regions: { fr: '15+ Pays', en: '15+ Countries' },
  stats_security: { fr: '100% Sécurité', en: '100% Safety' },
  projects_title: { fr: 'Nos Réalisations', en: 'Our Achievements' },
  services_title: { fr: 'Nos Domaines d’Expertise', en: 'Our Fields of Expertise' },
  methodology_title: { fr: 'Notre Méthodologie', en: 'Our Methodology' },
  footer_tagline: { fr: 'Construire demain, au-delà de 2030.', en: 'Building tomorrow, beyond 2030.' }
};
