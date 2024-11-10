import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center py-10">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Rimsha Kanwal Arian</h1>
          <p className="text-lg text-gray-600">Full Stack Developer</p>
        </header>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">Professional Summary</h2>
          <p>
            Experienced Full Stack Developer with expertise in building modern web applications using Next.js and Tailwind CSS.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">Skills</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>HTML, CSS, JavaScript, TypeScript</li>
            <li>React, Next.js</li>
            <li>Tailwind CSS, ShadCN</li>
            <li>SQL, MongoDB</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">Experience</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">Full Stack Developer</h3>
              <p className="text-sm text-gray-600">Governor House Company | Jan 2021 – Present</p>
              <ul className="list-disc list-inside">
                <li>Developed and maintained scalable web applications.</li>
                <li>Improved website performance by 50%.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">Education</h2>
          
          <p>
            <strong>Governor House Sindh</strong><br />
            Karachi University | 2017 – 2021
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">Contact</h2>
          <p>Email: <Link href="mailto:arinrimshakanwal@gmail.com" className="text-blue-500">arinrimshakanwal@gmail.com</Link></p>
          <p>Phone: +92-3101026509</p>
        </section>
      </div>
    </div>
  );
}
