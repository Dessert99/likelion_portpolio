import React from 'react';
import gdg from '../assets/img/gdg.png';
import likelion from '../assets/img/likelion.png';

const Activities = () => {
  return (
    <section id="activities">
      <div className="activities__inner">
        <div className="activities__title">activities</div>

        <div className="activities__wrap">
          <article className="activities__item">
            <a href="https://sites.google.com/view/gdeveloperskorea/gdg" className="img" target="_blank">
              <img src={gdg} alt="gdg" />
            </a>
            <div className="name">GDG</div>
            <div className="term">2024.09. ~ 현재</div>
          </article>
          <article className="activities__item">
            <div className="logo">
              <a href="https://likelion.university/" className="img" target="_blank">
                <img src={likelion} alt="likelion" />
              </a>
              <div className="name">멋쟁이사자처럼</div>
            </div>
            <div className="term">2025.03. ~ 현재</div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Activities;
