import React from 'react';
import Header from '../components/Header';
import Skip from '../components/Skip';
import Intro from '../components/Intro';
import Skill from '../components/Skill';
import Site from '../components/Site';
import Port from '../components/Port';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Main from '../components/Main';

// rafce <- 기본 리액트 문법 완성 단축키 (확장 플러그인 설치 필요)
const HomeView = () => {
  return (
    <>
      <Skip />
      <Header />
      <Main>
        <Intro />
        <Skill />
        <Site />
        <Port />
        <Contact />
      </Main>
      <Footer />
    </>
  );
};

export default HomeView;
// 메인 홈페이지 컨트롤 파일.
