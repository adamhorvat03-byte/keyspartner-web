import React from 'react';

export interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  ariaLabel: string;
}
