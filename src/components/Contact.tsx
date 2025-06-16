import React from 'react';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export default function Contact() {
    return (
        <section id="contact" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Title */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold mb-2 text-left">Contact</h2>
                    <div className="w-16 h-1 bg-blue-500 mb-6 rounded"></div>
                    <p className="text-gray-700 max-w-2xl text-left mb-8">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 text-left">
                    {/* Left: Info and Map */}
                    <div className="lg:col-span-2 flex flex-col gap-6">
                        <div className="bg-white rounded-lg p-8 space-y-8 shadow-md">
                            <div className="flex items-center gap-4">
                                <span className="bg-blue-50 rounded-full p-3 flex items-center justify-center">
                                    <MapPinIcon className="w-7 h-7 text-sky-400" />
                                </span>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Address</h3>
                                    <p className="text-gray-700">A108 Adam Street, New York, NY 535022</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="bg-blue-50 rounded-full p-3 flex items-center justify-center">
                                    <PhoneIcon className="w-7 h-7 text-sky-400" />
                                </span>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Call Us</h3>
                                    <p className="text-gray-700">+1 5589 55488 55</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="bg-blue-50 rounded-full p-3 flex items-center justify-center">
                                    <EnvelopeIcon className="w-7 h-7 text-sky-400" />
                                </span>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Email Us</h3>
                                    <p className="text-gray-700">info@example.com</p>
                                </div>
                            </div>
                        </div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
                            style={{ border: 0, width: '100%', height: 220 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map"
                            className="rounded-lg shadow-md"
                        ></iframe>
                    </div>
                    {/* Right: Contact Form */}
                    <div className="lg:col-span-3">
                        <form className="bg-white rounded-lg p-8 space-y-6 shadow-md">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name-field" className="block mb-2 font-semibold">Your Name</label>
                                    <input type="text" name="name" id="name-field" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" required />
                                </div>
                                <div>
                                    <label htmlFor="email-field" className="block mb-2 font-semibold">Your Email</label>
                                    <input type="email" name="email" id="email-field" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" required />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject-field" className="block mb-2 font-semibold">Subject</label>
                                <input type="text" name="subject" id="subject-field" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" required />
                            </div>
                            <div>
                                <label htmlFor="message-field" className="block mb-2 font-semibold">Message</label>
                                <textarea name="message" id="message-field" rows={8} className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" required></textarea>
                            </div>
                            <div className="flex justify-end">
                                <button type="submit" className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-10 rounded-full transition text-lg shadow">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
} 