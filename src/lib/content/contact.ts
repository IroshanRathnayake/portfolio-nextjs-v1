import { author } from '@/lib/content/portfolio';
import { ContactSectionType } from '@/lib/types/sections';

export const contactSection: ContactSectionType = {
  title: 'Let\'s Connect!',
  subtitle: "What's next?",
  paragraphs: [
    "I’m currently an Associate Software Engineer at Ekara, New Zealand, and always open to new opportunities, collaborations, or freelance work. If you have a project in mind or just want to chat, feel free to reach out my inbox is always open!",
  ],
  link: `mailto:${author.email}`,
};
