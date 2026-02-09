import { ReactNode } from 'react';

export interface Feature {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
}

export interface NavItem {
  label: string;
  href: string;
}