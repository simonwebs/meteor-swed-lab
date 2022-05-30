// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { Meteor } from 'meteor/meteor';
// eslint-disable-next-line import/no-unresolved
import { ErrorAlert } from '../contacts/ErrorAlert';
// eslint-disable-next-line import/no-unresolved
import { SuccessAlert } from '../contacts/SuccessAlert';
import { NavLink } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

const posts = [
  {
    title: 'Boost your conversion rate',
    to: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
  },
  {
    title: 'How to use search engine optimization to drive sales',
    to: '#',
    description: 'Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
  },
  {
    title: 'Improve your customer experience',
     to: '#',
    description:
      'Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
  },
  {
    title: 'Writing effective landing page copy',
    to: '#',
    description:
      'Ipsum voluptates quia doloremque culpa qui eius. Id qui id officia molestias quaerat deleniti. Qui facere numquam autem libero quae cupiditate asperiores vitae cupiditate. Cumque id deleniti explicabo.',
    date: 'Jan 29, 2020',
    datetime: '2020-01-29',
  },
];

export const Home = () => {
  
 const [name, setName] = useState(''); // Formik
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

 // eslint-disable-next-line no-shadow
 const showError = ({ message }) => {
   setError(message);
   setTimeout(() => {
     setError('');
   }, 5000);
 };

 // eslint-disable-next-line no-shadow
 const showSuccess = ({ message }) => {
  setSuccess(message);
  setTimeout(() => {
    setSuccess('');
  }, 5000);
};


  const saveContact = () => {
    Meteor.call('contacts.insert', { name, email, subject, message }, (errorResponse) => {
    if (errorResponse) {
      showError({ message: errorResponse.error });
    } else {
      setName('');
      setSubject('');
      setEmail('');
      setMessage('');
      showSuccess({ message: 'Information saved' });
    }
    });
  };
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
    <main>
    <div>
      {/* Hero card */}
      <div className="relative">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-white dark:bg-slate-800" />
        <div className="mx-auto sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                alt="People working on laptops"
              />
              <div className="absolute inset-0 bg-indigo-700 mix-blend-multiply" />
            </div>
            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
              <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block text-white">Take control of your</span>
                <span className="block text-indigo-200">customer support</span>
              </h1>
              <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                amet fugiat veniam occaecat fugiat aliqua.
              </p>
              <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                  <a
                    href="#"
                    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
                  >
                    Get started
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                  >
                    Live demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logo cloud */}
      <div className="bg-gray-100 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
            Trusted by over 5 very average small businesses
          </p>
          <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                alt="StaticKit"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                alt="Transistor"
              />
            </div>
            <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
              <img
                className="h-12"
                src="./img/mount.jpg"
                alt="Workcation"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* More main page content here... */}
    <div id="about" className="relative">
<div className="absolute inset-0 flex items-center" aria-hidden="true">
  <div className="w-full border-t border-gray-300" />
</div>
</div>
<section className="bg-gray-50 dark:bg-darkBlue1">
<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 mt-32 ">
<h2 className="text-4xl font-bold text-center">
About Us
</h2>
<div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center mt-16">
  <div>
    <h2
className="text-3xl font-extrabold text-darkGrayishBlue sm:text-4xl"
data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine">
      These are some of the skills am good using.
    </h2>
    <p
className="mt-3 max-w-3xl text-lg text-darkGrayishBlue"
data-aos="fade-left"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine">
    I have skills in Html, Css/scss, JavaScript, Meteorjs, Nodejs, MongoDB, React, Chakra-ui, Tailwindcss, Bootstrap and basic knowledge in Blaze and Firebase.
    </p>
    <div className="mt-8 sm:flex" data-aos="zoom-in-right">
      <div className="rounded-md shadow">
        <NavLink
          to="contact"
          className="transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 inline-block w-auto mt-4 px-6 py-2 bg-cyan-500 transform motion-safe:hover:scale-110 text-white font-semibold text-center focus:outline-none focus:ring focus:ring-offset-2 focus:ring-cyan-500 focus:ring-opacity-80 rounded-md shadow-lg  shadow-cyan-500/40 text-sm"
        >
          Join Us
        </NavLink>
      </div>
      <div className="mt-3 sm:mt-0 sm:ml-3">
        <NavLink
          to="projects"
          className="transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 inline-block w-auto mt-4 px-6 py-2 bg-cyan-500 transform motion-safe:hover:scale-110 text-white font-semibold text-center focus:outline-none focus:ring focus:ring-offset-2 focus:ring-cyan-500 focus:ring-opacity-80 rounded-md shadow-lg  shadow-cyan-500/40 text-sm"
        >
          Progammes
        </NavLink>
      </div>
    </div>
  </div>
  <div
