'use client'

import { useState, useEffect } from 'react'
import Sidebar from '../src/components/Sidebar'
import Navbar from '../src/components/Navbar'
import About from '../src/components/About'
import Resume from '../src/components/Resume'
import Projects from '../src/components/Projects'
import Blog from '../src/components/Blog'
import Contact from '../src/components/Contact'

export default function Home() {
  const [activePage, setActivePage] = useState('about')
  
  useEffect(() => {
    // Initialize particles.js
    if (typeof window !== 'undefined' && (window as any).particlesJS) {
      (window as any).particlesJS('particles-js', {
        "particles": {
          "number": {
            "value": 200,
            "density": {
              "enable": true,
              "value_area": 1102.796376526191
            }
          },
          "color": {
            "value": "#4db8b6"
          },
          "shape": {
            "type": "triangle",
            "stroke": {
              "width": 0,
              "color": "#f3d250"
            },
            "polygon": {
              "nb_sides": 5
            }
          },
          "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#4db8b6",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "window",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 10,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 300,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 3
            },
            "remove": {
              "particles_nb": 20
            }
          }
        },
        "retina_detect": true
      })
    }
  }, [])
  
  return (
    <main>
      <Sidebar />
      <div className="main-content">
        <Navbar activePage={activePage} setActivePage={setActivePage} />
        <About isActive={activePage === 'about'} />
        <Resume isActive={activePage === 'resume'} />
        <Projects isActive={activePage === 'projects'} />
        <Blog isActive={activePage === 'blog'} />
        <Contact isActive={activePage === 'contact'} />
      </div>
    </main>
  )
} 