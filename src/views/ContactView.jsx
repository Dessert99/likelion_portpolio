import React from 'react';
import github from '../assets/img/github.png';
import mail from '../assets/img/mail.png';
import insta from '../assets/img/insta.jpg';

const Contact = () => {
  return (
    <section id="contactView">
      <div className="contact__inner">
        <div className="contact__title">contact</div>

        <div className="contact__wrap">
          <article className="contact__item">
            <div className="img">
              <img src={github} alt="github" />
            </div>
            <div className="name">github</div>
            <div className="text">Dessert99</div>
          </article>

          <article className="contact__item">
            <div className="img">
              <img src={mail} alt="mail" />
            </div>
            <div className="name">Mail</div>
            <div className="text">lsjh1234@naver.com</div>
          </article>

          <article className="contact__item">
            <div className="img">
              <img src={insta} alt="insta" />
            </div>
            <div className="name">Instagram</div>
            <div className="text">j.jo_on</div>
          </article>
        </div>
      </div>
      <div className="contact__lines bottom">
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </section>
  );
};

export default Contact;
