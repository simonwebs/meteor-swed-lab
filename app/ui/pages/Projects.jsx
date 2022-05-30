/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


export const Projects = () => {
    useEffect(() => {
        AOS.init({
          delay: 200,
          duration: 1200,
          once: false,
        // @ts-ignore
        }, []);
       });

  return (
      <>
    <section id="services" className="bg-white dark:bg-slate-800 rounded-lg py-8 ring-1 ring-slate-900/5 shadow-xl pt-20 pb-28 px-8">
    <div className="max-w-6xl mx-auto">

        <div className="text-center mt-20" data-aos="fade-up">
            <h1 className="text-4xl font-bold text-center mt-20">Projects</h1>
            <p className="pt-2 text-xl">Coming Projects.</p>
        </div>
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
            <div className="relative">
                <div
                    className="absolute z-10 inset-0 bg-cyan sm:rounded-lg" />

                <div className="relative z-20 bg-white dark:bg-slate-800 rounded-lg py-8 ring-1 ring-slate-900/5 shadow-xl h-full" data-aos="fade-right">
                    <img
src="https://www.rouge-media.com/wp-content/uploads/2019/05/web-app-illustration-1.png"
                        className="h-48 shadow-xl rounded-lg transition duration-300 filter grayscale hover:grayscale-0"
alt=""/>
                    <div className="px-10 pb-6">
                        <h2 className="pt-3 font-bold text-2xl text-gray-800">weTour app</h2>
                        <p className="pt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
                            perferendis corporis
                            culpa doloremque, amet ipsa!
                        </p>
                    </div>
                </div>
            </div>
            <div className="relative">
            <div
                className="absolute z-10 inset-0 bg-cyan sm:rounded-lg" />
            <div className="relative z-20 bg-white dark:bg-slate-800 rounded-lg py-8 ring-1 ring-slate-900/5 shadow-xl h-full" data-aos="fade-down">
                <img
src="https://wichitawebdev.com/lmg-cms/wp-content/uploads/2018/06/pwa-reliable.png"
                    className="h-48 shadow-xl rounded-lg transition duration-300 filter grayscale hover:grayscale-0"
alt=""/>
                <div className="px-10 pb-6">
                    <h2 className="pt-3 font-bold text-2xl text-gray-800">Amazon clone</h2>
                    <p className="pt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
                        perferendis corporis
                        culpa doloremque, amet ipsa!
                    </p>
                </div>
            </div>
            </div>
            <div className="relative">
            <div
                className="absolute z-10 inset-0 bg-cyan sm:rounded-lg" />
            <div className="relative z-20 h-full rounded-md shadow-md" data-aos="fade-down">
                <img
src="https://wichitawebdev.com/lmg-cms/wp-content/uploads/2018/06/pwa-reliable.png"
                    className="h-48 shadow-xl rounded-lg transition duration-300 filter grayscale hover:grayscale-0"
alt=""/>
                <div className="px-10 pb-6">
                    <h2 className="pt-3 font-bold text-2xl text-gray-800">eComprice app</h2>
                    <p className="pt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
                        perferendis corporis
                        culpa doloremque, amet ipsa!
                    </p>
                </div>
            </div>
            </div>
        <div className="relative">
        <div
            className="absolute z-10 inset-0 bg-cyan sm:rounded-lg" />
        <div className="relative z-20 bg-white dark:bg-slate-800 rounded-lg py-8 ring-1 ring-slate-900/5 shadow-xl h-full" data-aos="fade-down">
            <img
src="https://wichitawebdev.com/lmg-cms/wp-content/uploads/2018/06/pwa-reliable.png"
                className="h-48 shadow-xl rounded-lg transition duration-300 filter grayscale hover:grayscale-0"
alt=""/>
            <div className="px-10 pb-6">
                <h2 className="pt-3 font-bold text-2xl text-gray-800">Susu App</h2>
                <p className="pt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
                    perferendis corporis
                    culpa doloremque, amet ipsa!
                </p>
            </div>
        </div>
        </div>
            <div className="relative">
                <div
                    className="absolute z-10 inset-0 bg-cyan sm:rounded-lg" />
                <div className="relative z-20 bg-white dark:bg-slate-800 rounded-lg py-8 ring-1 ring-slate-900/5 shadow-xl h-full" data-aos="fade-down">
                    <img
src="https://wichitawebdev.com/lmg-cms/wp-content/uploads/2018/06/pwa-reliable.png"
                        className="h-48 shadow-xl rounded-lg transition duration-300 filter grayscale hover:grayscale-0"
alt=""/>
                    <div className="px-10 pb-6">
                        <h2 className="pt-3 font-bold text-2xl text-gray-800">Chat App</h2>
                        <p className="pt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
                            perferendis corporis
                            culpa doloremque, amet ipsa!
                        </p>
                    </div>
                </div>
            </div>
            <div className="relative">
                <div
                    className="absolute z-10 inset-0 bg-cyan sm:rounded-lg" />
                <div className="relative z-20 bg-white dark:bg-slate-800 rounded-lg py-8 ring-1 ring-slate-900/5 shadow-xl h-full" data-aos="fade-left">
                    <img
src="https://wichitawebdev.com/lmg-cms/wp-content/uploads/2018/06/pwa-reliable.png"
                        className="h-48 shadow-xl rounded-lg transition duration-300 filter grayscale hover:grayscale-0"
alt=""/>
                    <div className="px-10 pb-6">
                        <h2 className="pt-3 font-bold text-2xl text-gray-800">Ecole app</h2>
                        <p className="pt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
                            perferendis corporis
                            culpa doloremque, amet ipsa!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
      </>
  );
};
