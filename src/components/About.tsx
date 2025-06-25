'use client'

import Image from 'next/image'

interface AboutProps {
  isActive: boolean
}

export default function About({ isActive }: AboutProps) {
  const techStack = [
    { name: 'Python', icon: '/assets/images/icon-python.svg' },
    { name: 'AWS', icon: '/assets/images/icon-aws.svg' },
    { name: 'PostgreSQL', icon: '/assets/images/icon-postgresql.svg' },
    { name: 'Bazel', icon: '/assets/images/icon-bazel.svg' },
    { name: 'Git', icon: '/assets/images/icon-git.svg' },
    { name: 'GitHub Actions', icon: '/assets/images/icon-github-actions.svg' },
    { name: 'Pandas', icon: '/assets/images/icon-pandas.svg' },
    { name: 'Docker', icon: '/assets/images/icon-docker.svg' },
    { name: 'Flask', icon: '/assets/images/icon-flask.svg' },
    { name: 'FastAPI', icon: '/assets/images/icon-fastapi.svg' },
    { name: 'OpenCV', icon: '/assets/images/icon-opencv.svg' },
    { name: 'MySQL', icon: '/assets/images/icon-mysql.svg' },
    { name: 'MongoDB', icon: '/assets/images/icon-mongodb.svg' },
    { name: 'Django REST', icon: '/assets/images/icon-django-rest.svg' },
  ]

  const personalEndeavors = [
    {
      title: 'Open-Source Explorations and Android Customization',
      description: 'Experimenting with self-hosted open-source applications and customizing Android operating systems to explore different alternatives.',
      icon: '/assets/images/icon-open-source.svg'
    },
    {
      title: 'Automation Scripting',
      description: 'Creating Python and shell scripts to automate tasks and improve efficiency.',
      icon: '/assets/images/icon-dev.svg'
    },
    {
      title: 'Tech Blogging',
      description: 'Sharing my tech insights and experiences and things I find interesting through personal blog posts.',
      icon: '/assets/images/icon-tech-blog.svg'
    },
    {
      title: 'Manga and Anime',
      description: 'Enjoying manga, anime and otaku culture as a form of relaxation and creative inspiration.',
      icon: '/assets/images/icon-mangekyou-sharingan.svg'
    }
  ]

  return (
    <article className={`about bg-eerie-black-2 border border-jet rounded-[20px] p-6 shadow-shadow-1 ${isActive ? 'active' : ''}`}>
      <header className="mb-6">
        <h2 className="h2 article-title">
          About me
        </h2>
      </header>
      
      <section className="about-text mb-8">
        <p className="text-light-gray leading-relaxed mb-4">
          I am a tech enthusiast specializing in Python web development, data engineering, and AWS cloud technologies. I enjoy exploring new technologies and diving into open-source projects. My expertise lies in designing and optimizing robust data pipelines, crafting Python backends, and implementing efficient automation scripts. I excel in solving intricate data problems by delivering efficient solutions with clean, easy-to-maintain code. My expertise extends to implementing CI/CD pipelines and automated workflows to streamline operations.
        </p>
        <p className="text-light-gray leading-relaxed">
          My goal is to continually grow as a developer and bring creativity and precision to every project I undertake.
        </p>
      </section>

      <section className="techstack mb-8">
        <h3 className="h3 techstack-title">Tech Stack</h3>
        <div className="techstack-wrapper overflow-hidden">
          <ul className="techstack-list flex flex-wrap gap-4 animate-scroll">
            {techStack.map((tech, index) => (
              <li key={index} className="techstack-item min-w-[60px] flex-shrink-0">
                <a href="#" className="block p-3 bg-jet rounded-lg hover:bg-onyx transition-colors">
                  <Image 
                    src={tech.icon} 
                    alt={`${tech.name} logo`} 
                    width={40} 
                    height={40}
                    className="w-10 h-10 object-contain hover:scale-110 transition-transform"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="service">
        <h3 className="h3 service-title">Personal Endeavors</h3>
        <ul className="service-list grid grid-cols-1 md:grid-cols-2 gap-6">
          {personalEndeavors.map((endeavor, index) => (
            <li key={index} className="service-item bg-jet rounded-lg p-6 hover:bg-onyx transition-colors">
              <div className="service-icon-box mb-4">
                <Image 
                  src={endeavor.icon} 
                  alt="service icon" 
                  width={40} 
                  height={40}
                  className="mx-auto"
                />
              </div>
              <div className="service-content-box text-center md:text-left">
                <h4 className="h4 service-item-title">
                  {endeavor.title}
                </h4>
                <p className="service-item-text text-light-gray leading-relaxed">
                  {endeavor.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
} 