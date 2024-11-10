import React from 'react';
import Image from 'next/image';
import { FaGithub } from "react-icons/fa6";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import Link from 'next/link';


// Sample data array
const data = [
  {
    id: 1,
    title: 'Good website',
    description: 'My self protction ',
    imageUrl: '/project4.jpeg',
    link: 'https://github.com/RimshakanwalArin/normal-protfolio-css.git',
    githubLink: "https://normal-protfolio-css-style.vercel.app/", 

 
  },
  {
    id: 2,
    title: 'Simle Website',
    description: '3 page basic website.',
    imageUrl: '/project0.jpeg',
    link: 'https://tree-page-website-tailwand.vercel.app/',
    githubLink: 'https://github.com/RimshakanwalArin/tree-page-website-tailwand.git', 
  },
  {
    id: 3,
    title: 'basic Profolio',
    description: ' frist protfilio',
    imageUrl: '/project2.jpeg',
    link: 'https://github.com/RimshakanwalArin/normal-protfolio.git',
    githubLink: 'https://normal-protfolio-css-style.vercel.app/', 

  },

  
 
 
  {
    id: 4,
    title: 'HoliDay',
    description: 'Montain website',
    imageUrl: '/project6.jpeg',
    link: 'https://github.com/RimshakanwalArin/html-website',
    githubLink: 'https://html-css-website-smoky.vercel.app/', 
    
    
  },
  {
    id: 5,
    title: 'Resume Builder',
    description: 'Milestone Project',
    imageUrl: '/project7.jpeg',
    link: 'https://github.com/RimshakanwalArin/milestone05.git',
    githubLink: "https://milestone1-05.vercel.app/", 

 
  },

];

const Projects = () => {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 p-6 ">
      {data.map((item) => (
        <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden ">
          <Image
            src={item.imageUrl}
            alt={item.title}
            width={400}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl font-bold">{item.title}</h2>
            <p className="text-gray-600 my-2">{item.description}</p>
            <div className="flex items-center space-x-2">
              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline flex items-center"
                >
                    <AiOutlineDeploymentUnit />view project
                </Link>
                <Link
                href={item.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline flex items-center">
                    <FaGithub/>
              </Link>
              
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
