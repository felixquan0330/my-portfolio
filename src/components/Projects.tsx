'use client'

import Image from 'next/image'

interface ResumeProps {
  isActive: boolean
}

export default function Resume({ isActive }: ResumeProps) {
  const experience = [
    {
      title: 'Data Engineering Senior Analyst',
      company: 'Accenture',
      period: 'Dec 2023 — Present',
      description: 'Designed Python parsers for optimizing data ingestion, managed data pipelines and databases, executed three POCs with high-quality code, and contributed to the Life Science Analysis Application project by developing robust data integration processes and ensuring accurate ETL using AWS, Python, and Docker, Github Actions.'
    },
    {
      title: 'Data Engineering Analyst',
      company: 'Accenture',
      period: 'May 2021 — Nov 2023',
      description: 'Managed data migration projects, transferring over 5TB of data between cloud services and on-premises systems, contributed to the design of source-to-target mappings for efficient data movement, and worked on a POC for identifying lineage in SQL scripts.'
    },
    {
      title: 'Programmer Analyst',
      company: 'Cognizant',
      period: 'May 2020 — May 2021',
      description: 'Developed a POC service for data extraction from non-minable scanned documents with OpenCV, Stanford NLP, Spacy, and FastAPI, trained an image classification model to distinguish ads from non-ads using Google\'s Inception v3 model, worked as a backend developer creating microservices with Flask, FastAPI, and Bottle, solved co-reference resolution problems in text with Stanford NLP and Spacy'
    },
    {
      title: 'Programmer Analyst Trainee',
      company: 'Cognizant',
      period: 'May 2019 — May 2020',
      description: 'Created backend for a bot using Dialogflow for extracting FAQs from URLs, and gained experience with Python packages like TensorFlow, OpenCV, NLTK, requests, and matplotlib. Deployed applications through CI/CD pipelines with Docker and Jenkins'
    },
    {
      title: 'Business Associate Intern',
      company: 'Cognizant',
      period: 'Jan 2019 — May 2019',
      description: 'Worked on an NLP project, gaining experience with text processing tools and teamwork. Successfully completed and presented a prototype of a \'Continuous HealthCare Monitoring System using Smart Devices\' to business unit heads.'
    }
  ]

  const education = [
    {
      title: 'SRM Institute of Science and Technology, Kattankulathur, Chennai, India',
      period: '2015 — 2019',
      description: 'Bachelor of Technology in Electronics and Communication Engineering (B.Tech - ECE)'
    },
    {
      title: 'Narayana Sri Chaitanya Junior College',
      period: '2013 — 2015',
      description: 'Board of Intermediate Education, A.P'
    },
    {
      title: 'NARAYANA CONCEPT SCHOOL',
      period: '2012 — 2013',
      description: 'State Board - SSC, A.P'
    }
  ]

  const certifications = [
    {
      title: 'AWS Certified Data Engineer - Associate (DEA)',
      issuer: 'Amazon Web Services (AWS)',
      year: '2025',
      icon: '/assets/images/icon-aws.svg'
    },
    {
      title: 'Azure AI Fundamentals (AI-900)',
      issuer: 'Microsoft',
      year: '2024',
      icon: '/assets/images/icon-azure.svg'
    },
    {
      title: 'AWS Certified Data Analytics - Specialty (DAS)',
      issuer: 'Amazon Web Services (AWS)',
      year: '2023',
      icon: '/assets/images/icon-aws.svg'
    },
    {
      title: 'AWS Certified Solutions Architect - Associate (SAA)',
      issuer: 'Amazon Web Services (AWS)',
      year: '2022',
      icon: '/assets/images/icon-aws.svg'
    },
    {
      title: 'AWS Certified Developer - Associate (DVA)',
      issuer: 'Amazon Web Services (AWS)',
      year: '2021',
      icon: '/assets/images/icon-aws.svg'
    },
    {
      title: 'MongoDB SI Architect Certification Program',
      issuer: 'MongoDB',
      year: '2021',
      icon: '/assets/images/icon-mongodb.svg'
    }
  ]

  const skills = [
    { name: 'Python Programming', percentage: 80 },
    { name: 'AWS Cloud Solutions Architecture', percentage: 70 },
    { name: 'Data Integration and Data Analytics (Pandas, AWS Glue, Redshift, Athena, Data Sync, Lambda)', percentage: 70 },
    { name: 'Database Management Systems (MySQL, PostgreSQL, AWS DynamoDB, MongoDB)', percentage: 70 },
    { name: 'Backend and API Development (Flask, FastAPI)', percentage: 80 },
    { name: 'CI/CD and DevOps Tools (Git, Jenkins, GitHub Actions, Docker)', percentage: 80 },
    { name: 'Frontend Development (HTML, CSS, JavaScript)', percentage: 35 }
  ]

  return (
    <article className={`resume bg-eerie-black-2 border border-jet rounded-[20px] p-6 shadow-shadow-1 ${isActive ? 'active' : ''}`}>
      <header className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <h2 className="article-title h2">
          Resume
        </h2>
        <a
          href="/assets/resume/Mohan_Kumar_Paluru-Python_Developer_CV_July_2024.pdf"
          className="download-resume-btn inline-flex items-center gap-2 bg-jet text-white-1 px-6 py-3 rounded-lg hover:bg-onyx transition-colors shadow-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ion-icon name="cloud-download"></ion-icon>
          Download Resume
        </a>
      </header>

      <section className="timeline mb-8">
        <div className="title-wrapper flex items-center gap-4 mb-6">
          <div className="icon-box w-12 h-12 bg-jet rounded-full flex items-center justify-center">
            <Image src="/assets/images/icon-work.svg" alt="work logo" width={24} height={24} />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list space-y-6">
          {experience.map((exp, index) => (
            <li key={index} className="timeline-item relative pl-8 border-l-2 border-jet">
              <h4 className="h4 timeline-item-title">
                {exp.title}
              </h4>
              <span className="text-aqua-teal-1 font-medium mb-3 block">
                <strong>{exp.company}</strong>, {exp.period}
              </span>
              <p className="timeline-text text-light-gray leading-relaxed">
                {exp.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="timeline mb-8">
        <div className="title-wrapper flex items-center gap-4 mb-6">
          <div className="icon-box w-12 h-12 bg-jet rounded-full flex items-center justify-center">
            <ion-icon name="book-outline" className="text-aqua-teal-1 text-2xl"></ion-icon>
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list space-y-6">
          {education.map((edu, index) => (
            <li key={index} className="timeline-item relative pl-8 border-l-2 border-jet">
              <h4 className="h4 timeline-item-title">
                {edu.title}
              </h4>
              <span className="text-aqua-teal-1 font-medium mb-3 block">
                {edu.period}
              </span>
              <p className="timeline-text text-light-gray leading-relaxed">
                {edu.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="service mb-8">
        <h3 className="h3 service-title">Certifications</h3>
        <ul className="service-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <li key={index} className="service-item bg-jet rounded-lg p-6 hover:bg-onyx transition-colors">
              <div className="service-icon-box mb-4">
                <Image
                  src={cert.icon}
                  alt="certification icon"
                  width={40}
                  height={40}
                  className="mx-auto"
                />
              </div>
              <div className="service-content-box text-center">
                <h4 className="h4 service-item-title">
                  {cert.title}
                </h4>
                <p className="service-item-text text-light-gray">
                  {cert.issuer} • {cert.year}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          {skills.map((skill, index) => (
            <li key={index} className="skills-item">
              <div className="title-wrapper flex justify-between items-center mb-3">
                <h5 className="h5">{skill.name}</h5>
                <data value={skill.percentage} className="text-aqua-teal-1 font-medium">
                  {skill.percentage}%
                </data>
              </div>
              <div className="skill-progress-bg w-full h-3 bg-onyx rounded-full overflow-hidden">
                <div
                  className="skill-progress-fill h-full bg-gradient-to-r from-aqua-teal-1 to-my-teal-2 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
} 