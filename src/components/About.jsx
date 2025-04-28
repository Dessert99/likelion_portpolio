import React from 'react';
import me from '../assets/img/me.jpg';
import logo from '../assets/img/logo.gif';

const About = () => {
  return (
    <section id="about">
      <div className="about__inner">
        <h2 className="about__title">about me</h2>
        <div className="about__wrap">
          <article className="about__item s1">
            <span className="num">1. 자기소개</span>

            <div className="box">
              <div className="img">
                <img src={me} alt="내 사진" />
              </div>
              <div className="text">
                <div>임재준</div>
                <div>1999.11.10.</div>
                <div>서울특별시 이문동</div>
              </div>
            </div>
          </article>
          <article className="about__item s2">
            <span className="num">2. 학력</span>
            <div className="box">
              <div className="img">
                <img src={logo} alt="로고" />
              </div>
              <div className="text">
                <div>한국외국어대학교 서울캠퍼스</div>
                <div>태국학과</div>
                <div>Software&AI</div>
              </div>
            </div>
          </article>
          <article className="about__item s3">
            <span className="num">3. 가치관</span>
            <div className="text">
              <div>누구에게나 잘 어울리는 사람을 지향합니다.</div>
              <div>제가 속한 공동체를 소중히 여기며, 함께 성장하는 것을 소중한 가치로 삼습니다.</div>
            </div>
          </article>
          <article className="about__item s4">
            <span className="num">4. 장점</span>
            <div></div>
            <div className="text">
              <div>새로운 지식을 빠르게 받아들이며 꾸준히 성장합니다.</div>
              <div>효율적인 시간 관리를 통해 일과 삶의 균형을 유지합니다.</div>

              <div>정신 건강과 감정 관리를 통해 언제나 안정적이고 긍정적인 모습을 유지합니다.</div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
