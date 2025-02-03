import { SkillsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'full stack development',
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Building full-stack web applications using Angular with TypeScript, TailwindCSS, ShadCN, and Spring Boot',
        'Developing responsive single-page applications using React.js',
        'Creating RESTful APIs using Express for backend development with Node.js and Python',
      ],
      softwareSkills: [
        { name: 'html-5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        {
          name: 'typeScript',
          icon: 'vscode-icons:file-type-typescript-official',
        },
        { name: 'nodejs', icon: 'logos:nodejs-icon' },
        { name: 'springboot', icon: 'logos:spring' },
        { name: 'angularjs', icon: 'logos:angular-icon' },
        { name: 'reactjs', icon: 'logos:react' },
        { name: 'nextjs', icon: 'logos:nextjs-icon' },
        { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
        { name: 'python', icon: 'logos:python' },
        { name: 'docker', icon: 'logos:docker' },
        { name: 'AWS', icon: 'logos:aws' },
        { name: 'database', icon: 'vscode-icons:file-type-sql' },
      ],
    },
    {
      id: getId(),
      title: 'UI/UX designing',
      lottie: {
        light: '/lotties/designing.json',
        dark: '/lotties/designing-dark.json',
      },
      points: [
        'Proficient in crafting intuitive interfaces using Figma.',
        'Skilled in creating design and comprehensive style guides.',
        'Delivering seamless and accessible design solutions.',
      ],
      softwareSkills: [
        { name: 'figma', icon: 'logos:figma' },
        { name: 'adobe XD', icon: 'logos:adobe-xd' },
        { name: 'adobe photoshop', icon: 'logos:adobe-photoshop' },
      ],
    },
  ],
};
