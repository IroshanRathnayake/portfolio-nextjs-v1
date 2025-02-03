import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, I’m',
  title: 'Iroshan Rathnayake.',
  tagline: 'Creative Engineering, Smart Solutions.',
  description:
    'Full Stack Developer passionate about crafting innovative web apps, seamlessly blending frontend and backend with Java, Spring Boot, Angular, and cloud services.',
  specialText: 'Currently available for freelance and collaborations',
  cta: {
    title: 'See my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
