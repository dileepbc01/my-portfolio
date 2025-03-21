import Header from '@/components/header';
import Project from '@/components/project';
import { TimelineLayout } from '@/components/timeline/timeline-layout';
import { CONFIG } from '@/config';

export default function Home() {
  return (
    <div className='animate-slide-from-down-and-fade-2 flex flex-col gap-12'>
      <Header />
      <div className='space-y-2 px-4'>
        <h2 className='font-semibold'>About me</h2>
        <p className='leading-6 text-muted-foreground'>{CONFIG.description}</p>
      </div>

      <div className='px-4'>
        <h2 className='font-semibold mb-6'>Experience</h2>
        <TimelineLayout items={CONFIG.experience} />
      </div>
      <div className='flex flex-col gap-3'>
        <h2 className='px-4 font-semibold'>Projects</h2>
        {CONFIG.projects
          .filter((project) => project.featured)
          .map((project, idx) => (
            <Project
              key={idx}
              name={project.name}
              icon={project.icon}
              description={project.description}
              image={project.image}
              url={project.url}
              tags={project.tags}
              testimonial={project.testimonial}
              github={project.github}
            />
          ))}
      </div>
    </div>
  );
}
