/* eslint-disable @typescript-eslint/no-explicit-any */
import { Icons } from './components/icons';

type Config = {
  name: string;
  avatar: string;
  title: string;
  siteUrl: string;
  socials: {
    name: string;
    url: string;
    icon: keyof typeof Icons;
  }[];
  calendarLink?: string;
  description: string | any;
  projects: {
    name: string;
    icon?: keyof typeof Icons;
    image?: string;
    description: string;
    url: string;
    tags: {
      name: string;
      icon: keyof typeof Icons;
    }[];
    github?: string;
    featured: boolean;
    testimonial?: string;
  }[];
  experience: {
    id: number;
    title: string;
    date: string;
    description: any;
  }[];
  openSource?: {
    description?: string;
    projects?: {
      repository: string;
      description: string | any;
      title: string;
      link: string;
    }[];
  };
};

export const CONFIG: Config = {
  name: 'Dileep B C',
  avatar: '/profile-pic.jpg',
  title: 'Software Engineer',
  siteUrl: '',
  socials: [
    {
      name: 'GitHub',
      url: 'https://github.com/dileepbc01',
      icon: 'github',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/dileep-b-c-4b1746279/',
      icon: 'linkedin',
    },
    {
      name: 'dileepbc01@gmail.com',
      url: 'mailto:dileepbc01@gmail.com',
      icon: 'email',
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/dileep32/',
      icon: 'leetcode',
    },
  ],
  description: (
    <>
      An experienced Full-Stack Developer with 2 years of expertise in building
      web applications using JavaScript as the primary language. Skilled in
      Next.js and Express.js frameworks, with hands-on experience integrating AI
      functionalities and creating AI agents for SaaS products. Proficient in
      problem-solving, taking ownership of tasks, and proactive approach to
      project ownership and execution.
    </>
  ),
  projects: [],
  experience: [
    {
      id: 1,
      title: 'Aglint AI',
      date: 'June 2023 - January 2025',
      description: (
        <>
          Aglint – US-based startup focused on an ATS system enhanced with
          scheduling capabilities powered by generative AI. I Worked on
          end-to-end candidate database with advanced search and filtering
          functionalities using vector search. Implemented backend APIs for
          interview scheduling with interviewers and candidate seamlessly
          integrating Google Calendar APIs. Created an email agent that
          interacts with candidates to schedule, reschedule, and cancel
          interviews, reducing recruiter involvement and improving candidate
          experience. Built a phone-based scheduling agent to enhance
          accessibility and further improve candidate experience using Twilio
          and Open ai realtime API.
        </>
      ),
    },
    {
      id: 2,
      title: 'Figmatic',
      date: 'January 2023 - June 2023',
      description: (
        <>
          Figmatic - Webflow service Agency company. I worked on a project
          Boltflow, which given a website link would crawl the whole site and
          estimate the price to build it in webflow. I built crawling apis,
          which would crawl the whole site identify the integrations ,
          distinguish page as a dynamic or static pages and take screenshot and
          estimate the cost for individual pages.
        </>
      ),
    },
  ],
};
