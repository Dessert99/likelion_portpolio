import React from 'react';
import Main from '../components/Main';
import About from '../components/About';
import Activities from '../components/Activities';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Contact from '../components/Contact';

const HomeView = () => {
  return (
    <>
      <Header />
      <Main>
        <About />
        <Activities />
        <Contact />
      </Main>
      <Footer />
    </>
  );
};

export default HomeView;
