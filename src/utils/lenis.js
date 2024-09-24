import Lenis from '@studio-freight/lenis';

// 스무스 효과 빌드업
const lenis = () => {
  const lenis = new Lenis({
    duration: 1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  lenis.on('scroll', (e) => {
    console.log(e);
  });
};

export default lenis;
