import React from 'react';
// 리액트에서 이미지 가져오기
import NewJeans from '../assets/img/NewJeans__해린.jpg';

// 핵심 데이터 작업 / 부품화
const introText = {
  title: 'port developer',
  desc: ['talent is', 'found at the end of the', 'effort'],
};
// 재사용성이 증가. 위 tilte과 desc만 바꾸면 됨.

const Intro = () => {
  return (
    <section id="intro">
      <div className="intro__inner">
        <h1 className="intro__title">{introText.title}</h1>
        <div className="intro__lines" aria-hidden="true">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <div className="intro__text">
          <div className="text">
            <div>{introText.desc[0]}</div>
            <div>{introText.desc[1]}</div>
            <div>{introText.desc[2]}</div>
          </div>
          <div className="img">
            <img src={NewJeans} alt="뉴진스 해린" />
          </div>
        </div>
        <div className="intro__lines bottom" aria-hidden="true">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </section>
  );
};

export default Intro;
