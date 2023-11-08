import React from 'react';

const Hello = () => (
  <div className="home-container">
    <div className="home-main">
      <div className="numbered-menu">
        <p>01</p>
      </div>
      <div className="intro">
        <p>Hello&apos; I&lsquo;m</p>
      </div>
      <div>
        <img src="/images/portfolio-icons/medium-ellipse.png" alt="Mediumellipse" className="mobile-ellipse" />
      </div>
      <div className="name">
        <p>
          Sane
          <br />
          Myburg
        </p>
      </div>
      <div className="intro-para">
        <p>
          Welcome to my portfolio&apos; I&lsquo;m a passionate full-stack developer&apos;
          look through to some of my projects and experience.
          Whether you&lsquo;re here to explore my projects&apos; learn more about my skills&apos;
          or discuss potential collaboration&apos;
          I&lsquo;m excited to share my journey with you.
        </p>
      </div>
      <div className="my-works">
        <p>See my works</p>
      </div>
      <hr />
      <div className="socials">
        <img src="/images/portfolio-icons/github-icon.png" alt="GitHub-Icon" />
        <img src="/images/portfolio-icons/linkedin-icon.png" alt="LinkedIn-Icon" />
        <img src="/images/portfolio-icons/medium-icon.png" alt="Medium-Icon" />
        <img src="/images/portfolio-icons/angellist-icon.png" alt="Angellist-Icon" />
      </div>
    </div>
  </div>
);

export default Hello;
