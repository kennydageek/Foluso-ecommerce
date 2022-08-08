import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer ">
      <div className="info">
        <h1>Foluso</h1>

        <p>
          API consumed :
          <a href=" https://fakestoreapi.com/ "> Fake Store API</a>
        </p>
        <p>
          Stutern Assignment
          <a href="#"> Foluso Ojo</a>
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://linkedin.com/in/jeyi-adole-1301401b9"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/the_erthnite?s=09"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter />
        </a>
        <a href="#">
          <FaGithub />
        </a>
      </div>
      <span>
        UI designed and developed by Foluso. Web Application built with React
        solely for pratice and showcase purposes.
      </span>
    </footer>
  );
};

export default Footer;
