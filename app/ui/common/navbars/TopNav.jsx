/* eslint-disable no-restricted-globals */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable no-tabs */
/* eslint-disable no-unused-vars */
// @ts-nocheck
import React, { Fragment, useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { GoSignIn } from 'react-icons/go';
import AOS from 'aos';
import 'aos/dist/aos.css';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const TopNav = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [theme, setTheme] = useState(null);

	useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}, []);

	const handleThemeSwitch = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 1200,
      once: false,
    // @ts-ignore
    }, []);
   });

  return (
      <Disclosure as="nav" className="w-full text-gray-700  h-16 fixed top-0 animated z-40 bg-slate-200 dark:bg-slate-800 shadow-xl" data-aos="fade-down">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 z-10 :px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className="-ml-2 mr-2 flex items-center md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-darkGrayishBlue hover:text-gray-200 hover:bg-cyan-600 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-cyan-500">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="text-slate-800 dark:text-white block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon className="text-slate-800 dark:text-white block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex-shrink-0 flex items-center">
                    <img
                      className="block lg:hidden h-8 w-auto"
                      src="./log/Logo.svg"
                      alt="Workflow" />
                    <img
                      className="hidden lg:block h-8 w-auto"
                      src="./log/Logo.svg"
                      alt="Workflow" />
                  </div>
                  <div className="hidden md:ml-8 md:flex md:space-x-8">
                    {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                    <NavLink
                      to="/"
                      className="border-transparent text-slate-800 dark:text-white hover:border-rose-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    >
                      Home
                    </NavLink>
                    <NavLink
                      to="about"
                      className="border-transparent text-slate-800 dark:text-white hover:border-rose-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    >
                      About
                    </NavLink>
                    <Menu as="div" className="relative inline-block text-left py-5">
                    <div>
                      <Menu.Button className="border-transparent text-slate-800 p-4 dark:text-white hover:border-rose-500 hover:text-gray-700 flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                       Enrollement
                        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-slate-300 ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                        <div onClick={() => setNavbarOpen(!open)} className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="blog"
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                               News
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                          Enrollement
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                              Re-Enrollement
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                              Withdrawer
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                              Job-Form
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                    </Menu>
                    <Menu as="div" className="relative inline-block text-left py-5">
                    <div>
                      <Menu.Button className="border-transparent text-slate-800 p-4 dark:text-white hover:border-rose-500 hover:text-gray-700 flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                       Enrollement Options
                        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-slate-300 ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                        <div onClick={() => setNavbarOpen(!open)} className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="blog"
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                               News
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="catalog"
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                           COURSE CATALOG
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="curriculum"
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                              CURRICULUM
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                    </Menu>
                    <NavLink
                      to="testimonials"
                      className="border-transparent text-slate-800 dark:text-white hover:border-rose-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    >
                      Testimony
                    </NavLink>
                    <NavLink
                      to="blog"
                      className="border-transparent text-slate-800 dark:text-white hover:border-rose-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    >
                      News
                    </NavLink>
                  </div>
                </div>
                    <button
                      type="button"
                      onClick={handleThemeSwitch}
                      className="rounded-full  hover:text-gray-500 pl-18"
                    >
                      {theme === 'dark' ? '🌞' : '🌙'}
                    </button>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <NavLink
                      to="signup"
                      type="button"
                      className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-slate-100 dark:text-white bg-cyan-600 shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                    >
                      <GoSignIn className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                      <span>Login</span>
                    </NavLink>
                  </div>
                  <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
                    <button
                      type="button"
                      className="bg-white p-1 rounded-full  hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="ml-3 relative">
                      <div>
                        <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt="" />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <NavLink
                                to="#"
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Your Profile
                              </NavLink>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <NavLink
                                to="#"
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Settings
                              </NavLink>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <NavLink
                                to="#"
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Sign out
                              </NavLink>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
              </div>
            </div>
         {/*  Mobile */}
          <Disclosure.Panel className="md:hidden bg-slate-100 dark:bg-slate-700">
          <div onClick={() => setNavbarOpen(!open)} className="pt-2 pb-3 space-y-1">
            {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
            <Disclosure.Button
              as="a"
              href="/"
              className="bg-slate-700 text-gray-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6 hover:border-rose-500"
            >
              Home
            </Disclosure.Button>
            <Disclosure.Button
              as="a"
              href="about"
              className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-rose-500 :text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
            >
              About
            </Disclosure.Button>
            <div>
            <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="border-transparent text-slate-800 p-4 dark:text-white hover:border-rose-500 hover:text-gray-700 flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                       Enrollement Options
                        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-full rounded-md shadow-lg bg-slate-300 ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none hover:border-rose-500">
                        <div onClick={() => setNavbarOpen(!open)} className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="blog"
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                               News
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="enrollement"
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                          Enrollement
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="renrollement"
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                              Re-Enrollement
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="withdrawer"
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                              Withdrawer
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="employmentForm"
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                              Job-Form
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
            </Menu>
            </div>
            <div>
            <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="border-transparent text-slate-800 p-4 dark:text-white hover:border-rose-500 hover:text-gray-700 flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                       Enrollement Options
                        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-full rounded-md shadow-lg bg-slate-300 ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                        <div onClick={() => setNavbarOpen(!open)} className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="blog"
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                               News
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="enrollement"
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                          Enrollement
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="renrollement"
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                              Re-Enrollement
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="withdrawer"
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                              Withdrawer
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="renrolement"
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                              Job-Form
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
            </Menu>
            </div>
            <Disclosure.Button
            as="a"
            href="testimonials"
            className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-rose-500 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
          >
            Testimony
            </Disclosure.Button>
            <Disclosure.Button
              as="a"
              href="Projects"
              className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
            >
              Projects
            </Disclosure.Button>
            <Disclosure.Button
              as="a"
              href="contact"
              className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-rose-500 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
            >
              Contact
            </Disclosure.Button>
          </div>
          <div className="pt-4 pb-3 border-t border-cyan-200">
            <div className="flex items-center px-4 sm:px-6">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src="./img/simon.png"
                  alt=""
                />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">Tom Cook</div>
                <div className="text-sm font-medium text-gray-500">tom@example.com</div>
              </div>
              <button
                type="button"
                className="ml-auto flex-shrink-0 bg-white p-1 rounded-full text-gray-400 hover:border-rose-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-3 space-y-1">
              <Disclosure.Button
                as="a"
                href="#"
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:border-rose-500 :px-6"
              >
                Your Profile
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:border-rose-500 sm:px-6"
              >
                Settings
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:border-rose-500 sm:px-6"
              >
                Sign out
              </Disclosure.Button>
            </div>
          </div>
          </Disclosure.Panel>
          </>
        )}
      </Disclosure>
  );
};
