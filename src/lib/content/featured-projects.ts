import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "projects i've worked on",
  projects: [
    {
      id: getId(),
      name: 'Arcane DAM System',
      description: 'A Digital Asset Management System for Development Teams.',
      tasks:
        'Developed a system for teams to efficiently manage digital assets with a Kanban board, file versioning, categorization, and collaboration tools. Built with Angular, Spring Boot, and AWS for scalability.',
      url: 'https://github.com/IroshanRathnayake/arcane-dam-client.git',
      img: '/assets/arcane-ui.png',
      tags: ['Angular', 'TypeScript', 'Springboot', 'Aws', 'DynamoDB'],
    },
    {
      id: getId(),
      name: 'Book Review Web',
      description:
        'A platform for book lovers to share reviews, ratings, and recommendations.',
      tasks:
        'Developed a web application using Angular for the frontend and Spring Boot for the backend. Implemented secure user authentication with JWT tokens, and used MySQL for storing user data, reviews, and ratings.',
      url: 'https://github.com/IroshanRathnayake/book-review-client.git',
      img: '/assets/landing-page.png',
      tags: ['Angular', 'Spring Boot', 'JWT', 'MySQL'],
    },
    {
      id: getId(),
      name: 'Clothify Store',
      description:
        'A comprehensive POS system for clothing stores with inventory management.',
      tasks:
        'Developed a desktop application using JavaFX for the frontend, implemented Hibernate ORM for database operations, and MySQL for data storage. Features include inventory tracking, sales management, and reporting functionality.',
      url: 'https://github.com/IroshanRathnayake/clothify-store-JavaFx.git',
      img: '/assets/clothify-store-ui.png',
      tags: ['JavaFX', 'Hibernate', 'MySQL', 'Layered Arc'],
    },

    {
      id: getId(),
      name: 'Educa.',
      description:
        'A web-based system for managing student records and academic information.',
      tasks:
        'Developed a full-stack application using Spring Boot and MySQL for backend operations, with HTML and Bootstrap for the frontend. Implemented features for student enrollment, course management, grade tracking, and attendance monitoring.',
      url: 'https://github.com/IroshanRathnayake/student-management-backend-springboot.git',
      img: '/assets/educa-ui.png',
      tags: ['Spring Boot', 'MySQL', 'HTML', 'Bootstrap', 'Java'],
    },
  ],
};

export default featuredProjectsSection;
