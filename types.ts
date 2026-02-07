import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  rating?: number;
}

export interface Project {
  title: string;
  category: string;
  image: string;
}

export interface BlogPost {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  author: string;
}

export interface ProgressBar {
  label: string;
  value: number;
}