import React from 'react';
import Main from '../components/Main';
import About from '../components/About';
import Header from '../components/Header';

const HomeView = () => {
  return (
    <>
      <Header />
      <Main>
        <About />
      </Main>
    </>
  );
};

export default HomeView;
