import React from 'react';

// 핵심 데이터 부품화
const contactText = [
  {
    link: 'https://open.kakao.com/o/sCIpVY4f',
    title: 'KAKAO : kim seong su',
  },
  {
    link: 'mailto:know.warehouse02@gmail.com',
    title: 'know.warehouse02@gmail.com',
  },
];

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact__inner">
        <h2 className="contact__title">Contact</h2>
        <div className="contact__lines" aria-hidden="true">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <div className="contact__text">
          <div className="text">
            {contactText.map((contact, key) => (
              <div key={key}>
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contact.title}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="contact__lines bottom" aria-hidden="true">
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

export default Contact;
