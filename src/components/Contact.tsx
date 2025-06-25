'use client'

import { useState } from 'react'

interface ContactProps {
  isActive: boolean
}

export default function Contact({ isActive }: ContactProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const formData = new FormData(e.currentTarget)
    
    try {
      const response = await fetch('https://formspree.io/f/xrbbokdj', {
        method: 'POST',
        body: formData,
      })
      
      if (response.ok) {
        alert('Message sent successfully!')
        e.currentTarget.reset()
      } else {
        alert('Failed to send message. Please try again.')
      }
    } catch (error) {
      alert('Error sending message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <article className={`contact bg-eerie-black-2 border border-jet rounded-[20px] p-6 shadow-shadow-1 ${isActive ? 'active' : ''}`}>
      <header className="mb-8">
        <h2 className="article-title h2">
          Contact
        </h2>
      </header>

      <section className="mapbox mb-8">
        <figure className="w-full h-64 rounded-lg overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.5207096112817!2d79.43743627504861!3d13.626059000192454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4b6c13a16f21%3A0x187c13b0f8b814f6!2sThunga%20Residency!5e0!3m2!1sen!2sin!4v1736011329104!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>
        <form onSubmit={handleSubmit} className="form space-y-6">
          <div className="input-wrapper grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="text" 
              name="fullname" 
              className="form-input w-full p-4 bg-jet border border-onyx rounded-lg text-white-1 placeholder-light-gray focus:border-aqua-teal-1 transition-colors" 
              placeholder="Full name" 
              required 
            />
            <input 
              type="email" 
              name="email" 
              className="form-input w-full p-4 bg-jet border border-onyx rounded-lg text-white-1 placeholder-light-gray focus:border-aqua-teal-1 transition-colors" 
              placeholder="Email address" 
              required 
            />
          </div>
          <p className="fs-description">
            This will help me respond to your query via an email.
          </p>
          
          <textarea 
            name="message" 
            className="form-input w-full p-4 bg-jet border border-onyx rounded-lg text-white-1 placeholder-light-gray focus:border-aqua-teal-1 transition-colors resize-none" 
            placeholder="Your Message" 
            rows={6}
            required 
          ></textarea>
          <p className="fs-description">
            What would you like to discuss?
          </p>
          
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="form-btn"
          >
            <ion-icon name="paper-plane"></ion-icon>
            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
          </button>
        </form>
      </section>
    </article>
  )
} 