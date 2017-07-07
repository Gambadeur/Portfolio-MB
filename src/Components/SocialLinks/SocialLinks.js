import React from 'react';
import './sociallinks.css';
import codepensvg from './../../images/icons/icon-codepen.svg';
import githubsvg from './../../images/icons/icon-github.svg';
import linkedinsvg from './../../images/icons/icon-linkedin.svg';
import twittersvg from './../../images/icons/icon-twitter.svg';

const SocialLinks = () => (

      <div className="socialLinksContainer">
          <a href="https://www.linkedin.com/in/mathieu-blardone-160a69136/"><img src={linkedinsvg} alt="" target="_blank"/></a>
          <a href="https://codepen.io/Gambadeur25/#"><img src={codepensvg} alt=""/></a>
          <a href="https://github.com/Gambadeur"><img src={githubsvg} alt=""/></a>
          <a href="https://twitter.com/mathieublardone"><img src={twittersvg} alt=""/></a>
      </div>
)

export default SocialLinks;