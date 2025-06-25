'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <>
      <aside className={`sidebar ${isExpanded ? 'active' : ''}`} data-sidebar>
        <div className="sidebar-info">
          <figure className="avatar-box"> 
            <img src="./assets/images/my-avatar.jpg" alt="Felix Quan" width="80" />
          </figure>
          <div className="info-content">
            <h1 className="name" title="Felix Quan">Felix Quan</h1>
            <p className="title">Full Stack && Blockchain Developer</p>
          </div> 
          <button className="info_more-btn" data-sidebar-btn onClick={toggleSidebar}> 
            <span>Show Contacts</span> 
            <ion-icon name="chevron-down"></ion-icon> 
          </button>
        </div>
        <div className="sidebar-info_more">
          <div className="separator"></div>
          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box"> <ion-icon name="mail-outline"></ion-icon> </div>
              <div className="contact-info">
                <p className="contact-title">Email</p> <a href="mailto:dcharu587@gmail.com"
                  className="contact-link">dcharu587@gmail.com</a>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box"> <ion-icon name="phone-portrait-outline"></ion-icon> </div>
              <div className="contact-info">
                <p className="contact-title">Phone</p> <a href="tel:+919848788984" className="contact-link">+91 984
                  87 88 984</a>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box"> <ion-icon name="logo-linkedin"></ion-icon> </div>
              <div className="contact-info">
                <p className="contact-title">LinkedIn</p> <a href="https://linkedin.com/in/mohankumarpaluru"
                  className="contact-link">mohankumarpaluru</a>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box"> <ion-icon name="location-outline"></ion-icon> </div>
              <div className="contact-info">
                <p className="contact-title">Location</p>
                <address>Tirupati, Andhra Pradhesh, India</address>
              </div>
            </li>
          </ul>
          <div className="separator"></div>
          <ul className="social-list">
            <li className="social-item"> <a href="https://github.com/mohankumarpaluru" className="social-link"> <ion-icon
              name="logo-github"></ion-icon> </a> </li>
            <li className="social-item"> <a href="https://x.com/trixter127" className="social-link"> <ion-icon
              name="logo-twitter"></ion-icon> </a> </li>
            <li className="social-item"> <a href="https://instagram.com/mohankumarpaluru" className="social-link">
              <ion-icon name="logo-instagram"></ion-icon> </a> </li>
            <li className="social-item"> <a href="https://telegram.dog/trixter127" className="social-link"> <ion-icon
              name="chatbox-ellipses-outline" aria-label="Telegram"></ion-icon> </a> </li>
            <li className="social-item"> <a href="https://wa.me/919848788984" className="social-link"> <ion-icon
              name="logo-whatsapp"></ion-icon> </a> </li>
          </ul>
        </div>
      </aside>
    </>
  )
} 