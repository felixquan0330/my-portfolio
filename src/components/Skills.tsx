import React from 'react';

const skills = [
  { name: 'HTML', percent: 100 },
  { name: 'CSS', percent: 90 },
  { name: 'JAVASCRIPT', percent: 75 },
  { name: 'PHP', percent: 80 },
  { name: 'WORDPRESS/CMS', percent: 90 },
  { name: 'PHOTOSHOP', percent: 55 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-2 text-left">Skills</h2>
        <div className="w-16 h-1 bg-blue-500 mb-8 rounded"></div>
        <p className="mb-12 text-gray-700 text-base font-medium text-left max-w-3xl">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left column */}
          <div className="space-y-8">
            {skills.slice(0, 3).map(skill => (
              <div key={skill.name}>
                <div className="flex justify-between items-center mb-1">
                  <span className="uppercase text-sm font-semibold tracking-wide text-gray-800">{skill.name}</span>
                  <span className="text-sm font-semibold text-gray-800">{skill.percent}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-sky-500 h-2 rounded-full transition-all duration-700" style={{ width: `${skill.percent}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          {/* Right column */}
          <div className="space-y-8">
            {skills.slice(3).map(skill => (
              <div key={skill.name}>
                <div className="flex justify-between items-center mb-1">
                  <span className="uppercase text-sm font-semibold tracking-wide text-gray-800">{skill.name}</span>
                  <span className="text-sm font-semibold text-gray-800">{skill.percent}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-sky-500 h-2 rounded-full transition-all duration-700" style={{ width: `${skill.percent}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 