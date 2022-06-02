import { Routes, Route } from 'react-router-dom';
import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { Withdrawer } from '../../forms/Withdrawer';
// eslint-disable-next-line import/no-unresolved
import { Catalog } from '../../forms/Catalog';
// eslint-disable-next-line import/no-unresolved
import { EmploymentForm } from '../../forms/EmploymentForm';
// eslint-disable-next-line import/no-unresolved
import { Enrollement } from '../../forms/Enrollement';
// eslint-disable-next-line import/no-unresolved
import { ReEnrollement } from '../../forms/ReEnrollement';
// eslint-disable-next-line import/no-unresolved
import { NotFound } from '../../pages/NotFound';
// eslint-disable-next-line import/no-unresolved
import { Home } from '../../pages/Home';
// eslint-disable-next-line import/no-unresolved
import { About } from '../../pages/About';
// eslint-disable-next-line import/no-unresolved
import { Projects } from '../../pages/Projects';
// eslint-disable-next-line import/no-unresolved
import { Blog } from '../../pages/Blog';
// eslint-disable-next-line import/no-unresolved
import { Contact } from '../../contacts/Contact';
// eslint-disable-next-line import/no-unresolved
import { SignUp } from '../auth/SignUp';
// eslint-disable-next-line import/no-unresolved
import { SignedIn } from '../auth/SignedIn';
// eslint-disable-next-line import/no-unresolved
import { Testimonials } from '../../pages/Testimonials';

// eslint-disable-next-line import/no-unresolved
import { ContactList } from '../../contacts/ContactList';
// eslint-disable-next-line import/no-unresolved
import { Curriculum } from '../../forms/Curriculum';


export const MainRoutes = () => (

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contactList" element={<ContactList/>} />
        <Route path="testimonials" element={<Testimonials/>} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signedIn" element={<SignedIn />} />
        <Route path="withdrawer" element={<Withdrawer />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="curriculum" element={<Curriculum />} />
        <Route path="enrollement" element={<Enrollement />} />
        <Route path="renrollement" element={<ReEnrollement />} />
        <Route path="employmentForm" element={<EmploymentForm />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
