import ProjectCard from '@/components/homepage/projectCard'
import { projects } from '@/components/homepage/projects'
import Tag from '@/components/homepage/tag'

export default function Home() {
  return (
    <main>
      <div className='flex flex-col items-center justify-center p-10 gap-10 w-full h-[50vh] xl:h-[70vh] max-w-[1400px] mx-auto'>
        <div className='text-[36px] md:text-[48px] xl:text-[72px] text-center max-w-[700px] md:max-w-[600px] xl:max-w-[700px] leading-[1.2em]'>
          A brand and product designer working with clients globally
        </div>
        <div className='hidden md:flex justify-start items-center gap-[10px]'>
          <p className='text-sm'>Expertise</p>
          <Tag label='Branding' />
          <Tag label='Product' />
          <Tag label='Design Systems' />
        </div>
      </div>
      <div className='grid grid-col-1 md:grid-cols-2 p-10 gap-x-5 gap-y-10 m-auto max-w-[1400px]'>
        {projects.map((project, index) => (
          <ProjectCard
            key={index + project.title}
            title={project.title}
            src={project.src}
            type={project.type}
            available={project.available}
          />
        ))}
      </div>
    </main>
  )
}
