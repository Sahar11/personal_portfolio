import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FiDribbble} from 'react-icons/fi';

const HeadersSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/sahar-halim-18391044/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/Sahar11" target="_blank" rel="noreferrer" ><FaGithub /></a>
    </div>
  )
}

export default HeadersSocials