className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2"
data-aos="fade-left"
  data-aos-offset="200"
  data-aos-easing="ease-in-sine">
    <div className="col-span-1 flex justify-center py-8 px-8 bg-white dark:bg-slate-800 rounded-lg ring-1 ring-slate-900/5 shadow-xl hover:transition duration-500 hover:scale-125">
      <img
        className="max-h-12  rounded-full transform motion-safe:hover:scale-110"
        src="./img/simon.png"
        alt="Html"
      />
    </div>
    <div className="col-span-1 flex justify-center py-8 px-8 bg-white dark:bg-slate-800 rounded-lg ring-1 ring-slate-900/5 shadow-xl hover:transition duration-500 hover:scale-125">
      <img className="max-h-12  rounded-full transform motion-safe:hover:scale-110" src="./img/css.png" alt="Css-tailwindcss-chakra-ui-boostrap-scss" />
    </div>
    <div className="col-span-1 flex justify-center py-8 px-8 bg-white dark:bg-slate-800 rounded-lg ring-1 ring-slate-900/5 shadow-xl hover:transition duration-500 hover:scale-125">
      <img className="max-h-12  rounded-full transform motion-safe:hover:scale-110" src="./img/javascript.png" alt="JavaScript" />
    </div>
    <div className="col-span-1 flex justify-center py-8 px-8 bg-white dark:bg-slate-800 rounded-lg ring-1 ring-slate-900/5 shadow-xl hover:transition duration-500 hover:scale-125">
      <img
        className="max-h-12  rounded-full transform motion-safe:hover:scale-110"
        src="./img/node.png"
        alt="Nodejs"
      />
    </div>
    <div className="col-span-1 flex justify-center py-8 px-8 bg-white dark:bg-slate-800 rounded-lg ring-1 ring-slate-900/5 shadow-xl hover:transition duration-500 hover:scale-125">
      <img
        className="max-h-12  rounded-full transform motion-safe:hover:scale-110"
        src="./img/meteor.png"
        alt="Meteorjs"
      />
    </div>
    <div className="col-span-1 flex justify-center py-8 px-8 bg-white dark:bg-slate-800 rounded-lg ring-1 ring-slate-900/5 shadow-xl hover:transition duration-500 hover:scale-125">
      <img
        className="max-h-12  rounded-full transform motion-safe:hover:scale-110"
        src="./img/firebase.png"
        alt="Statamic"
      />
    </div>
  </div>
</div>
</div>
</section>
<section id="blog" className='bg-white dark:bg-slate-800'>
<div className="bg-white dark:bg-slate-800 rounded-lg py-8 ring-1 ring-slate-900/5 shadow-xl pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
<div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
  <div>
  <h2 className="text-4xl font-bold text-center" data-aos="fade-left">
  News Conner
  </h2>
    <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center" data-aos="fade-right" />
  </div>
  <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12" data-aos="fade-right">
    {posts.map((post) => (
      <div key={post.title}>
        <p className="text-sm text-darkGrayishBlue">
          <time dateTime={post.datetime}>{post.date}</time>
        </p>
        <NavLink to="#" className="mt-2 block">
          <p className="text-xl font-semibold text-cyan-600">{post.title}</p>
          <p className="mt-3 text-sm text-darkGrayishBlue">{post.description}</p>
        </NavLink>
        <div className="mt-3" data-aos="fade-left">
          <NavLink to={post.to} className="text-base font-semibold text-cyan-600 hover:text-cyan-500">
            Read full story
          </NavLink>
        </div>
      </div>
    ))}
  </div>
</div>
</div>
</section>
<section id="testimonials">

<div className="max-w-6xl px-5 mx-auto mt-32 text-center shadow-lg">

<h2 className="text-4xl font-bold text-center">
 Testimonials
</h2>

<div className="flex flex-col mt-24 md:flex-row md:space-x-6">

  <div
    className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3"
data-aos="fade-right"
  >
    <img src="img/avatar-anisha.png" className="w-16 -mt-14 motion-safe:hover:scale-110" alt="" />
    <h5 className="text-lg font-bold">Evelyn Agbey</h5>
    <p className="text-sm text-darkGrayishBlue">
      “Manage has supercharged our team’s workflow. The ability to
      maintain visibility on larger milestones at all times keeps
      everyone motivated.”
    </p>
  </div>


  <div
    className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3"
data-aos="fade-down"
  >
    <img src="img/avatar-ali.png" className="w-16 -mt-14 motion-safe:hover:scale-110" alt="" />
    <h5 className="text-lg font-bold">Daniella Agbey</h5>
    <p className="text-sm text-darkGrayishBlue">
      “We have been able to cancel so many other subscriptions since
      using Manage. There is no more cross-channel confusion and
      everyone is much more focused.”
    </p>
  </div>


  <div
    className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3"
data-aos="fade-left"
  >
    <img src="img/avatar-richard.png" className="w-16 -mt-14 motion-safe:hover:scale-110" alt="" />
    <h5 className="text-lg font-bold">Daniel Agbefia</h5>
    <p className="text-sm text-darkGrayishBlue">
      “Manage has supercharged our team’s workflow. The ability to
      maintain visibility on larger milestones at all times keeps
      everyone motivated.”
    </p>
  </div>
</div>

<div className="my-16">
  <NavLink
    to="contact"
    className="p-3 px-6 pt-2 mt-3 text-white bg-cyan-500 rounded baseline hover:bg-cyan-400"
    >Get Started
  </NavLink>
</div>
</div>
</section>
<section className="relative py-16 bg-white dark:bg-slate-800">
      <div className="hidden absolute top-0 inset-x-0 h-1/2 bg-white dark:bg-slate-800 lg:block" aria-hidden="true" />
      <div className="max-w-7xl mx-auto bg-cyan-600 lg:bg-transparent lg:px-8">
        <div className="lg:grid lg:grid-cols-12">
          <div className="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
            <div className="absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden" aria-hidden="true" />
            <div className="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
              <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                <img
                  className="object-cover object-center rounded-3xl shadow-2xl" data-aos="fade-right"
                  src="./img/mount.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="relative bg-cyan-500 dark:bg-slate-800 lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center" data-aos="fade-left">
           
            <div className="relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
              <h2 className="text-3xl font-extrabold text-white" id="join-heading">
                Join Berea Institue
              </h2>
              <p className="text-lg text-white">
                Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus
                dui laoreet diam sed lacus, fames.
              </p>
              <NavLink
                className="block w-full py-3 px-5 text-center bg-white border border-transparent rounded-md shadow-md text-base font-medium text-indigo-700 hover:bg-gray-50 sm:inline-block sm:w-auto"
                to="contact"
              >
               Get Started
              </NavLink>
            </div>
          </div>
        </div>
      </div>
</section>
  </main>
    </>


  );
};
