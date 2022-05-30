import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';


import { NewspaperIcon, PhoneIcon, SupportIcon } from '@heroicons/react/outline';

const supportLinks = [
  {
    name: 'Sales',
    to: '#',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: PhoneIcon,
  },
  {
    name: 'Technical Support',
    to: '#',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: SupportIcon,
  },
  {
    name: 'Media Inquiries',
    to: '#',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: NewspaperIcon,
  },
];

export const About = () => {
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 1200,
      once: false,
    // @ts-ignore
    }, []);
   });

  return (

    <div className="bg-white dark:bg-slate-800 rounded-lg py-8 ring-1 ring-slate-900/5 shadow-xl">
    <div className="relative">
    <div className="absolute inset-0 flex items-center" aria-hidden="true">
      <div className="w-full border-t border-gray-300" />
    </div>
    </div>
    {/* Header */}
      <div
className="relative pb-32 bg-white dark:bg-slate-800  mt-20"
data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine">
        <div className="absolute inset-0">
          <img
            className=""
            src="./img/Logo.svg"
            alt="simon-web-developer"
          />
          <div className="absolute inset-0 bg-white dark:bg-slate-800  mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative bg-white dark:bg-slate-800 max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">About</h1>
          <p className="mt-6 max-w-3xl text-sm text-darkGrayishBlue text-justify">
          Around the year 2004, when I was 27 years old. I purchased a computer as part of my preparation to study coding, but things did not go as planned. When Covid-19 began in 2020 and we were placed under lockdown, I chose to follow my love of coding.

          I challenged myself to remember that age is just a number, and that we should not let it hinder the process of pursuing a lifelong dream.

          I would like to express my gratitude to Coursera.org for providing me with access to the responsive web development and design course offered by Goldsmith University of London, Jonas from udemy, Brad Traversy from udemy, Mai meteorjs, and other useful tutorials from YouTube.
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="-mt-32 bg-white dark:bg-slate-800 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"

      >
        <h2 className="sr-only" id="contact-heading">
          Contact us
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map((link) => (
            <div key={link.name} className="flex flex-col bg-white dark:bg-slate-800 py-8 ring-1 ring-slate-900/5 shadow-xl rounded-2xl">
              <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                <div className="absolute top-0 p-5 inline-block bg-gradient-to-r from-green-400 to-cyan-500 rounded-xl shadow-lg transform -translate-y-1/2">
                  <link.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-medium ">{link.name}</h3>
                <p className="mt-4 text-sm text-darkGrayishBlue">{link.description}</p>
              </div>
              <div className="p-6 bg-white dark:bg-slate-800 rounded-bl-2xl rounded-br-2xl md:px-8">
                <Link to={link.to} className="text-base font-medium text-cyan-700 hover:text-gradient-to-r from-green-400 to-cyan-500">
                  Contact us<span aria-hidden="true"> &rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
