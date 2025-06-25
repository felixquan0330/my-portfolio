'use client'

import Image from 'next/image'

interface BlogProps {
  isActive: boolean
}

export default function Blog({ isActive }: BlogProps) {
  const blogPosts = [
    {
      title: 'Python Updates Demystified',
      category: 'Python',
      date: 'Sep 01, 2024',
      description: 'From 3.7 to Today: Navigating Python\'s Most Important Updates',
      image: '/assets/images/blog-1.jpg',
      link: 'https://curiosity.trixtertempdrive.eu.org/Development/Python/Python-Key-Changes-from-3.7-to-Today'
    },
    {
      title: 'Advanced Usage of Python\'s Match-Case',
      category: 'Python',
      date: 'Sep 01, 2024',
      description: 'Unlocking the Power of Python Match-Case: A Deep Dive into Advanced Usage',
      image: '/assets/images/blog-2.jpg',
      link: 'https://curiosity.trixtertempdrive.eu.org/Development/Python/Python-Match-Case-Statement'
    },
    {
      title: 'Supercharging VS Code',
      category: 'Development',
      date: 'Sep 08, 2024',
      description: 'Customizing Beyond Themes with CSS & JS',
      image: '/assets/images/blog-3.jpg',
      link: 'https://curiosity.trixtertempdrive.eu.org/Development/Supercharging-VS-Code'
    },
    {
      title: 'Coreference Resolution',
      category: 'NLP',
      date: 'Nov 21, 2023',
      description: 'A What, Why, and How Guide',
      image: '/assets/images/blog-4.jpg',
      link: 'https://curiosity.trixtertempdrive.eu.org/NLP/Coreference-Resolution'
    }
  ]

  return (
    <article className={`blog bg-eerie-black-2 border border-jet rounded-[20px] p-6 shadow-shadow-1 ${isActive ? 'active' : ''}`}>
      <header className="mb-8">
        <h2 className="article-title h2">
          Blog
        </h2>
      </header>

      <section className="blog-posts">
        <ul className="blog-posts-list grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => (
            <li key={index} className="blog-post-item">
              <a 
                href={post.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group"
              >
                <figure className="blog-banner-box overflow-hidden rounded-lg mb-4">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    width={400} 
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </figure>
                <div className="blog-content p-4">
                  <div className="blog-meta flex items-center gap-2 mb-3">
                    <p className="blog-category text-aqua-teal-1 text-sm font-medium">
                      {post.category}
                    </p>
                    <span className="dot w-1 h-1 bg-light-gray rounded-full"></span>
                    <time className="text-light-gray text-sm">
                      {post.date}
                    </time>
                  </div>
                  <h3 className="h3 blog-item-title">
                    {post.title}
                  </h3>
                  <p className="blog-text text-light-gray text-sm">
                    {post.description}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
} 