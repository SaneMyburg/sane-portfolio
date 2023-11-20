import React from 'react';

const Hello = () => (
  <div className="hello-container">
    <div className="home-main">
      <div className="numbered-menu">
        <p>01</p>
      </div>
      <div className="intro">
        <p>Hello&apos; I&lsquo;m</p>
      </div>
      <div>
        <img src="/images/portfolio-icons/medium-ellipse.png" alt="Mediumellipse" className="mobile-ellipse desktop-ellipse" />
      </div>
      <div className="name">
        <p>Sane</p>
        <p className="last-name">Myburg</p>
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
        <a href="https://github.com/SaneMyburg" target="_blank" rel="noopener noreferrer">
          <img src="/images/portfolio-icons/github-icon.png" alt="GitHub-Icon" />
        </a>
        <a href="https://www.linkedin.com/in/sanemyburg/" target="_blank" rel="noopener noreferrer">
          <img src="/images/portfolio-icons/linkedin-icon.png" alt="LinkedIn-Icon" />
        </a>
        <a href="https://medium.com/@sane.myburg" target="_blank" rel="noopener noreferrer" className="medium">
          <img src="/images/portfolio-icons/medium-icon.png" alt="Medium-Icon" />
        </a>
      </div>
    </div>
  </div>
);

export default Hello;
