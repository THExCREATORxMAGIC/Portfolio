import React from 'react';
import { LucideIcon } from "lucide-react";

export interface AppConfig {
  id: string;
  title: string;
  icon: LucideIcon;
  color: string;
  component: React.ComponentType<any>;
  isDesktopIcon?: boolean;
}

export interface WindowState {
  id: string;
  appId: string;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  position: { x: number; y: number };
  size: { width: number; height: number };
}

export interface Project {
  title: string;
  tech: string;
  description: string;
  image?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  points: string[];
}

export interface Wallpaper {
  id: string;
  name: string;
  url: string;
  thumbnail: string;
}

export interface ResumeData {
  profile: string;
  skills: {
    category: string;
    items: string[];
  }[];
  experience: Experience[];
  projects: Project[];
  education: {
    degree: string;
    university: string;
    period: string;
    location: string;
    details: string;
  };
  contact: {
    email: string;
    phone: string;
    location: string;
    social: { label: string; url: string }[];
  };
}