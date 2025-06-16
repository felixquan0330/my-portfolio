import React from 'react';
import { FaceSmileIcon, ClipboardDocumentListIcon, PhoneIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-2 flex items-center">
          About
        </h2>
        <div className="w-16 h-1 bg-blue-500 mb-8 rounded"></div>
        <p className="mb-12 text-gray-600 text-lg text-center max-w-4xl mx-auto font-medium">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-16">
          <div className="flex justify-center md:justify-start">
            <img src="assets/img/my-profile-img.jpg" className="w-80 h-80 rounded-lg object-cover shadow" alt="" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">UI/UX Designer &amp; Web Developer.</h3>
            <p className="italic text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
              <ul className="space-y-2 text-gray-800">
                <li className="flex items-center"><i className="bi bi-chevron-right text-blue-500 mr-2"></i> <span className="font-semibold">Birthday:</span> <span className="ml-1 font-normal">1 May 1995</span></li>
                <li className="flex items-center"><i className="bi bi-chevron-right text-blue-500 mr-2"></i> <span className="font-semibold">Website:</span> <span className="ml-1 font-normal">www.example.com</span></li>
                <li className="flex items-center"><i className="bi bi-chevron-right text-blue-500 mr-2"></i> <span className="font-semibold">Phone:</span> <span className="ml-1 font-normal">+123 456 7890</span></li>
                <li className="flex items-center"><i className="bi bi-chevron-right text-blue-500 mr-2"></i> <span className="font-semibold">City:</span> <span className="ml-1 font-normal">New York, USA</span></li>
              </ul>
              <ul className="space-y-2 text-gray-800">
                <li className="flex items-center"><i className="bi bi-chevron-right text-blue-500 mr-2"></i> <span className="font-semibold">Age:</span> <span className="ml-1 font-normal">30</span></li>
                <li className="flex items-center"><i className="bi bi-chevron-right text-blue-500 mr-2"></i> <span className="font-semibold">Degree:</span> <span className="ml-1 font-normal">Master</span></li>
                <li className="flex items-center"><i className="bi bi-chevron-right text-blue-500 mr-2"></i> <span className="font-semibold">Email:</span> <span className="ml-1 font-normal">email@example.com</span></li>
                <li className="flex items-center"><i className="bi bi-chevron-right text-blue-500 mr-2"></i> <span className="font-semibold">Freelance:</span> <span className="ml-1 font-normal">Available</span></li>
              </ul>
            </div>
            <p className="text-gray-700">
              Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.
            </p>
          </div>
        </div>
        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 text-center">
          <div className="flex flex-col items-center">
            <FaceSmileIcon className="w-14 h-14 text-sky-400 mb-2" />
            <span className="text-4xl font-bold text-gray-900">232</span>
            <p className="mt-2 text-base font-semibold">Happy Clients</p>
            <span className="text-gray-400 text-sm">consequuntur quae</span>
          </div>
          <div className="flex flex-col items-center">
            <ClipboardDocumentListIcon className="w-14 h-14 text-sky-400 mb-2" />
            <span className="text-4xl font-bold text-gray-900">521</span>
            <p className="mt-2 text-base font-semibold">Projects</p>
            <span className="text-gray-400 text-sm">adipisci atque cum quia aut</span>
          </div>
          <div className="flex flex-col items-center">
            <PhoneIcon className="w-14 h-14 text-sky-400 mb-2" />
            <span className="text-4xl font-bold text-gray-900">1453</span>
            <p className="mt-2 text-base font-semibold">Hours Of Support</p>
            <span className="text-gray-400 text-sm">aut commodi quaerat</span>
          </div>
          <div className="flex flex-col items-center">
            <UserGroupIcon className="w-14 h-14 text-sky-400 mb-2" />
            <span className="text-4xl font-bold text-gray-900">32</span>
            <p className="mt-2 text-base font-semibold">Hard Workers</p>
            <span className="text-gray-400 text-sm">rerum asperiores dolor</span>
          </div>
        </div>
      </div>
    </section>
  );
} 